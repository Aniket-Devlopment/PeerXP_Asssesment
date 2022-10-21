from tokenize import Name
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from Acme_Support import Config
from django.http import JsonResponse
from Acme_Support.models import *
from django.utils import timezone

@csrf_exempt
def Create_User(request):
    try:
        request = json.loads(request.body)
        if not all(key in request and request[key] for key in Config.CREATE_USER_VALID_REQUEST):
            return_object = {
                "Status":"FAIL",
                "Message":"Invalid Request Object"
            }
            return JsonResponse(return_object,safe=False)
        user_data = User()
        user_data.Name = request['Name']
        user_data.Email = request['Email']
        user_data.Phone_Number = request['Phone_Number']
        user_data.Password = request['Password']
        user_data.Department = request['Department']
        user_data.Role = request['Role']
        user_data.Created_At = timezone.now()
        user_data.Created_By = request['Name']
        user_data.Updated_At = timezone.now()
        user_data.save()
        return_object = {
            "Status":"SUCCESS",
            "Message":"User Created Successfully"
        }
    except(Exception) as error:
        print("Error in Create_User : ",error)
        return_object = {
            "Status":"FAIL",
            "Message":"Failed to Create User"
        }
    return JsonResponse(return_object,safe=False)


@csrf_exempt
def Create_Department(request):
    try:
        request = json.loads(request.body)
        if not all(key in request and request[key] for key in ['Name','Description']):
            return_object = {
                "Status":"FAIL",
                "Message":"Invalid Request Object"
            }
            return JsonResponse(return_object,safe=False)
        department_data = Department()
        department_data.Name = request['Name']
        department_data.Description = request['Description']
        department_data.Created_At = timezone.now()
        department_data.Created_By = request['Name']
        department_data.Updated_At = timezone.now()
        department_data.save()
        return_object = {
            "Status":"SUCCESS",
            "Message":"Department Created Successfully"
        }
    except (Exception) as error:
        print("Error in Create_Department : ",error)
        return_object = {
            "Status":"FAIL",
            "Message":"Failed to Create Department"
        }
    return JsonResponse(return_object,safe=False)

@csrf_exempt
def Update_Department(request):
    try:
        request = json.loads(request.body)
        if 'Name' in request and request['Name'] and 'Description' in request and request['Description']:
            department_object = Department.objects.filter(Name = request['Name']).first()
            if department_object:
                department_object.Name = request['Name']
                department_object.Description = request['Description']
                department_object.Updated_At = timezone.now()
                department_object.save()
                return_object = {
                    "Status":"SUCCESS",
                    "Message":"Department Updated Successfully"
                }
            else:
                return_object = {
                    "Status":"FAIL",
                    "Message":"Department Not Found"
                }
        else:
            return_object = {
                    "Status":"FAIL",
                    "Message":"Invalid Request Object"
                }
    except(Exception) as error:
        print("Error in Update_Department : ",error)
        return_object = {
            "Status":"FAIL",
            "Message":"Failed to Update Department"
        }
    return JsonResponse(return_object,safe=False)

@csrf_exempt
def Delete_Department(request):
    try:
        request = json.loads(request.body)
        if 'Name' in request and request['Name']:
            user_obj = User.objects.filter().values('Name','Department')
            department_obj = [sub['Department'] for sub in user_obj if sub['Department'] == request['Name']]
            if department_obj:
                return_object = {
                    "Status":"FAIL",
                    "Message":"Department is Already Assigned to User"
                }
            else:
                department_obj = Department.objects.filter(Name = request['Name']).delete()
                return_object = {
                    "Status":"SUCCESS",
                    "Message":"Department Deleted Successfully"
                }
    except(Exception) as error:
        print("Error in Delete_Department : ",error)
        return_object = {
            "Status":"FAIL",
            "Message":"Failed to Delete Department"
        }
    return JsonResponse(return_object,safe=False)