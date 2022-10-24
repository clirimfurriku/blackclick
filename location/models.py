from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=256)
    code = models.CharField(max_length=256)

    class Meta:
        verbose_name_plural = "Countries"

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=256)
    code = models.CharField(max_length=256)

    country = models.ForeignKey(Country, null=True, blank=True, on_delete=models.PROTECT)

    class Meta:
        verbose_name_plural = "Cities"

    def __str__(self):
        return self.name
