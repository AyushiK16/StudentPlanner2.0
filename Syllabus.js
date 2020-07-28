class Syllabus{
    constructor(subjectDropbox){
    //greetings
    this.greeting = createElement('h4');
    this.greeting2 = createElement('h4');

    //Subject Dropbox Options
    this.subjectDropbox = createSelect();
    this.subjectDropbox.option("Maths");
    this.subjectDropbox.option("Science")
    this.subjectDropbox.option("SST")
    this.subjectDropbox.option("ICT")
    this.subjectDropbox.option("English")
    this.subjectDropbox.option("II Language")

    //Term Dropbox Options
    this.termDropbox = createSelect();
    this.termDropbox.option("Term 1")
    this.termDropbox.option("Half-Yearly")
    this.termDropbox.option("Term 2")
    this.termDropbox.option("Final")

    //this.sstSyllabus = createInput("SST Syllabus");
    }
    
    display(){
        //Subject DropBox
        this.greeting.html("Please choose the subject:");
        this.greeting.position(10, 80);
        this.subjectDropbox.position(190,100);

        //Term Dropbox
        this.greeting2.html("Please choose the term:");
        this.greeting2.position(10, 55);
        this.termDropbox.position(190, 75);
        
        chosenSubject = this.subjectDropbox.value();
        console.log(chosenSubject);

        chosenTerm = this.termDropbox.value();
        console.log(chosenTerm);

        if(chosenTerm === "Term 1"){
            if(chosenSubject === "Maths"){
                this.mathsSyllabus = createInput("Maths Syllabus");
                this.mathsSyllabus.position(10,140);
                inputSyllabus = this.mathsSyllabus.value();
                console.log(inputSyllabus);
            }

            if(chosenSubject === "Science"){
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
            }

            if(chosenSubject === "SST"){
                this.sstSyllabus = createInput("SST Syllabus");
                this.sstSyllabus.position(10,140);
            }

            if(chosenSubject === "ICT"){
                this.ictSyllabus = createInput("ICT Syllabus");
                this.ictSyllabus.position(10,140);
            }

            if(chosenSubject === "English"){
                this.englishSyllabus = createInput("English Syllabus");
                this.englishSyllabus.position(10,140);
            }

            if(chosenSubject === "II Language"){
                this.secLangSyllabus = createInput("II Language Syllabus");
                this.secLangSyllabus.position(10,140);
            }
        }
    }

    update(){
        var trialIndex = "Syllabus/Trial"
        database.ref(trialIndex).set({
          engSyllabus :this.engSyllabus,
        });
        console.log(engSyllabus);
    }

    readtrial(){
        var trialRef = database.ref('Trial');
        trialRef.on("value",(data)=>{
            Trial = data.val();
        })
        console.log(Trial);
    }

    getSubject(){
        var subjectRef = database.ref('Syllabus/Subjects/English/engSyllabus');
        subjectRef.on("value",(data)=>{
            engSyllabus = data.val();
        })
        console.log(engSyllabus);
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.subjectDropbox.hide();
        this.termDropbox.hide();

        this.mathsSyllabus.hide();
        this.englishSyllabus.hide();
        this.sstSyllabus.hide();
        this.scienceSyllabus.hide();
        this.secLangSyllabus.hide();
        this.ictSyllabus.hide();
    }
}