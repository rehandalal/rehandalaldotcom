from django.conf.urls import url

from rehandalal.base import views
from rehandalal.base.api import views as api_views


urlpatterns = [
    url(r'^api/v1/mailing_list/subscribe/', api_views.SubscribeView.as_view()),
    url(r'^api/v1/mailing_list/update_details/', api_views.UpdateDetailsView.as_view()),
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^(?!(api)|(admin)).+$', views.IndexView.as_view()),
]
