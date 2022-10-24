from django.contrib import admin

from visit.models import VisitSchedule


@admin.register(VisitSchedule)
class VisitScheduleAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "completed",
        "status",
        "task",
        "device_type",
        "screen_size",
        "country",
        "city",
        "periodic",
        "repeat",
        "repeat_every_min_start",
        "repeat_every_min_end",
        "visit_x_nuber_of_first_results",
        "last_run",
        "start_time",
        "deleted_at",
        "created_by",
    )
    list_filter = (
        "completed",
        "task",
        "country",
        "city",
        "periodic",
        "last_run",
        "start_time",
        "created_at",
        "updated_at",
        "deleted_at",
        "created_by",
    )
    date_hierarchy = "created_at"
