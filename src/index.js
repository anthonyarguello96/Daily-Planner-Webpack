import * as lib from './functions.js';
import "./main.css";
const inputField = document.getElementById('inputField');
const toDoContainer =document.getElementById('to-do-items-container');
const addBtn = document.getElementById('add-to-do');
const parallax = document.getElementsByClassName('img-div');
const spread = [...parallax];
const prioritiesContainer = document.getElementById('priorities-box');
const prioritiesList = document.getElementById('priorities-list');
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';


document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin ],
     // editable: true,
     googleCalendarApiKey:'KEY',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: new Date(),
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: {
       googleCalendarId:'anthonyarguello96@gmail.com',
       className: 'gcal-event',
       editable: true,
       color: 'rgba(255, 223, 152, 0.8);',
    }}
  );

  calendar.render();
});


// const entries = document.getElementsByClassName('item-input');
// console.log(entries);
// Add to-do
addBtn.addEventListener('click', function() {
  new lib.Item(inputField.value, toDoContainer, prioritiesList, inputField);
});


//  Config enter key's event listener
inputField.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addBtn.click();
  }
});


//  Parallax effect
window.addEventListener('scroll', function() {
  lib.parallaxEffect(spread);
});
