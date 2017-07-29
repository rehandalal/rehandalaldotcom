from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from rehandalal.news.api import views as api_views


# API Router
router = DefaultRouter()
router.register(r'story', api_views.StoryViewSet)

urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
]
