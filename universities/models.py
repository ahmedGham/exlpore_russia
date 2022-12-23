from email.policy import default
from enum import unique
from uuid import uuid4
from django.db import models


class City(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name


class CourseCode(models.Model):
    DEGREE = (("bachelor", "bachelor"), ("master",
                                         "master"), ("doctoral", "doctoral"),)
    code = models.CharField(max_length=20)
    degree = models.CharField(
        max_length=20, choices=DEGREE, default="bachelor")
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.code


class University(models.Model):
    name = models.CharField(max_length=200)
    badfak_deadline = models.DateField()
    apply_deadline = models.DateField()
    city = models.ForeignKey(
        City, related_name="universities", on_delete=models.CASCADE,)
    courses_codes = models.ManyToManyField(
        CourseCode, related_name="universities", through="Price", through_fields=('university', 'course_code'),)

    def __str__(self) -> str:
        return self.name


class Price(models.Model):
    LANGAUGES = (("english", "english"), ("russian",
                                          "russian"),)
    university = models.ForeignKey(
        University, on_delete=models.CASCADE, related_name="prices")
    course_code = models.ForeignKey(
        CourseCode, related_name="prices", on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2, null=False)
    langauge = models.CharField(
        max_length=20, choices=LANGAUGES, default="english")

    def __str__(self) -> str:
        return str(self.price)
