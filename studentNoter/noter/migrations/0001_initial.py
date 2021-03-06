# Generated by Django 3.2.9 on 2021-11-13 13:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('userId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userCat', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(max_length=100, null=True)),
                ('dueTime', models.TimeField(blank=True, null=True)),
                ('dueDate', models.DateField(blank=True, null=True)),
                ('description', models.TextField(null=True)),
                ('updated', models.DateTimeField(auto_now=True, null=True)),
                ('created', models.DateTimeField(default=django.utils.timezone.now, null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='noter.category')),
                ('userId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userId', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
