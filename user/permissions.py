from rest_framework.permissions import BasePermission


class IsHimself(BasePermission):
    """
    Only the user himself has permission
    """

    def has_object_permission(self, request, view, obj):
        return request.user.is_authenticated and request.user == obj
