# Generated by Django 4.1.2 on 2022-10-24 17:55

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("campaign", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("query", models.CharField(max_length=512)),
                ("completed", models.BooleanField(default=False)),
                (
                    "status",
                    models.CharField(
                        blank=True,
                        choices=[("c", "Created"), ("p", "In Progress"), ("f", "Failed"), ("d", "Done")],
                        default="c",
                        max_length=1,
                    ),
                ),
                ("start_time", models.DateTimeField()),
                ("end_time", models.DateTimeField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("deleted_at", models.DateTimeField(blank=True, null=True)),
                ("campaign", models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to="campaign.campaign")),
                (
                    "created_by",
                    models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
                ),
            ],
        ),
    ]