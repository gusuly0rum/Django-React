from rest_framework import serializers
from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['id', 'author', 'article', 'date_created']

    def create(self, validated_data):
        author = self.context['request'].user
        article = validated_data.get('article_id')
        body = validated_data.get('body')

        comment = Comment.objects.create(author=author, article=article_id, body=body)
        return comment