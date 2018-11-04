from django.db import models
from django.core.validators import RegexValidator

class Org(models.Model):
    name = models.CharField(max_length = 200)
    age_grp = models.IntegerField()
    category = models.CharField(max_length = 200)
    suburb = models.CharField(max_length = 20)
    website = models.URLField()
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message = "Phone number format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators = [phone_regex], max_length = 17, blank = True)
    address = models.CharField(max_length = 300)
