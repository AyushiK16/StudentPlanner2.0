var firstButton;
var bg;
var dashboardImage, breakImage, reminderImage, syllabusImage, toDoImage
var bgSprite;
var subjectDropbox;
var syllabusPage;
var chosenSubject, chosenTerm;
var x = 1;
var inputSyllabus;

var engSyllabus = "random";
var Trial = "hello";

function preload(){
  dashboardImage = loadImage("pictures/dashboard.png");
  breakImage = loadImage("pictures/breakGames.png");
  reminderImage = loadImage("pictures/reminders.png");
  syllabusImage = loadImage("pictures/syllabus.png");
  toDoImage = loadImage("pictures/toDoList.png");
}
function setup() {
  createCanvas(400,550);
  database = firebase.database();
  //rectMode(CENTER);
  bgSprite = createSprite(200, 275, 400, 550);
  firstButton = new Button();
  //syllabusPage = new Syllabus();
}

function draw() {
  //bgSprite.addImage(dashboardImage);
  background("black");  
  drawSprites();
  firstButton.display();
  dashboardImage.resize(400,0);
  breakImage.resize(400,0);
  reminderImage.resize(400,0);
  syllabusImage.resize(400,0);
  toDoImage.resize(400,0);
}

/*
STRUCTURE OF THE GAME
We will be needing:
- Main Menus:
  =Dashboard - everything for that day
  =To-Do List - Homework + Auto-generated task list
  =Syllabus - all subjects and their individual syllabus + their exam dates
  =Caclulator Page - percentage, 
  =Break Games - games that i will make 
  =Reminders - remind you to complete reminders
- An Animation Guide - guide through the app - cartoon
- Need a database to store the data collected
- Notifications ( reminders for compltetion and submission, etc)
- Search bar - search anything in the app

HLD - high level document - how the flow will go form one point to another.
Knowledge Base - additional things brilliant students can do ( other than school activites - can learn something on the app itslef
  like programing or maths tricks etc)
Make all the background and buttons
Login and Registeration Pages
Flow from on menu to another 

1. Dashboard :
- to do list
- reminders - an alert 
- upcoming exam date, calculate the date and 15 days before it will be shown
- syllabus - only for the upcoming exam

SYLLABUS
we need a:
- 2 input/ dropdown boxes - subject, and syllabus for the specified term
- display the information on the screen, about the database.
- define all the syllabus.

TO-DO LIST
- make input box to enter the things to be done.
- create a delete button and a done button for the user to check of things of the list
 and then delete it.

 update(){
        var engSyllRef = database.ref('Syllabus/Subjects/English/engSyllabus')
        database.ref(engSyllRef).set({
            engSyllabus: this.englishSyllabus,
        });
        console.log("write the data");
    }

*/