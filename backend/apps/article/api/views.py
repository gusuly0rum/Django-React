from article.models import Article
from .serializers import ArticleSerializer
from rest_framework.viewsets import ViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .formatters import formatter, query_filter

class ArticleViewSet(ViewSet):
    queryset = Article.objects.all()

    def list(self, request):
        articles = query_filter(request, ArticleViewSet.queryset)
        serializer = ArticleSerializer(articles, many=True)
        articles = formatter(serializer.data)
        return Response(articles)

    def retrieve(self, request, pk=None):
        article = get_object_or_404(ArticleViewSet.queryset, pk=pk)
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)

    def create(self, request):
        articles = ArticleViewSet.queryset
        article = Article(title=request.data['title'], body=request.data['body'])
        article.author = request.user
        article.save()
        serializer = ArticleSerializer(article, many=False)
        article = formatter([serializer.data])
        return Response(article)

    # def update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass







# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     lookup_field = 'pk'
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleUpdateView(UpdateAPIView):
#     lookup_field = 'pk'
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDeleteView(DestroyAPIView):
#     lookup_field = 'pk'
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer