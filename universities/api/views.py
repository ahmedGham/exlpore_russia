from rest_framework.decorators import api_view
from .utilities import CourseCodesToDegrees, FormData
from . import serializers
from universities import models
from rest_framework.response import Response


@api_view(['GET'])
def allunv(request):
    params = request.query_params
    course_name = params.get("course")
    language = params.get("language")
    max_price = params.get("maxPrice")
    min_price = params.get("minPrice")
    city = params.get("city")
    degree = params.get("degree")

    data = models.Price.objects.all()

    if (course_name and course_name != 'all'):
        data = data.filter(course_code__course__name=course_name)

    if (language and language != 'all'):
        data = data.filter(langauge=language)

    if (max_price and max_price != 'all'):
        data = data.filter(price__lte=int(max_price))

    if (min_price and min_price != 'all'):
        data = data.filter(price__gte=min_price)

    if (city and city != 'all'):
        data = data.filter(university__city__name=city)

    if (degree and degree != 'all'):
        data = data.filter(course_code__degree=degree)

    serializer = serializers.PriceSerializer(data, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def formData(request):
    params = request.query_params
    city = params.get("city")
    degree = params.get("degree")
    course_name = params.get("course")

    data = FormData(
        models.City.objects.all(),
        models.CourseCode.objects.all(),
        models.Course.objects.all()
    )

    if (degree and degree != 'all'):
        courses = data.courses.filter(
            coursecode__degree=degree).distinct()
        data.set_courses(courses)
        cities = data.cities.filter(
            universities__courses_codes__degree=degree).distinct()
        data.set_cities(cities)

    if (course_name and course_name != 'all'):
        cities = data.cities.filter(
            universities__courses_codes__course__name=course_name).distinct()
        data.set_cities(cities)
        degrees = data.degrees.filter(
            course__name=course_name).distinct()
        data.set_degrees(degrees)

    if (city and city != 'all'):
        degrees = data.degrees.filter(
            universities__city__name=city).distinct()
        data.set_degrees(degrees)
        courses = data.courses.filter(
            coursecode__universities__city__name=city).distinct()
        data.set_courses(courses)

    data.set_degrees(CourseCodesToDegrees(data.degrees))
    serializer = serializers.FormDataSerializer(data)

    return Response(serializer.data)
