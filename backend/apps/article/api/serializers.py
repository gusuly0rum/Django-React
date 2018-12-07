from article.models import Article
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ['id', 'author', 'date_created']

        def validate_title(self, value):
            queryset = Article.objects.filter(title__iexact=value)
            if queryset.exists():
                raise serializers.ValidationError('An article with the same title already exists')
            return value