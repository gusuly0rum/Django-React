from django.urls import path
from .views import (
    CommentListView,
    CommentDetailView,
    CommentCreateView,
    CommentUpdateView,
    CommentDeleteView
)


urlpatterns = [
    path('', CommentListView.as_view(), name='list'),
    path('create/', CommentCreateView.as_view(), name='create'),
    path('<pk>/', CommentDetailView.as_view(), name='detail'),
    path('<pk>/update', CommentUpdateView.as_view(), name='update'),
    path('<pk>/delete', CommentDeleteView.as_view(), name='delete')
]