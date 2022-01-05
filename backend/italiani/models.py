from django.db import models
from django.contrib.auth.models import User

class  ItalianiCH(models.Model):
    nome = models.CharField(max_length=64, blank = True, null = True)
    cognome = models.CharField(max_length=64, blank = True, null = True)
    data_di_nascita = models.CharField(max_length=64, blank = True, null = True)
    sesso = models.CharField(max_length=64, blank = True, null = True)
    campo_citta = models.CharField(max_length=64, blank = True, null = True)
    codice = models.CharField(max_length=64, blank = True, null = True)
    consolato = models.CharField(max_length=64, blank = True, null = True)
    consolato_citta = models.CharField(max_length=64, blank = True, null = True)
    cap = models.CharField(max_length=64, blank = True, null = True)
    indirizzo = models.CharField(max_length=64, blank = True, null = True)
    citta = models.CharField(max_length=64, blank = True, null = True)
    sigla = models.CharField(max_length=64, blank = True, null = True)
    lan = models.CharField(max_length=64, blank = True, null = True)
    lng = models.CharField(max_length=64, blank = True, null = True)
    Nazione = models.CharField(max_length=64, blank = True, null = True)
    slug = models.CharField(max_length=64, blank = True, null = True)
    distretto = models.CharField(max_length=64, blank = True, null = True)

    def __str__(self):
        nome = ''
        if self.nome:
            nome = self.nome
        cognome = ''
        if self.cognome:
            cognome = self.cognome
        return nome+ ' ' +  cognome

