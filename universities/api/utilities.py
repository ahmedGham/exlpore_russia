class FormData():
    def __init__(self, cities, degrees, courses):
        self.cities = cities
        self.degrees = degrees
        self.courses = courses

    def set_cities(self, cities):
        self.cities = cities

    def set_degrees(self, degrees):
        self.degrees = degrees

    def set_courses(self, courses):
        self.courses = courses


def CourseCodesToDegrees(courseCodes):
    degrees = map(lambda courseCode: courseCode.degree, courseCodes)
    return list(degrees)
