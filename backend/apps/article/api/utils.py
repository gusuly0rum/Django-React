from django.db.models import Q


def formatter(articles):
    result = {}
    for article in articles:
        article_id = article['id']
        result[article_id] = article
    return result