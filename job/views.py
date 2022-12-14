from django.utils import timezone
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet

from job.models import Task
from job.serializers import TaskSerializer


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.filter(deleted_at=None)
    serializer_class = TaskSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)

    filterset_fields = ("status",)
    search_fields = ("name",)

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return self.queryset.filter(created_by=self.request.user)

    def perform_destroy(self, instance):
        instance.deleted_at = timezone.now()
        instance.save()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
