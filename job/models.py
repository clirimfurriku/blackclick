from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Task(models.Model):
    class TaskStatusChoices(models.TextChoices):
        CREATED = "c"
        IN_PROGRESS = "p"
        FAILED = "f"
        DONE = "d"

    query = models.CharField(max_length=512)
    completed = models.BooleanField(default=False)
    status = models.CharField(
        max_length=1, choices=TaskStatusChoices.choices, default=TaskStatusChoices.CREATED, blank=True
    )

    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    created_by = models.ForeignKey(User, on_delete=models.PROTECT)

    campaign = models.ForeignKey("campaign.Campaign", on_delete=models.PROTECT)
