from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
#increases security by hiding the url
ATLAS_URI = os.getenv("ATLAS_URI")



#######################################
#Test commands to troubleshoot connection
#
#######################################
# '''
DATABASE_NAME = "sample_mflix"

client = MongoClient(ATLAS_URI)
db = client[DATABASE_NAME]#stored like a map with DATABASE_NAME as a key value pair
collection = db['movies']
#grab everything released in 1999
cursor = collection.find({'year':1999},{})
#grab every document but just the year fields
cursor = collection.find({},{'year'})
#grab only documents released in 1999, and only their title fields
cursor = collection.find({'year':1999}, {'title'})
# print(collection.find({'year':1999}))


#grab everything released in 1999
cursor = collection.find({'year':1999},{})
#grab every document but just the year fields
cursor = collection.find({},{'year'})
#grab only documents released in 1999, and only their title fields
cursor = collection.find({'year':1999}, {'title'})
# print(collection.find({'year':1999}))
new_doc = {'title':"New Movie",
            'year': 2020,
            'genres': ['Comedy'],
            'directors': ['Some Guy']
}
# collection.insert_one(new_doc)



# Insert the new document into the collection
collection.insert_one(new_doc)

cursor = collection.find({'title':"New Movie"}, {})
for document in cursor:
    print(document)

# '''
