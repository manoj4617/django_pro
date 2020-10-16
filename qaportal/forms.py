from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label = 'Your name' , max_length = 30, required = True)
    password = forms.CharField(label = 'Password' , max_length = 30 , required = True)

class SignUpForm(forms.Form):
    name = forms.CharField(label = 'Your Name' , max_length = 30 , required = True)
    username = forms.CharField(label = 'Username' , max_length = 150 , required = True)
    email = forms.EmailField(label = 'Email',required = True)
    password = forms.CharField(label = 'Password' , required = True)

