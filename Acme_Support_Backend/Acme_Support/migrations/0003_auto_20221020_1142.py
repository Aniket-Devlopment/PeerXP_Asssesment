# Generated by Django 2.2 on 2022-10-20 06:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Acme_Support', '0002_auto_20221020_1004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='Phone_Number',
            field=models.BigIntegerField(null=True),
        ),
    ]
