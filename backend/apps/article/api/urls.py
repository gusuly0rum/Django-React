from django.urls import path
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter


# router = DefaultRouter()
# router.register('', ArticleViewSet)
# urlpatterns = router.urls


app_name = 'articles'

urlpatterns = [
    path('', ArticleViewSet.as_view({'get': 'list'}), name='list'),
    path('create/', ArticleViewSet.as_view({'post': 'create'}), name='create'),
    path('<pk>/', ArticleViewSet.as_view({'get': 'retrieve'}), name='detail'),
    path('<pk>/update/', ArticleViewSet.as_view({'patch': 'update'}) ,name='update'),
    path('<pk>/delete/', ArticleViewSet.as_view({'delete': 'delete'}) ,name='delete'),
]


# from .views import (
#     ArticleListView,
#     ArticleDetailView,
#     ArticleCreateView,
#     ArticleUpdateView,
#     ArticleDeleteView
# )

# app_name = 'articles'

# urlpatterns = [
#     path('', ArticleListView.as_view(), name='list'),
#     path('create/', ArticleCreateView.as_view(), name='create'),
#     path('<pk>/', ArticleDetailView.as_view(), name='detail'),
#     path('<pk>/update/', ArticleUpdateView.as_view(), name='update'),
#     path('<pk>/delete/', ArticleDeleteView.as_view(), name='delete'),
# ]
