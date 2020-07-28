class Button {

    constructor() {
      this.dashboardButton = createButton('Dashboard');
      this.reminderButton = createButton('Reminders');
      this.syllabusButton = createButton('Syllabus');
      this.toDoButton = createButton('To-Do List');
      this.breakGames = createButton('Break Games');
      this.title = createElement('h2');
    }
  
    display(){
      this.title.html("Student Planner 1.0");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.dashboardButton.position(0, 500);
      this.reminderButton.position(76, 500);
      this.syllabusButton.position(152, 500);
      this.toDoButton.position(228, 500);
      this.breakGames.position(304, 500);
  
  
      this.dashboardButton.mousePressed(()=>{
        //background(dashboardImage);
        bgSprite.addImage(dashboardImage);
        //"pictures/dashboard.png"
        console.log("dash");
        syllabusPage.hide();
      });

      this.toDoButton.mousePressed(()=>{
        //background(toDoImage);
        bgSprite.addImage(toDoImage);
        console.log("todo");
        syllabusPage.hide();
      });

      this.syllabusButton.mousePressed(()=>{
        //background(syllabusImage);
        bgSprite.addImage(syllabusImage);
        console.log("sy");
        syllabusPage = new Syllabus();
        syllabusPage.display();
        syllabusPage.update();
        //syllabusPage.readtrial();
        //syllabusPage.getSubject();
      });

      this.reminderButton.mousePressed(()=>{
        //background(reminderImage);
        bgSprite.addImage(reminderImage);
        console.log("rem");
        syllabusPage.hide();
      });

      this.breakGames.mousePressed(()=>{
        //background(breakImage);
        bgSprite.addImage(breakImage);
        console.log("dash");
        syllabusPage.hide();
      });
  
    }
  
  }
  