from django.db import models
from datetime import date

class Application(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    date_applied = models.DateField(default=date.today, blank=True, null=True)  # default=date.today ensures that Django uses today's date automatically
    status = models.CharField(max_length=100, choices=                          # without the need to define it manually.
        [("applied", "Applied"),
         ("interview", "Interview"),
         ("offer", "Offer"),
         ("rejected", "Rejected"),
         ], blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.company} - {self.position}"

