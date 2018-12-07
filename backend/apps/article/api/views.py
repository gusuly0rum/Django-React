from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.shortcuts import get_object_or_404


from article.models import Article
from .serializers import ArticleSerializer
from .utils import formatter, query_filter
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
        serializer = ArticleSerializer(article)
        article = formatter([serializer.data])
        return Response(article)


class ArticleCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ArticleSerializer(data=request.data, context={'request': request})
        
        if serializer.is_valid():
            serializer.save()
            article = formatter([serializer.data])
            return Response(article, status=201)
        return Response(serializer.errors, status=400)


class ArticleUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        serializer = ArticleSerializer(article, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            article = formatter([serializer.data])
            return Response(article)
            
        return Response(serializer.errors)


class ArticleDeleteView(DestroyAPIView):
    permission_classes = [IsAuthenticated]

    def destroy(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, pk=pk)
        articleId = article.id
        article.delete()
        return Response(articleId)