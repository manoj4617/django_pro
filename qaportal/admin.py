from django.contrib import admin
from .models import *
 
admin.site.site_header = "Discussion site admin"
admin.site.site_title = "ADMIN | Discussion site"
admin.site.index_title = "Welcome"

#class CommentsInline(admin.TabularInline):
  #  model = Comments

#class TopicAdmin(admin.ModelAdmin):
    #fieldsets = []

# Register your models here.
