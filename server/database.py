from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
#increases security by hiding the url
ATLAS_URI = os.getenv("ATLAS_URI")

DATABASE_NAME = 'weather_app'
client = MongoClient(ATLAS_URI)
db = client[DATABASE_NAME]

def establish_db_connection():
    client = MongoClient(ATLAS_URI)
    db = client[DATABASE_NAME]
    return db['saved_days']


#saved_days is used for saving names, days and times of photoshoots
"""Crud operations, will be linked to by routes defined in index.py
   Operations are currently synchronous due to low throughput
   They can be adapted to asychronous using asyncio
   
   Could also export establish_db_connection, and only run that once in index.py
   Then pass in the connection to these functions, to minimize databased connections
   TODO Add connection as a parameter to reduce database calls
   """
#create a new record, date and time should be in string form?
def insert_weather_day(name, date, time):
    weather_day = {
        'name':name,
        'date':date,
        'time':time
    }
    establish_db_connection().insert_one(weather_day)


# insert_weather_day('frank', '10-23-2024', '00:00:00')
#fetch a record, with all 3 parameters,
#each record has a unique id that could be used instead, returns whole record
def fetch_record(name, date, time):
    weather_day = {
        'name':name,
        'date':date,
        'time':time
    }
    return establish_db_connection().find(weather_day, {})

def fetch_all_records_for_name(name):
    return establish_db_connection().find({'name':name}, {})


#update an existing record, returns an object that shows if it was successful
def update_weather_day(old_name, old_date, old_time, new_name, new_date, new_time):
    old_weather_day = {
        'name':old_name,
        'date':old_date,
        'time':old_time
    }
    new_weather_day = {
        'name':new_name,
        'date':new_date,
        'time':new_time
    }
    establish_db_connection().update_one(old_weather_day, {'$set':new_weather_day}, upsert=False)#if upsert=True, then it would insert if there wasn't already a record

#delete a record
def delete_weather_day(name, date, time):
    weather_day = {
        'name':name,
        'date':date,
        'time':time
    }
    establish_db_connection().delete_one(weather_day)
