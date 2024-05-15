# import the module
import python_weather
import json

import asyncio
import os

async def getweather():
  # declare the client. the measuring unit used defaults to the metric system (celcius, km/h, etc.)
  async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
    # fetch a weather forecast from a city
    weather = await client.get('New York')

    # returns the current day's forecast temperature (int)
    # print(weather.temperature)

    # get the weather forecast for a few days
    # weather_object = {}
    # day_counter = 0
    # for daily in weather.daily_forecasts:
      # print(daily.date)
      # print(daily.highest_temperature)

      # weather_object['day' + str(day_counter)] = {"date":daily.date.strftime("%Y-%m-%d"), "high":daily.highest_temperature, "low":daily.lowest_temperature, "current": daily.temperature}
      # day_counter+=1

    # print(weather_object)
      # # hourly forecasts
      # for hourly in daily.hourly_forecasts:
        # print(hourly.temperature)
        # print(f' --> {hourly!r}')

if __name__ == '__main__':
  # see https://stackoverflow.com/questions/45600579/asyncio-event-loop-is-closed-when-getting-loop
  # for more details
  if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

  asyncio.run(getweather())


async def get_daily_city_weather(city_name):
  #   declare the client. the measuring unit used defaults to the metric system (celcius, km/h, etc.)
      async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
        weather = await client.get(city_name)
        
        weather_object = {}
        day_counter = 0
        for daily in weather.daily_forecasts:
          weather_object['day' + str(day_counter)] = {"date":daily.date.strftime("%Y-%m-%d"), "high":daily.highest_temperature, "low":daily.lowest_temperature, "current": daily.temperature}
          day_counter+=1

        #convert the weather object to a json and return it
        return json.dumps(weather_object)

async def get_hourly_city_weather(city_name):
    async with python_weather.Client(unit=python_weather.IMPERIAL) as client:
      weather = await client.get(city_name)
      hourly_weather = []
      weather_object = {}
      for daily in weather.daily_forecasts:
        for hourly in daily.hourly_forecasts:
          hourly_weather.append(hourly.temperature)

    # weather_object['day0': hourly_weather[0:7], "day1":hourly_weather[8:15], "day2":hourly_weather[16:23]]
      weather_object = {
        'day0': hourly_weather[0:7],
        'day1': hourly_weather[8:15],
        'day2': hourly_weather[16:23]
      }

    print(weather_object)
    return json.dumps(weather_object)
#       weather_object = {}
      
# print(get_daily_city_weather("London"))
asyncio.run(get_hourly_city_weather("London"))