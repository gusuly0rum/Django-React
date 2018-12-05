from django.db.models import Q


def formatter(articles):
    result = {}
    for article in articles:
        article_id = article['id']
        result[article_id] = article
    return result


def query_filter(request, queryset):
    query = request.GET.get('q')

    if query is not None:
        articles = queryset.filter(
            Q(title__icontains=query) or
            Q(body__icontains=query))
        return articles

    return queryset