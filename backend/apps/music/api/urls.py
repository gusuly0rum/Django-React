from django.urls import path
from .views import (
    SongListView,
    SongCreateView,
    SongUpdateView,
    SongDeleteView
)


app_name = 'music'

urlpatterns = [
    path('', SongListView.as_view() ,name='list'),
    path('create/', SongCreateView.as_view() ,name='create'),
    path('<pk>/update/', SongUpdateView.as_view() ,name='update'),
    path('<pk>/delete/', SongDeleteView.as_view() ,name='delete'),
]