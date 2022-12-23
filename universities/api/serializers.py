from pyexpat import model
from tkinter.tix import Tree
from .. import models
from rest_framework import serializers


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = models.City
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = "__all__"


class UniversitySerializer(serializers.ModelSerializer):
    city = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = models.University
        exclude = ['courses_codes']

    def get_city(self, obj):
        return obj.city.name


class CourseCodeSerializer(serializers.ModelSerializer):
    course = serializers.SerializerMethodField()

    class Meta:
        model = models.CourseCode
        fields = '__all__'

    def get_course(self, obj):

        return obj.course.name


class PriceSerializer(serializers.ModelSerializer):
    university = UniversitySerializer()
    course_code = CourseCodeSerializer()

    class Meta:
        model = models.Price
        fields = '__all__'


class FormDataSerializer(serializers.Serializer):
    courses = CourseSerializer(many=True)
    degrees = serializers.ListField(max_length=20)
    cities = CitySerializer(many=True)
