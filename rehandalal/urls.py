from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.staticfiles.views import serve


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('rehandalal.news.urls')),
]


if settings.DEBUG:
    urlpatterns += [
        url(r'^favicon.ico$', serve, kwargs={'path': 'favicon.ico'}),
    ]


urlpatterns += [
    url(r'', include('rehandalal.base.urls')),
]
