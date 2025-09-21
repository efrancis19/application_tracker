from django.db import models

class Application(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    date_applied = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=100, choices=
        [("applied", "Applied"),
         ("interview", "Interview"),
         ("offer", "Offer"),
         ("rejected", "Rejected"),
         ], blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.company} - {self.position}"

