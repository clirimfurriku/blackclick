from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView, UpdateAPIView
from rest_framework.permissions import IsAdminUser
from rest_framework.viewsets import ModelViewSet

from user.permissions import IsHimself
from user.serializers import UserSerializer

User = get_user_model()


class UserDetail(RetrieveAPIView, UpdateAPIView):
    """
    Retrieve a user's details or update.
    Only the user himself can access this view.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsHimself,)

    def get_object(self):
        return User.objects.prefetch_related("groups", "user_permissions").get(id=self.request.user.id)


class UsersViewSet(ModelViewSet):
    """
    Retrieve all users on the system
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)
