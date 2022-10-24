from django.contrib import admin

from campaign.models import Campaign


@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "start_time",
        "end_time",
        "created_at",
        "updated_at",
        "deleted_at",
        "created_by",
        "status",
    )
    list_filter = (
        "start_time",
        "end_time",
        "created_at",
        "updated_at",
        "deleted_at",
        "created_by",
    )
    search_fields = ("name",)
    date_hierarchy = "created_at"
