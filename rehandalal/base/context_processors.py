from django.conf import settings


def global_vars(request):
    return {
        'settings': settings,
    }
