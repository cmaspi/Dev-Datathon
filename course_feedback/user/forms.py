from django import forms


class new_form(forms.Form):
    file = forms.FileField()
