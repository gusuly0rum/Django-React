from article.models import Article
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ['id', 'pk', 'author', 'date_created']

        # def create(self, validated_data):
        #     title = validated_data.get('title', None)
        #     body = validated_data.get('body', None)
        #     author = validated_data.get('author', None)
        #     date_updated = validated_data.get('date_updated', None)
        #     date_created = validated_data.get('date_created', None)
        #     return Article.objects.create(author=author, title=title, body=body, date_updated=date_updated, date_created=date_created)

        def validate_title(self, value):
            queryset = Article.objects.filter(title__iexact=value)
            if queryset.exists():
                raise serializers.ValidationError('An article with the same title already exists')
            return value
