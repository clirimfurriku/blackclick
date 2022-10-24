from datetime import datetime

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from campaign.models import Campaign
from job.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        exclude = ("deleted_at", "completed")
        read_only_fields = ("created_at", "updated_at", "deleted_at", "created_by", "status")

    def validate_start_time(self, value: datetime):
        campaign = Campaign.objects.get(id=self.initial_data.get("campaign"))
        if value < campaign.start_time:
            raise ValidationError("Task start time cant be before campaign start time")
        if value > campaign.end_time:
            raise ValidationError("Task start time cant be after campaign end time")

        return value

    def validate_end_time(self, value: datetime):
        campaign = Campaign.objects.get(id=self.initial_data.get("campaign"))
        if value < campaign.start_time:
            raise ValidationError("Task end time cant be before campaign start time")
        if value > campaign.end_time:
            raise ValidationError("Task end time cant be after campaign end time")
        return value
