from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Campaign(models.Model):
    class CampaignStatusChoices(models.TextChoices):
        CREATED = "c"
        IN_PROGRESS = "p"
        FAILED = "f"
        DONE = "d"

    name = models.CharField(max_length=512)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    created_by = models.ForeignKey(User, on_delete=models.PROTECT)

    status = models.CharField(
        max_length=1, choices=CampaignStatusChoices.choices, default=CampaignStatusChoices.CREATED, blank=True
    )

    def __str__(self):
        return self.name
