function tamucalc(){
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

var tamu = {
   engahl:[3,4,6,5],
   engasl:[3,4],
   spanasl: [4,4,8,5,11,6,14,7],
   spanahl: [4,3,8,4,11,5,14,6],
   spanab: [0, 0],
   spansl: [4,4,8,5, 11,6,14,7],
   spanhl: [4,3,8,4,11,5,14,6],
   frenchab: [0, 0],
   frenchsl: [4,4,8,5, 11,6,14,7],
   frenchhl: [4,3,8,4,11,5,14,6],
   italab: [0, 0],
   italsl: [4,4,8,5, 11,6,14,7],
   italhl: [4,3,8,4,11,5,14,6],
   germab: [0,0],
   germsl: [4,4,8,5,11,6,14,7],
   sssl: [0,0],
   sshl: [3,4],
   hotahl: [3,4,6,5],
   biosl: [4,4],
   biohl: [4, 4,8,5],
   chemsl: [4,4],
   chemhl: [4, 4,8,5],
   physl: [4,4],
   phyhl: [8,4],
   cssl: [4,4],
   cshl: [4,4],
   mstudiessl: [3,4,4,5],
   mathsl: [4,4],
   mathhl: [4,4,8,5],
   fumath: [3,4,4,5],
   va: [3,4],
   msl: [3,4],
   mhl: [3,4],
   th: [3,4],
  }

 //lang lit function
function tamull(){
 if (llCourse == "English A: Literature SL"|| llCourse == "English A: Language and Literature SL"){
   if (llCred >= tamu.engasl[1]){
     llCredit = tamu.engasl[0];
   }
   else if (llCred<tamu.engasl[1]){
     llCredit = 0;
   }
   else {
     llCredit = "no input";
}
}

  else if (llCourse == "English A: Literature HL"|| llCourse == "English A: Language and Literature HL"){
    if (llCred >= tamu.engahl[3]){
      llCredit = tamu.engahl[2];
    }
    else if (llCred == tamu.engahl[1]){
      llCredit = tamu.engahl[0];
    }
    else if (llCred<tamu.engahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature SL"|| llCourse == "Spanish A: Language and Literature SL"){
    if (llCred >= tamu.spanasl[7]){
      llCredit = tamu.spanasl[6];
    }
    else if (llCred == tamu.spanasl[5]){
      llCredit = tamu.spanasl[4];
    }
    else if (llCred == tamu.spanasl[3]){
      llCredit = tamu.spanasl[2];
    }
    else if (llCred == tamu.spanasl[1]){
      llCredit = tamu.spanasl[0];
    }
    else if (llCred < tamu.spanasl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature HL"|| llCourse == "Spanish A: Language and Literature HL"){
    if (llCred >= tamu.spanahl[7]){
      llCredit = tamu.spanahl[6];
    }
    else if (llCred == tamu.spanahl[5]){
      llCredit = tamu.spanahl[4];
    }
    else if (llCred == tamu.spanahl[3]){
      llCredit = tamu.spanahl[2];
    }
    else if (llCred == tamu.spanahl[1]){
      llCredit = tamu.spanahl[0];
    }
    else if (llCred < tamu.spanahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

//language B function
function tamulang(){
  //spanish
 if (langCourse == "Spanish B SL"){
   if (langCred >= tamu.spansl[7]){
      langCredit = tamu.spansl[6];
    }
    else if (langCred == tamu.spansl[5]){
      langCredit = tamu.spansl[4];
    }
    else if (langCred == tamu.spansl[3]){
      langCredit = tamu.spansl[2];
    }
    else if (langCred == tamu.spansl[1]){
      langCredit = tamu.spansl[0];
    }
    else if (langCred < tamu.spansl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
}

  else if (langCourse == "Spanish B HL"){
    if (langCred >= tamu.spanhl[7]){
      langCredit = tamu.spanhl[6];
    }
    else if (langCred == tamu.spanhl[5]){
      langCredit = tamu.spanhl[4];
    }
    else if (langCred == tamu.spanhl[3]){
      langCredit = tamu.spanhl[2];
    }
    else if (langCred == tamu.spanhl[1]){
      langCredit = tamu.spanhl[0];
    }
    else if (langCred < tamu.spanhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Spanish B ab initio"|| langCourse == "French B ab initio"|| langCourse == "German B ab initio"|| langCourse == "Italian B ab initio"){
    if (langCred >= tamu.spanab[1]){
      langCredit = tamu.spanab[0];
    }
    else if (langCred < tamu.spanab[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  //french
  else if (langCourse == "French B SL"){
    if (llCred >= tamu.frenchsl[7]){
      llCredit = tamu.frenchsl[6];
    }
    else if (llCred == tamu.frenchsl[5]){
      llCredit = tamu.frenchsl[4];
    }
    else if (llCred == tamu.frenchsl[3]){
      llCredit = tamu.frenchsl[2];
    }
    else if (llCred == tamu.frenchsl[1]){
      llCredit = tamu.frenchsl[0];
    }
    else if (llCred < tamu.frenchsl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (langCourse == "French B HL"){
    if (llCred >= tamu.frenchhl[7]){
      llCredit = tamu.frenchhl[6];
    }
    else if (llCred == tamu.frenchhl[5]){
      llCredit = tamu.frenchhl[4];
    }
    else if (llCred == tamu.frenchhl[3]){
      llCredit = tamu.frenchhl[2];
    }
    else if (llCred == tamu.frenchhl[1]){
      llCredit = tamu.frenchhl[0];
    }
    else if (llCred < tamu.frenchhl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  //italian
  else if (langCourse == "Italian B SL"){
    if (llCred == tamu.italsl[1]){
      llCredit = tamu.italsl[0];
    }
    else if (llCred < tamu.italsl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
else if (langCourse == "Italian B HL"){
    if (llCred >= tamu.italhl[7]){
      llCredit = tamu.italhl[6];
    }
    else if (llCred == tamu.italhl[5]){
      llCredit = tamu.italhl[4];
    }
    else if (llCred == tamu.italhl[3]){
      llCredit = tamu.italhl[2];
    }
    else if (llCred == tamu.italhl[1]){
      llCredit = tamu.italhl[0];
    }
    else if (llCred < tamu.italhl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }

  //german
  else if (langCourse == "German B SL"){
    if (llCred >= tamu.germsl[7]){
      llCredit = tamu.germsl[6];
    }
    else if (llCred == tamu.germsl[5]){
      llCredit = tamu.germsl[4];
    }
    else if (llCred == tamu.germsl[3]){
      llCredit = tamu.germsl[2];
    }
    else if (llCred == tamu.germsl[1]){
      llCredit = tamu.germsl[0];
    }
    else if (llCred < tamu.germsl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

function tamuss(){
 if (ssCourse == "History HL"|| ssCourse == "History of Europe/Middle East HL"|| ssCourse == "History of Africa HL"|| ssCourse == "History of Europe HL"){
    if (ssCred >= tamu.sshl[1]){
      ssCredit = tamu.sshl[0];
    }
    else if (ssCred<tamu.sshl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History SL"|| ssCourse == "History of Europe/Middle East SL"|| ssCourse == "History of Africa SL"|| ssCourse == "History of Europe SL"|| ssCourse == "History of the Americas SL"){
    if (ssCred >= tamu.sssl[1]){
      ssCredit = tamu.sssl[0];
    }
    else if (ssCred<tamu.sssl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History of the Americas HL"){
    if (ssCred >= tamu.hotahl[3]){
      ssCredit = tamu.hotahl[2];
    }
    else if (ssCred == tamu.hotahl[1]){
      ssCredit = tamu.hotahl[0];
    }
    else if (ssCred<tamu.hotahl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
}

//sciences
function tamusci(){
   if (sciCourse == "Biology SL"|| sciCourse == "Chemistry SL"|| sciCourse == "Physics SL" || sciCourse == "Computer Science SL"){
   if (sciCred >= tamu.biosl[1]){
     sciCredit = tamu.biosl[0];
   }
   else if (sciCred<tamu.biosl[1]){
     sciCredit = 0;
   }
   else {
     sciCredit = "no input";
}
}
  else if (sciCourse == "Biology HL"){
    if (sciCred >= tamu.biohl[3]){
      sciCredit = tamu.biohl[2];
    }
    else if (sciCred == tamu.biohl[1]){
      sciCredit = tamu.biohl[0];
    }
    else if (sciCred<tamu.biohl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Chemistry HL"){
    if (sciCred == tamu.chemhl[3]){
      sciCredit = tamu.chemhl[2];
    }
    else if (sciCred == tamu.chemhl[1]){
      sciCredit = tamu.chemhl[0]
    }
    else if (sciCred<tamu.chemhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Physics HL"){
    if (sciCred >= tamu.phyhl[1]){
      sciCredit = tamu.phyhl[0];
    }
    else if (sciCred<tamu.phyhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Computer Science HL"){
    if (sciCred >= tamu.cshl[1]){
      sciCredit = tamu.cshl[0];
    }
    else if (sciCred<tamu.cshl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
}


//math
function tamumath(){
  if (mathCourse == "Math Studies SL"){
    if (mathCred >= tamu.mstudiessl[3]){
      mathCredit = tamu.mstudiessl[2];
    }
    else if (mathCred == tamu.mstudiessl[1]){
      mathCredit = tamu.mstudiessl[0];
    }
    else if (mathCred<tamu.mstudiessl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics SL"){
    if (mathCred >= tamu.mathsl[1]){
      mathCredit = tamu.mathsl[0];
    }
    else if (mathCred<tamu.mathsl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics HL"){
    if (mathCred == tamu.mathhl[1]){
      mathCredit = tamu.mathhl[0];
    }
    else if (mathCred >= tamu.mathhl[3]){
      mathCredit = tamu.mathhl[2];
    }
    else if (mathCred<tamu.mathhl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
  else if (mathCourse == "Further Mathematics HL"){
    if (mathCred == tamu.fumath[1]){
      mathCredit = tamu.mathsl[0];
    }
    else if (mathcred >= tamu.fumath[3]){
      mathCredit = tamu.fumath[2];
    }
    else if (mathCred<tamu.fumath[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
}
function tamuarts(){
  if (artCourse == "Visual Arts SL"||artCourse == "Visual Arts HL"){
    if (artCred >= tamu.va[1]){
      artCredit = tamu.va[0];
    }
    else if (artCred<tamu.va[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
  else if (artCourse == "Music HL"){
    if (artCred >= tamu.mhl[1]){
          artCredit = tamu.mhl[0];
        }
        else if (artCred<tamu.mhl[1]){
          artCredit = 0;
        }
        else {
          artCredit = "no input"
        }
      }
  else if (artCourse == "Music SL"){
    if (artCred >= tamu.msl[1]){
      artCredit = tamu.msl[0];
    }
    else if (artCred<tamu.msl[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }

  else if (artCourse == "Theatre SL"||artCourse == "Theatre HL"){
    if (artCred >= tamu.th[1]){
      artCredit = tamu.th[0];
    }
    else if (artCred<tamu.th[1]){
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
    tamull();
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
   	  tamull();
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
    tamulang();
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
   	  tamulang();
	    document.getElementById("langcredit2").innerHTML = langCredit;
      if (langCommentary !== " "){
	    document.getElementById("langcommentary2").innerHTML = langCommentary;
}
  }
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
    tamuss();
    console.log(ssCredit)
    document.getElementById("sscredit").innerHTML = ssCredit;
    if (ssCommentary !== " "){
    document.getElementById("sscommentary").innerHTML = ssCommentary;
}
  }
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
    tamusci();
    console.log(sciCredit)
    document.getElementById("scicredit").innerHTML = sciCredit;
    if (sciCommentary !== " "){
    document.getElementById("scicommentary").innerHTML = sciCommentary;
}
  }
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
   	  tamusci();
	    document.getElementById("scicredit2").innerHTML = sciCredit;
      if (sciCommentary !== " "){
	    document.getElementById("scicommentary2").innerHTML = sciCommentary;
}
  }
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
   	  tamusci();
	    document.getElementById("scicredit3").innerHTML = sciCredit;
      if (sciCommentary !== " "){
	    document.getElementById("scicommentary3").innerHTML = sciCommentary;
}
  }
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
    tamumath();
    console.log(mathCredit)
    document.getElementById("mathcredit").innerHTML = mathCredit;
    if (mathCommentary !== " "){
    document.getElementById("mathcommentary").innerHTML = mathCommentary;
}
  }
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
    tamuart();
    console.log(artCredit)
    document.getElementById("artcredit").innerHTML = artCredit;
    if (artCommentary !== " "){
    document.getElementById("artcommentary").innerHTML = artCommentary;
}
  }
artCourse = " ";
artCred = " ";
artCredit = " ";
artCommentary = " ";


tamuMI();
}
