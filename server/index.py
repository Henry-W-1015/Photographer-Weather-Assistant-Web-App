from flask import Flask, request, jsonify
from flask_cors import CORS
from weather import get_daily_city_weather, get_hourly_city_weather
from database import establish_db_connection, insert_weather_day, fetch_record, fetch_all_records_for_name, update_weather_day, delete_weather_day


index = Flask(__name__)#references this file
CORS(index) #enables all cross origin requests

@index.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
        index.run(debug=True)

#returns 3 days of temperature, day0, day1, day2
#example: {'day0': {'date': '2024-05-15', 'high': 61, 'low': 58, 'current': 60}, 'day1': {'date': '2024-05-16', 'high': 60, 'low': 57, 'current': 58}, 'day2': {'date': '2024-05-17', 'high': 71, 'low': 54, 'current': 62}}
@index.route('/getDailyWeatherByCity', methods=['GET'])
async def get_daily_weather_by_city():
    try:
        city_name = request.args.get('name')
        response_data = await get_daily_city_weather(city_name)
        return jsonify(response_data), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
#returns 3 days of temps and precipitation in 3 hourly increments
#example day
'''
{'day0': [{'time': '00:00', 'temp': 55, 'chance_rain': 0, 'cloud_cover_percent': 4, 'chance_of_sun': 88}, {'time': '03:00', 'temp': 51, 'chance_rain': 0, 'cloud_cover_percent': 3, 'chance_of_sun': 92}, 
{'time': '06:00', 'temp': 52, 'chance_rain': 0, 'cloud_cover_percent': 0, 'chance_of_sun': 86}, {'time': '09:00', 'temp': 61, 'chance_rain': 0, 'cloud_cover_percent': 3, 'chance_of_sun': 92},
{'time': '12:00', 'temp': 67, 'chance_rain': 0, 'cloud_cover_percent': 5, 'chance_of_sun': 87}, {'time': '15:00', 'temp': 68, 'chance_rain': 0, 'cloud_cover_percent': 64, 'chance_of_sun': 10},
{'time': '18:00', 'temp': 64, 'chance_rain': 81, 'cloud_cover_percent': 89, 'chance_of_sun': 0}]

'''
@index.route('/getHourlyWeatherByCity', methods=['GET'])
async def get_hourly_weather_by_city():
    try:
        city_name = request.args.get('name')
        response_data = await get_hourly_city_weather(city_name)
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400


#TODO add routes that link to the CRUD operations in database.py

