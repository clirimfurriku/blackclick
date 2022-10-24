from rest_framework import serializers

from visit.models import VisitSchedule


class VisitScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitSchedule
        exclude = ("deleted_at", "completed", "screen_width", "screen_height")
        read_only_fields = ("created_at", "updated_at", "deleted_at", "created_by", "status")
