from article.models import Article
from .serializers import ArticleSerializer
from rest_framework.viewsets import ViewSet
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

    # def create(self, request):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass