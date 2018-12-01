from django.db.models import Q


def formatter(array):
    result = {}
    for dictionary in array:
        dict_id = dictionary['id']
        result[dict_id] = dictionary
    return result


def query_filter(request, queryset):
    query = request.GET.get('q')

    if query is not None:
        articles = queryset.filter(
            Q(title__icontains=query) or
            Q(body__icontains=query))
        return articles

    return queryset