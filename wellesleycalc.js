function wccalc(){
var wc = {
   engahl:[4, 5],
   engasl:[0,0],
   spanasl: [0,0],
   spanahl: [4, 5],
   spanab: [0, 0],
   spansl: [ 0,0],
   spanhl: [4,5, "Fulfills the Language Requirement"],
   frenchab: [0, 0],
   frenchsl: [0, 0],
   frenchhl: [4,5, "Fulfills the Language Requirement"],
   italab: [0, 0],
   italsl: [0, 0],
   italhl: [4,5, "Fulfills the Language Requirement"],
   germab: [0,0],
   germsl: [0, 0],
   sssl: [0,0],
   sshl: [4, 5],
   biosl: [0, 0],
   biohl: [4, 5],
   chemsl: [0, 0],
   chemhl: [4, 5],
   physl: [0, 0],
   phyhl: [4, 5],
   cssl: [0, 0],
   cshl: [0, 0],
   mstudiessl: [0, 0],
   mathsl: [0, 0],
   mathhl: [4,5],
   fumath: [4,5],
   va: [0, 0],
   msl: [0,0],
   mhl: [4, 5],
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
function wcll(){
 if (llCourse == "English A: Literature SL"|| llCourse == "English A: Language and Literature SL"){
   if (llCred >= wc.engasl[1]){
     llCredit = wc.engasl[0];
   }
   else if (llCred<wc.engasl[1]){
     llCredit = 0;
   }
   else {
     llCredit = "no input";
}
}

  else if (llCourse == "English A: Literature HL"|| llCourse == "English A: Language and Literature HL"){
    if (llCred >= wc.engahl[1]){
      llCredit = wc.engahl[0];
    }
    else if (llCred<wc.engahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature SL"|| llCourse == "Spanish A: Language and Literature SL"){
    if (llCred >= wc.spanasl[1]){
      llCredit = wc.spanasl[0];
    }
    else if (llCred < wc.spanasl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature HL"|| llCourse == "Spanish A: Language and Literature HL"){
    if (llCred >= wc.spanahl[1]){
      llCredit = wc.spanahl[0];
    }
    else if (llCred < wc.spanahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

//language B function
function wclang(){
  //spanish
 if (langCourse == "Spanish B SL"){
   if (langCred >= wc.spansl[1]){
      langCredit = wc.spansl[0];
    }
    else if (langCred < wc.spansl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
}
  else if (langCourse == "Spanish B HL"){
    if (langCred == wc.spanhl[1]){
      langCredit = wc.spanhl[0];
      langCommentary = wc.spanhl[2];
    }
    else if (langCred < wc.spanhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Spanish B ab initio"|| langCourse == "French B ab initio"|| langCourse == "German B ab initio"|| langCourse == "Italian B ab initio"){
    if (langCred >= wc.spanab[1]){
      langCredit = wc.spanab[0];
    }
    else if (langCred < wc.spanab[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input";
    }
  }
  //french
  else if (langCourse == "French B SL"){
    if (langCred >= wc.frenchsl[1]){
      langCredit = wc.frenchsl[0];
    }
    else if (langCred < wc.frenchsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "French B HL"){
    if (langCred >= wc.frenchhl[1]){
      langCredit = wc.frenchhl[0];
      langCredit = wc.frenchhl[2];
    }
    else if (langCred < wc.frenchhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  //italian
else if (langCourse == "Italian B HL"){
    if (langCred >= wc.italhl[1]){
      langCredit = wc.italhl[0];
      langCredit = wc.italhl[2];
    }
    else if (langCred < wc.italhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Italian B SL"){
    if (langCred >= wc.italsl[1]){
      langCredit = wc.italsl[0];
      langCredit = wc.italsl[2];
    }
    else if (langCred < wc.italsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }

  //german
  else if (langCourse == "German B SL"){
    if (langCred >= wc.germsl[1]){
      langCredit = wc.germsl[0];
    }
    else if (langCred < wc.germsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
}

function wcss(){
 if (ssCourse == "History HL"|| ssCourse == "History of Europe/Middle East HL"|| ssCourse == "History of Africa HL"|| ssCourse == "History of Europe HL"||ssCourse == "History of the Americas HL"){
    if (ssCred >= wc.sshl[1]){
      ssCredit = wc.sshl[0];
    }
    else if (ssCred<wc.sshl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History SL"|| ssCourse == "History of Europe/Middle East SL"|| ssCourse == "History of Africa SL"|| ssCourse == "History of Europe SL"|| ssCourse == "History of the Americas SL"){
    if (ssCred >= wc.sssl[1]){
      ssCredit = wc.sshl[0];
    }
    else if (ssCred<wc.sssl[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
}

//sciences
function wcsci(){
   if (sciCourse == "Biology SL"|| sciCourse == "Chemistry SL"|| sciCourse == "Physics SL" || sciCourse == "Computer Science SL"){
   if (sciCred >= wc.biosl[1]){
     sciCredit = wc.biosl[0];
   }
   else if (sciCred<wc.biosl[1]){
     sciCredit = 0;
   }
   else {
     sciCredit = "no input";
}
}
  else if (sciCourse == "Biology HL"){
    if (sciCred >= wc.biohl[1]){
      sciCredit = wc.biohl[0];
    }
    else if (sciCred<wc.biohl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Chemistry HL"){
    if (sciCred >= wc.chemhl[1]){
      sciCredit = wc.chemhl[0]
    }
    else if (sciCred<wc.chemhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Physics HL"){
    if (sciCred >= wc.phyhl[1]){
      sciCredit = wc.phyhl[0];
    }
    else if (sciCred<wc.phyhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Computer Science HL"){
    if (sciCred >= wc.cshl[1]){
      sciCredit = wc.cshl[0];
    }
    else if (sciCred<wc.cshl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
}


//math
function wcmath(){
  if (mathCourse == "Math Studies SL"){
    if (mathCred >= wc.mstudiessl[3]){
      mathCredit = wc.mstudiessl[2];
    }
    else if (mathCred == wc.mstudiessl[1]){
      mathCredit = wc.mstudiessl[0];
    }
    else if (mathCred<wc.mstudiessl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics SL"){
    if (mathCred >= wc.mathsl[1]){
      mathCredit = wc.mathsl[0];
    }
    else if (mathCred<wc.mathsl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics HL"){
    if (mathCred == wc.mathhl[1]){
      mathCredit = wc.mathhl[0];
    }
    else if (mathCred >= wc.mathhl[3]){
      mathCredit = wc.mathhl[2];
    }
    else if (mathCred<wc.mathhl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
  else if (mathCourse == "Further Mathematics HL"){
    if (mathCred == wc.fumath[1]){
      mathCredit = wc.mathsl[0];
    }
    else if (mathCred >= wc.fumath[3]){
      mathCredit = wc.fumath[2];
    }
    else if (mathCred<wc.fumath[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
}
function wcarts(){
  if (artCourse == "Visual Arts SL"||artCourse == "Visual Arts HL"){
    if (artCred >= wc.va[1]){
      artCredit = wc.va[0];
    }
    else if (artCred<wc.va[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
  else if (artCourse == "Music HL"){
    if (artCred >= wc.mhl[1]){
          artCredit = wc.mhl[0];
        }
        else if (artCred<wc.mhl[1]){
          artCredit = 0;
        }
        else {
          artCredit = "no input"
        }
      }
  else if (artCourse == "Music SL"){
    if (artCred >= wc.msl[1]){
      artCredit = wc.msl[0];
    }
    else if (artCred<wc.msl[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }

  else if (artCourse == "Theatre SL"||artCourse == "Theatre HL"){
    if (artCred >= wc.th[1]){
      artCredit = wc.th[0];
    }
    else if (artCred<wc.th[1]){
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
    wcll();
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
   	  wcll();
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
    wclang();
    console.log(langCredit)
    document.getElementById("langcredit").innerHTML = langCredit;
    if (langCommentary !== " "){
    document.getElementById("langcommentary").innerHTML = langCommentary;
}
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
   	  wclang();
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
    wcss();
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
    wcsci();
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
   	  wcsci();
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
   	  wcsci();
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
    wcmath();
    console.log(mathCredit)
    document.getElementById("mathcredit").innerHTML = mathCredit;
    if (sciCommentary !== " "){
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
    wcarts();
    console.log(artCredit)
    document.getElementById("artcredit").innerHTML = artCredit;
    if (sciCommentary !== " "){
    document.getElementById("artcommentary").innerHTML = artCommentary;
}
  }
artCourse = " ";
artCred = " ";
artCredit = " ";
artCommentary = " ";


wcMI();
}
