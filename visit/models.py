from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class VisitSchedule(models.Model):
    class VisitScheduleStatusChoices(models.TextChoices):
        CREATED = "c"
        IN_PROGRESS = "p"
        FAILED = "f"
        DONE = "d"

    class DeviceChoices(models.TextChoices):
        DESKTOP = "Desktop"
        MOBILE = "Mobile"
        TABLET = "Tablet"
        RANDOM = "Random"

    class BrowserChoices(models.TextChoices):
        CHROME = "Chrome"
        FIREFOX = "Firefox"
        RANDOM = "Random"

    class ScreenSize(models.TextChoices):
        BIG = "Big"
        MEDIUM = "Medium"
        SMALL = "Small"
        RANDOM = "Random"

    completed = models.BooleanField(default=False)
    status = models.CharField(
        max_length=1, choices=VisitScheduleStatusChoices.choices, default=VisitScheduleStatusChoices.CREATED, blank=True
    )

    task = models.ForeignKey("job.Task", on_delete=models.PROTECT, related_name="visits")

    screen_width = models.PositiveSmallIntegerField()
    screen_height = models.PositiveSmallIntegerField()

    device_type = models.CharField(max_length=20, choices=DeviceChoices.choices, default=DeviceChoices.RANDOM)

    screen_size = models.CharField(max_length=20, choices=ScreenSize.choices, default=ScreenSize.RANDOM)

    country = models.ForeignKey("location.Country", on_delete=models.PROTECT, null=True, blank=True)
    city = models.ForeignKey("location.City", on_delete=models.PROTECT, null=True, blank=True)

    periodic = models.BooleanField(default=False)
    repeat = models.PositiveSmallIntegerField(default=1)
    repeat_every_min_start = models.PositiveSmallIntegerField()
    repeat_every_min_end = models.PositiveSmallIntegerField(null=True, blank=True)

    visit_x_nuber_of_first_results = models.PositiveSmallIntegerField(default=4, blank=True)
    last_run = models.DateTimeField(null=True, blank=True)

    start_time = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    created_by = models.ForeignKey(User, on_delete=models.PROTECT)
