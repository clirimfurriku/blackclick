from django.utils import timezone
from rest_framework.viewsets import ModelViewSet

from visit.models import VisitSchedule
from visit.serializers import VisitScheduleSerializer


class VisitScheduleViewSet(ModelViewSet):
    queryset = VisitSchedule.objects.filter(deleted_at=None)
    serializer_class = VisitScheduleSerializer

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return self.queryset.filter(created_by=self.request.user)

    def perform_destroy(self, instance):
        instance.deleted_at = timezone.now()
        instance.save()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
