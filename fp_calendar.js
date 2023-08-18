"use strict";

var day = new Date();

document.getElementById("calendar").innerHTML = createCalendar(day);

function createCalendar(calD){
   var calHTML = "<table id=calendar_table>";
   calHTML += calCaption(calD);
   calHTML += calWeekdayRow();
   calHTML += calDays(calD);
   calHTML += "</table>";

   return calHTML;
}

function calCaption(calD){
   var monthN = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var thisMonth = calD.getMonth();
   var thisYEar = calD.getFullYear();

   return "<caption>" + monthN[thisMonth] + " " + thisYEar + "</caption>";
}

function calWeekdayRow(){
   var dayName = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
   var rowHTML = "<tr>";

   for (var i = 0; i < dayName.length; i++){
      rowHTML += "<th classname='calendar_weekdays'>" + dayName[i] + "</th>";
   }
   rowHTML += "</tr>";

   return rowHTML;
}

function daysInMonth(calD){
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   var thisYear = calD.getFullYear();
   var thisMonth = calD.getMonth();

   if (thisYear % 4 === 0){
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)){
         dayCount[1] = 29;
      }
   }

   return dayCount[thisMonth];
}

function calDays(calD){
   var day = new Date(calD.getFullYear(), calD.getMonth(), 1);
   var weekDay = day.getDay();
   var htmlCode = "<tr>";

   for (var j = 0; j < weekDay; j++){
      htmlCode += "<td></td>";
   }

   var totalDays = daysInMonth(calD);
   var highlight = calD.getDate();

   for (var k = 1; k <= totalDays; k++){
      day.setDate(k);
      weekDay = day.getDay();
      if (weekDay === 0){
         htmlCode += "<tr>";
      }
         
      if (k === highlight){
         htmlCode += "<td class='calendar_dates' id='calendar_today'>" + k + events[k] + "</td>";
      }

      else{
         htmlCode += "<td class='calendar_dates'>" + k + events[k] + "</td>";
      }

      if (weekDay === 6){
         htmlCode += "</tr>";
      }
   }

   return htmlCode;
}