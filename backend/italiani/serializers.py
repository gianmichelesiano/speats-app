from rest_framework import serializers

from .models import ItalianiCH


class ItalianiChSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItalianiCH
        fields = "__all__"