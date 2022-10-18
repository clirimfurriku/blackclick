import os

from celery import Celery, shared_task

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "blackclick.settings.prod")

app = Celery("blackclick")

app.config_from_object("django.conf:settings", namespace="CELERY")

app.autodiscover_tasks()


@shared_task
def test_celery_working(x, y):
    return x + y


@shared_task
def check_scheduled_runs():
    ...
