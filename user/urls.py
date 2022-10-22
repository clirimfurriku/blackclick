from django.urls import include, path
from rest_framework.routers import DefaultRouter

from user.views import UserDetail, UsersViewSet

router = DefaultRouter()

router.register("users", UsersViewSet)

urlpatterns = [
    path("me/", UserDetail.as_view(), name="me"),
    path("", include(router.urls), name="users"),
]
