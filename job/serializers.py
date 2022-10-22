from rest_framework import serializers

from job.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        exclude = ("deleted_at", "completed")
        read_only_fields = ("created_at", "updated_at", "deleted_at", "created_by")
