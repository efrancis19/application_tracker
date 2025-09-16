from django.db import models

class Application(models.Model):
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    date_applied = models.DateField()
    status = models.CharField(max_length=100, choices=
        [("applied", "Applied"),
         ("interview", "Interview"),
         ("offer", "Offer"),
         ("rejected", "Rejected"),
         ])
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.company} - {self.position}"

