from django.contrib import admin

from job.models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "query",
        "completed",
        "status",
        "start_time",
        "end_time",
        "created_at",
        "updated_at",
        "deleted_at",
        "created_by",
        "campaign",
    )
    list_filter = (
        "completed",
        "start_time",
        "end_time",
        "created_at",
        "updated_at",
        "deleted_at",
        "created_by",
        "campaign",
    )
    date_hierarchy = "created_at"
