from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "date_joined",
            "groups",
            "user_permissions",
            "password",
        )
        read_only_fields = (
            "id",
            "username",
            "date_joined",
            "groups",
            "user_permissions",
        )
        extra_kwargs = {"password": {"write_only": True}}
