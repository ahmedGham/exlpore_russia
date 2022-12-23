# Generated by Django 4.1 on 2022-10-13 21:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='CourseCode',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=20)),
                ('degree', models.CharField(choices=[('bachelor', 'bachelor'), ('master', 'master'), ('doctoral', 'doctoral')], default='bachelor', max_length=20)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='universities.course')),
            ],
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('langauge', models.CharField(choices=[('english', 'english'), ('russian', 'russian')], default='english', max_length=20)),
                ('course_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='universities.coursecode')),
            ],
        ),
        migrations.CreateModel(
            name='University',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('badfak_deadline', models.DateField()),
                ('apply_deadline', models.DateField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='universities.city')),
                ('courses_codes', models.ManyToManyField(through='universities.Price', to='universities.coursecode')),
            ],
        ),
        migrations.AddField(
            model_name='price',
            name='university',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='universities.university'),
        ),
    ]