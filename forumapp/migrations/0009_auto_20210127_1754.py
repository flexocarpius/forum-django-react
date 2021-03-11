# Generated by Django 3.1.5 on 2021-01-28 01:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('forumapp', '0008_auto_20210113_1149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='content',
            field=models.CharField(blank=True, max_length=5000, null=True),
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('POST', 'POST'), ('ANSWER', 'ANSWER')], max_length=20)),
                ('action', models.CharField(choices=[('ANSWERED', 'ANSWERED'), ('CREATED', 'CREATED'), ('COMMENTED', 'COMMENTED'), ('SELECTED_ANSWER', 'SELECTED_ANSWER')], max_length=20)),
                ('created_date', models.DateTimeField()),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]