from django.urls import path
from .import views

urlpatterns = [
    path('createuser',views.Create_User),
    path('createdept',views.Create_Department),
    path('updatedept',views.Update_Department),
    path('deletedept',views.Delete_Department),
]
