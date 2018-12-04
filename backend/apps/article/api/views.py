from article.models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .formatters import formatter, query_filter
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)


class ArticleListView(ListAPIView):
    permission_classes = [AllowAny]

    def get(self, request):
        queryset = Article.objects.all()
        articles = query_filter(request, queryset)
        serializer = ArticleSerializer(articles, many=True)
        articles = formatter(serializer.data)
        return Response(articles)


class ArticleDetailView(RetrieveAPIView):
    permission_classes = [AllowAny]

    def get(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)


class ArticleCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        article = Article(author=request.user, title=request.data['title'], body=request.data['body'])
        article.save()
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)


class ArticleUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)


class ArticleDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)