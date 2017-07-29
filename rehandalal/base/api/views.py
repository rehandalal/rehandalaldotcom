import hashlib

from django.conf import settings

from mailchimp3 import MailChimp
from rest_framework import views
from rest_framework.exceptions import ValidationError


class SubscribeView(views.APIView):
    def post(self, request, *args, **kwargs):
        if 'email' not in request.data:
            raise ValidationError(detail='`email` is required.')

        email = request.data.get('email')
        email_hash = hashlib.md5(email.encode()).hexdigest()

        mailchimp = MailChimp(mc_user=settings.MAILCHIMP_USERNAME,
                              mc_secret=settings.MAILCHIMP_API_KEY)

        data = {
            'email': email,
            'status_if_new': 'pending'
        }

        member = mailchimp.member.create_or_update(
            list_id=settings.MAILCHIMP_LIST_ID, member_id=email_hash, data=data)

        return views.Response(member)


class UpdateDetailsView(views.APIView):
    def post(self, request, *args, **kwargs):
        if 'email' not in request.data:
            raise ValidationError(detail='`email` is required.')

        email = request.data.get('email')
        email_hash = hashlib.md5(email.encode()).hexdigest()

        mailchimp = MailChimp(mc_user=settings.MAILCHIMP_USERNAME,
                              mc_secret=settings.MAILCHIMP_API_KEY)

        data = {
            'merge_fields': {
                'FNAME': request.data.get('fname'),
                'LNAME': request.data.get('lname'),
                'CITY': request.data.get('city'),
                'COUNTRY': request.data.get('country'),
            }
        }

        member = mailchimp.member.update(
            list_id=settings.MAILCHIMP_LIST_ID, member_id=email_hash, data=data)

        return views.Response(member)
