## about the project 
this is a travel app that obtains a desired trip location & date from the user and displays weather and an image of the 
location using information obtained from external APIs.

 ## sequence steps required to start the project: 
 1. firs you have to install npm  ``` install npm  ```
 2. then run the build using  ``` npm run build ```
 3. run the server using ``` npm start ```
 4. open your browser and go to http://localhost:3000/
 
 ## how th app works
 1. in location input you should enter a City Name for example Chicago 
 2. choose a date for your trip to that city 
 3. then click submit 
 output:  information about your trip will be displayed like the city name, country code, how many days the trip is away,the temperature in that city + weather description, and image for the city
 
 then you will have three buttons as follow : 
 
 1. save trip: it will save the trip in local storage if the name of the city exists it will not save it. 
 2. show trips: it is a toggle button. it will display all the saved trips in local storage 
 3. remove trips: it will delete all the trips from local storage 
 
