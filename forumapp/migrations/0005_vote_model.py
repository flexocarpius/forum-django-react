# Generated by Django 3.1.5 on 2021-01-13 19:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forumapp', '0004_auto_20210113_1118'),
    ]

    operations = [
        migrations.AddField(
            model_name='vote',
            name='model',
            field=models.CharField(default='Answer', max_length=20),
            preserve_default=False,
        ),
    ]
