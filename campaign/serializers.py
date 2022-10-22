from rest_framework import serializers

from campaign.models import Campaign


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        exclude = ("deleted_at",)
        read_only_fields = ("created_at", "updated_at", "deleted_at", "created_by")
