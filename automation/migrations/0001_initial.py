# Generated by Django 4.1.2 on 2022-10-24 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Location",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("country", models.CharField(max_length=256)),
                ("city", models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name="Log",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=512)),
                ("result", models.CharField(max_length=4096)),
            ],
        ),
    ]
