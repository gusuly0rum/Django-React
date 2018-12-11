from .utils import formatter
from comment.models import Comment
from .serializers import CommentSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)


class CommentListView(ListAPIView):
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Comment.objects.all()
        comments = query_filter(request, queryset)
        serializer = CommentSerializer(comments, many=True)
        comments = formatter(serializer.data)
        return Response(comments)


class CommentDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]

    def get(self, request, pk=None):
        queryset = Comment.objects.all()
        comment = get_object_or_404(queryset, pk=pk)
        serializer = CommentSerializer(comment, many=False)
        comment = formatter([serializer.data])
        return Response(comment)


class CommentCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        pass


class CommentUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def update(self, request, pk=None):
        pass


class CommentDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def destroy(self, request, pk=None):
        pass


def query_filter(request, queryset):
    if any(request.data.values()) and request.data['article_id']:
        article_id = request.data['article_id']
        comments = queryset.filter(article_id=article_id)
        return comments
    return queryset
