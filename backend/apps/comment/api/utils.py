from django.db.models import Q


def formatter(comments):
    result = {}
    for comment in comments:
        comment_id = comment['id']
        result[comment_id] = comment
    return result