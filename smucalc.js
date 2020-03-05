function smucalc(){
var smu= {
   engahl:[6, 5],
   engasl:[0,0],
   spanasl: [0,0],
   spanahl: [8, 5],
   spanab: [0, 0],
   spansl: [ 0,0],
   spanhl: [8,5],
   frenchab: [0, 0],
   frenchsl: [0, 0],
   frenchhl: [8,5],
   italab: [0, 0],
   italsl: [0, 0],
   italhl: [8,5],
   germab: [0,0],
   germsl: [0, 0],
   sssl: [0,0],
   sshl: [6, 5],
   biosl: [0, 0],
   biohl: [4, 5],
   chemsl: [0, 0],
   chemhl: [4, 5],
   physl: [0, 0],
   phyhl: [6, 5],
   cssl: [0, 0],
   cshl: [0, 0],
   mstudiessl: [0, 0],
   mathsl: [0, 0],
   mathhl: [6,5],
   fumath: [6,5],
   va: [0, 0],
   msl: [0,0],
   mhl: [0, 0],
   th: [0, 0]
  }

//variables for tests
  var llCourse = " ";
  var llCred = " ";
  var llCredit = " ";
  var llCommentary = " ";

  var langCourse = " ";
  var langCred = " ";
  var langCredit = " ";
  var langCommentary = " ";

  var ssCourse = " ";
  var ssCred = " ";
  var ssCredit = " ";
  var ssCommentary = " ";

  var sciCourse = " ";
  var sciCred = " ";
  var sciCredit = " ";
  var sciCommentary = " ";

  var mathCourse = " ";
  var mathCred = " ";
  var mathCredit = " ";
  var mathCommentary = " ";

  var artCourse = " ";
  var artCred = " ";
  var artCredit = " ";
  var artCommentary = " ";


 //lang lit function
function smull(){
 if (llCourse == "English A: Literature SL"|| llCourse == "English A: Language and Literature SL"){
   if (llCred >= smu.engasl[1]){
     llCredit = smu.engasl[0];
   }
   else if (llCred<smu.engasl[1]){
     llCredit = 0;
   }
   else {
     llCredit = "no input";
}
}

  else if (llCourse == "English A: Literature HL"|| llCourse == "English A: Language and Literature HL"){
    if (llCred >= smu.engahl[1]){
      llCredit = smu.engahl[0];
    }
    else if (llCred<smu.engahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature SL"|| llCourse == "Spanish A: Language and Literature SL"){
    if (llCred >= smu.spanasl[1]){
      llCredit = smu.spanasl[0];
    }
    else if (llCred < smu.spanasl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature HL"|| llCourse == "Spanish A: Language and Literature HL"){
    if (llCred >= smu.spanahl[1]){
      llCredit = smu.spanahl[0];
    }
    else if (llCred < smu.spanahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

//language B function
function smulang(){
  //spanish
 if (langCourse == "Spanish B SL"){
   if (langCred >= smu.spansl[1]){
      langCredit = smu.spansl[0];
    }
    else if (langCred < smu.spansl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
}
  else if (langCourse == "Spanish B HL"){
    if (langCred >= smu.spanhl[1]){
      langCredit = smu.spanhl[0];
    }
    else if (langCred < smu.spanhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Spanish B ab initio"|| langCourse == "French B ab initio"|| langCourse == "German B ab initio"|| langCourse == "Italian B ab initio"){
    if (langCred >= smu.spanab[1]){
      langCredit = smu.spanab[0];
    }
    else if (langCred < smu.spanab[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  //french
  else if (langCourse == "French B SL"){
    if (llCred >= smu.frenchsl[1]){
      llCredit = smu.frenchsl[0];
    }
    else if (llCred < smu.frenchsl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (langCourse == "French B HL"){
    if (llCred >= smu.frenchhl[1]){
      llCredit = smu.frenchhl[0];
    }
    else if (llCred < smu.frenchhl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  //italian
else if (langCourse == "Italian B SL"){
    if (llCred >= smu.italhl[1]){
      llCredit = smu.italhl[0];
    }
    else if (llCred < smu.italhl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }

  //german
  else if (langCourse == "German B SL"){
    if (llCred >= smu.germsl[1]){
      llCredit = smu.germsl[0];
    }
    else if (llCred < smu.germsl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

function smuss(){
 if (ssCourse == "History HL"|| ssCourse == "History of Europe/Middle East HL"|| ssCourse == "History of Africa HL"|| ssCourse == "History of Europe HL"||ssCourse == "History of the Americas HL"){
    if (ssCred >= smu.sshl[1]){
      ssCredit = smu.sshl[0];
    }
    else if (ssCred<smu.sshl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History SL"|| ssCourse == "History of Europe/Middle East SL"|| ssCourse == "History of Africa SL"|| ssCourse == "History of Europe SL"|| ssCourse == "History of the Americas SL"){
    if (ssCred >= smu.sssl[1]){
      ssCredit = smu.sssl[0];
    }
    else if (ssCred<smu.sssl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  }

//sciences
function smusci(){
   if (sciCourse == "Biology SL"|| sciCourse == "Chemistry SL"|| sciCourse == "Physics SL" || sciCourse == "Computer Science SL"){
   if (sciCred >= smu.biosl[1]){
     sciCredit = smu.biosl[0];
   }
   else if (sciCred<smu.biosl[1]){
     sciCredit = 0;
   }
   else {
     sciCredit = "no input";
}
}
  else if (sciCourse == "Biology HL"){
    if (sciCred >= smu.biohl[1]){
      sciCredit = smu.biohl[0];
    }
    else if (sciCred<smu.biohl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Chemistry HL"){
    if (sciCred >= smu.chemhl[1]){
      sciCredit = smu.chemhl[0]
    }
    else if (sciCred<smu.chemhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Physics HL"){
    if (sciCred >= smu.phyhl[1]){
      sciCredit = smu.phyhl[0];
    }
    else if (sciCred<smu.phyhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Computer Science HL"){
    if (sciCred >= smu.cshl[1]){
      sciCredit = smu.cshl[0];
    }
    else if (sciCred<smu.cshl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
}


//math
function smumath(){
  if (mathCourse == "Math Studies SL"){
    if (mathCred >= smu.mstudiessl[1]){
      mathCredit = smu.mstudiessl[0];
    }
    else if (mathCred<smu.mstudiessl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics SL"){
    if (mathCred >= smu.mathsl[1]){
      mathCredit = smu.mathsl[0];
    }
    else if (mathCred<smu.mathsl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics HL"){
    if (mathCred >= smu.mathhl[1]){
      mathCredit = smu.mathhl[0];
    }
    else if (mathCred<smu.mathhl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
  else if (mathCourse == "Further Mathematics HL"){
    if (mathCred >= smu.fumath[1]){
      mathCredit = smu.mathsl[0];
    }
    else if (mathCred >= smu.fumath[3]){
      mathCredit = smu.fumath[2];
    }
    else if (mathCred<smu.fumath[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
}
function smuarts(){
  if (artCourse == "Visual Arts SL"||artCourse == "Visual Arts HL"){
    if (artCred >= smu.va[1]){
      artCredit = smu.va[0];
    }
    else if (artCred<smu.va[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
  else if (artCourse == "Music HL"){
    if (artCred >= smu.mhl[1]){
          artCredit = smu.mhl[0];
        }
        else if (artCred<smu.mhl[1]){
          artCredit = 0;
        }
        else {
          artCredit = "no input"
        }
      }
  else if (artCourse == "Music SL"){
    if (artCred >= smu.msl[1]){
      artCredit = smu.msl[0];
    }
    else if (artCred<smu.msl[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }

  else if (artCourse == "Theatre SL"||artCourse == "Theatre HL"){
    if (artCred >= smu.th[1]){
      artCredit = smu.th[0];
    }
    else if (artCred<smu.th[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
}

//lang lit 1st input
llCourse = document.getElementById("langlit").value;
llCred = document.getElementById("llscore").value;
document.getElementById("llcourse").innerHTML = llCourse;
document.getElementById("lltest").innerHTML = llCred;
console.log(llCourse)
console.log(llCred)
  if (llCred !== " "){
    smull();
    console.log(llCredit)
    document.getElementById("llcredit").innerHTML = llCredit;
    document.getElementById("llcommentary").innerHTML = llCommentary;
}
llCourse = " ";
llCred = " ";
llCredit = " ";
llCommentary = " ";


//lang lit 2nd input
llCourse = document.getElementById("langlit2").value;
llCred = document.getElementById("llscore2").value;
document.getElementById("llcourse2").innerHTML = llCourse;
document.getElementById("lltest2").innerHTML = llCred;
  if (llCred !== " "){
   	  smull();
	    document.getElementById("llcredit2").innerHTML = llCredit;
	    document.getElementById("llcommentary2").innerHTML = llCommentary;
}
llCourse = " ";
llCred = " ";
llCredit = " ";
llCommentary = " ";


//lang
langCourse = document.getElementById("language").value;
langCred = document.getElementById("langscore").value;
document.getElementById("langcourse").innerHTML = langCourse;
document.getElementById("langtest").innerHTML = langCred;
console.log(langCourse)
console.log(langCred)
  if (langCred !== " "){
    smulang();
    console.log(langCredit)
    document.getElementById("langcredit").innerHTML = langCredit;
    document.getElementById("langcommentary").innerHTML = langCommentary;
}
langCourse = " ";
langCred = " ";
langCredit = " ";
langCommentary = " ";


//lang 2nd input
langCourse = document.getElementById("language2").value;
langCred = document.getElementById("langscore2").value;
document.getElementById("langcourse2").innerHTML = langCourse;
document.getElementById("langtest2").innerHTML = langCred;
  if (langCred !== " "){
   	  smulang();
	    document.getElementById("langcredit2").innerHTML = langCredit;
      if (langCommentary !== " "){
	    document.getElementById("langcommentary2").innerHTML = langCommentary;
}}
langCourse = " ";
langCred = " ";
langCredit = " ";
langCommentary = " ";


//ss
ssCourse = document.getElementById("ss").value;
ssCred = document.getElementById("ssscore").value;
document.getElementById("sscourse").innerHTML = ssCourse;
document.getElementById("sstest").innerHTML = ssCred;
console.log(ssCourse)
console.log(ssCred)
  if (ssCred !== " "){
    smuss();
    console.log(ssCredit)
    document.getElementById("sscredit").innerHTML = ssCredit;
    if (ssCommentary !== " "){
    document.getElementById("sscommentary").innerHTML = ssCommentary;
}}
ssCourse = " ";
ssCred = " ";
ssCredit = " ";
ssCommentary = " ";


//science input 1
sciCourse = document.getElementById("science").value;
sciCred = document.getElementById("sciencescore").value;
document.getElementById("scicourse").innerHTML = sciCourse;
document.getElementById("scitest").innerHTML = sciCred;
console.log(sciCourse)
console.log(sciCred)
  if (sciCred !== " "){
    smusci();
    console.log(sciCredit)
    document.getElementById("scicredit").innerHTML = sciCredit;
    if (sciCommentary !== " "){
    document.getElementById("scicommentary").innerHTML = sciCommentary;
}}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";


//science 2nd input
sciCourse = document.getElementById("science2").value;
sciCred = document.getElementById("sciencescore2").value;
document.getElementById("scicourse2").innerHTML = sciCourse;
document.getElementById("scitest2").innerHTML = sciCred;
  if (sciCred !== " "){
   	  smusci();
	    document.getElementById("scicredit2").innerHTML = sciCredit;
      if (sciCommentary !== " "){
	    document.getElementById("scicommentary2").innerHTML = sciCommentary;
}}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";


//science 3rd input
sciCourse = document.getElementById("science3").value;
sciCred = document.getElementById("sciencescore3").value;
document.getElementById("scicourse3").innerHTML = sciCourse;
document.getElementById("scitest3").innerHTML = sciCred;
  if (sciCred !== " "){
   	  smusci();
	    document.getElementById("scicredit3").innerHTML = sciCredit;
      if (sciCommentary !== " "){
	    document.getElementById("scicommentary3").innerHTML = sciCommentary;
}}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";


//math input
mathCourse = document.getElementById("math").value;
mathCred = document.getElementById("mathscore").value;
document.getElementById("mathcourse").innerHTML = mathCourse;
document.getElementById("mathtest").innerHTML = mathCred;
console.log(mathCourse)
console.log(mathCred)
  if (mathCred !== " "){
    smumath();
    console.log(mathCredit)
    document.getElementById("mathcredit").innerHTML = mathCredit;
    if (mathCommentary !== " "){
    document.getElementById("mathcommentary").innerHTML = mathCommentary;
}}
mathCourse = " ";
mathCred = " ";
mathCredit = " "
mathCommentary = " ";


//art input
artCourse = document.getElementById("art").value;
artCred = document.getElementById("artscore").value;
document.getElementById("artcourse").innerHTML = artCourse;
document.getElementById("arttest").innerHTML = artCred;
console.log(artCourse)
console.log(artCred)
  if (artCred !== " "){
    smuarts();
    console.log(artCredit)
    document.getElementById("artcredit").innerHTML = artCredit;
    if (artCommentary !== " "){
    document.getElementById("artcommentary").innerHTML = artCommentary;
}}
artCourse = " ";
artCred = " ";
artCredit = " ";
artCommentary = " ";


smuMI();
}
