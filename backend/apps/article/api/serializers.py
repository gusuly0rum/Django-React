from article.models import Article
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        fields = '__all__'
        read_only_fields = ['id', 'author', 'date_created']
    
    def create(self, validated_data):
        author = self.context['request'].user
        title = validated_data.get('title')
        body = validated_data.get('body')
        article = Article.objects.create(author=author, **validated_data)
        return article

    #     def validate_title(self, value):
    #         queryset = Article.objects.filter(title__iexact=value)
    #         if queryset.exists():
    #             raise serializers.ValidationError('An article with the same title already exists')
    #         return value