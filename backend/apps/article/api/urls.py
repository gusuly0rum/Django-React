from django.urls import path
from .views import (
    ArticleListView,
    ArticleDetailView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView,
)


app_name = 'articles'

urlpatterns = [
    path('', ArticleListView.as_view(), name='list'),
    path('create/', ArticleCreateView.as_view(), name='create'),
    path('<pk>/', ArticleDetailView.as_view(), name='detail'),
    path('<pk>/update/', ArticleUpdateView.as_view(), name='update'),
    path('<pk>/delete/', ArticleDeleteView.as_view(), name='delete'),
]