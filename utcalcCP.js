function utcpcalc(){
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



var ut = {
   engahl:[3,5],
   engasl:[0,0],
   spanasl: [0,0],
   spanahl: [6,2,12,3,21,4],
   spanab: [0, 0],
   spansl: [0,0],
   spanhl: [0,0, "No information could be found"],
   frenchab: [0, 0],
   frenchsl: [0, 0],
   frenchhl: [21,4,24,6],
   italab: [0, 0],
   italsl: [0, 0],
   italhl: [6,2,12,3,21,4],
   germab: [0,0],
   germsl: [0, 0],
   sssl: [0,0],
   hoa: [3,6, "HIS 310"],
   hoe: [3, 6, "HIS 309L"],
   hota: [3, 6, "HIS 306N"],
   biosl: [0, 0],
   biohl: [6,6],
   chemsl: [0, 0],
   chemhl: [3,4,6,5,8,6],
   physl: [0, 0],
   phyhl: [14,5],
   cssl: [0, 0],
   cshl: [3,5],
   mstudiessl: [0, 0],
   mathsl: [0, 0],
   mathhl: [4,4, "M 408K", 4,5, "M 408C"],
   fumath: [4,5],
   va: [3,5],
   msl: [0,0],
   mhl: [4, 5],
   th: [0, 0]
}
  //lang lit function
function utcpll(){
 if (llCourse == "English A: Literature SL"|| llCourse == "English A: Language and Literature SL"){
   if (llCred >= ut.engasl[1]){
     llCredit = ut.engasl[0];
   }
   else if (llCred<ut.engasl[1]){
     llCredit = 0;
   }
   else {
     llCredit = "no input";
}
}

  else if (llCourse == "English A: Literature HL"|| llCourse == "English A: Language and Literature HL"){
    if (llCred >= ut.engahl[1]){
      llCredit = ut.engahl[0];
    }
    else if (llCred<ut.engahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature SL"|| llCourse == "Spanish A: Language and Literature SL"){
    if (llCred >= ut.spanasl[1]){
      llCredit = ut.spanasl[0];
    }
    else if (llCred < ut.spanasl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
  else if (llCourse == "Spanish A: Literature HL"|| llCourse == "Spanish A: Language and Literature HL"){
    if (llCred >= ut.spanahl[5]){
      llCredit = ut.spanahl[4];
    }
    else if (llCred == ut.spanahl[3]){
      llCredit = ut.spanahl[2];
    }
    else if (llCred == ut.spanahl[1]){
      llCredit = ut.spanahl[0];
    }
    else if (llCred < ut.spanahl[1]){
      llCredit = 0;
    }
    else {
      llCredit = "no input"
    }
  }
}

//language B function
function utcplang(){
  //spanish
 if (langCourse == "Spanish B SL"){
   if (langCred >= ut.spansl[1]){
     langCredit = ut.spansl[0];
   }
   else if (langCred<ut.spansl[1]){
     langCredit = 0;
   }
   else {
     langCredit = "no input";
}
}
  else if (langCourse == "Spanish B HL"){
    if (langCred >= ut.spanhl[1]){
      langCredit = ut.spanhl[0];
      langCommentary = ut.spanhl[2];
    }
    else if (langCred < ut.spanhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Spanish B ab initio"|| langCourse == "French B ab initio"|| langCourse == "German B ab initio"|| langCourse == "Italian B ab initio"){
    if (langCred >= ut.spanab[1]){
      langCredit = ut.spanab[0];
    }
    else if (langCred < ut.spanab[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  //french
  else if (langCourse == "French B SL"){
    if (langCred >= ut.frenchsl[1]){
      langCredit = ut.frenchsl[0];
    }
    else if (langCred<ut.frenchsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "French B HL"){
    if (langCred >= ut.frenchhl[3]){
      langCredit = ut.frenchhl[2];
    }
    else if (langCred == ut.frenchhl[1]){
      langCredit = ut.frenchhl[0];
    }
    else if (langCred<ut.frenchhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  //italian
else if (langCourse == "Italian B SL"){
    if (langCred >= ut.italsl[1]){
      langCredit = ut.italsl[0];
    }
    else if (langCred<ut.italsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
  else if (langCourse == "Italian B HL"){
    if (langCred >= ut.italhl[5]){
      langCredit = ut.italhl[4];
    }
    else if (langCred == ut.italhl[3]){
      langCredit = ut.italhl[2];
    }
    else if (langCred == ut.italhl[1]){
      langCredit = ut.italhl[0];
    }
    else if (langCred<ut.italhl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }

  //german
  else if (langCourse == "German B SL"){
    if (langCred >= ut.germsl[1]){
      langCredit = ut.germsl[0];
    }
    else if (langCred<ut.germsl[1]){
      langCredit = 0;
    }
    else {
      langCredit = "no input"
    }
  }
}

function utcpss(){
 if (ssCourse == "History SL"||ssCourse == "History HL" ){
   if (ssCred >= ut.sssl[1]){
     ssCredit = ut.sssl[0];
     ssCommentary = "***The class was not mentioned in their website for CP, so you may have to check with their Testing and Evaluation Services: ctl-testing@utlists.utexas.edu or 512-232-2662"
   }
   else if (ssCred<ut.sssl[1]){
     ssCredit = 0;
   }
   else {
     ssCredit = "no input";
}
}

  else if (ssCourse == "History of Europe/Middle East HL"|| ssCourse == "History of Europe/Middle East SL"){
    if (ssCred >= ut.sssl[1]){
     ssCredit = ut.sssl[0];
     ssCommentary = "***The class was not mentioned in their website for CP, so you may have to check with their Testing and Evaluation Services: ctl-testing@utlists.utexas.edu or 512-232-2662"
   }
   else if (ssCred<ut.sssl[1]){
     ssCredit = 0;
   }
   else {
     ssCredit = "no input";
}
  }
  else if (ssCourse == "History of Africa HL"||ssCourse == "History of Africa SL"){
      if (ssCred >= ut.hoa[1]){
      ssCredit = ut.hoa[0];
      ssCommentary = ut.hoa[2] + "***The level was not explictly stated in their website, so you may have to check with their Testing and Evaluation Services: ctl-testing@utlists.utexas.edu or 512-232-2662";
    }
    else if (ssCred<ut.hoa[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History of Europe HL"|| ssCourse == "History of Europe SL"){
    if (ssCred >= ut.hoe[1]){
      ssCredit = ut.hoe[0];
      ssCommentary = ut.hoe[2] + "***The level was not explictly stated in their website, so you may have to check with their Testing and Evaluation Services: ctl-testing@utlists.utexas.edu or 512-232-2662";
    }
    else if (ssCred<ut.hoe[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }
  else if (ssCourse == "History of the Americas HL"|| ssCourse == "History of the Americas SL"){
    if (ssCred >= ut.hota[1]){
      ssCredit = ut.hota[0];
      ssCommentary = ut.hota[2] + "***The level was not explictly stated in their website, so you may have to check with their Testing and Evaluation Services: ctl-testing@utlists.utexas.edu or 512-232-2662";
    }
    else if (ssCred<ut.hota[1]){
      ssCredit = 0;
    }
    else {
      ssCredit = "no input"
    }
  }

//sciences
function utcpsci(){
   if (sciCourse == "Biology SL"|| sciCourse == "Chemistry SL"|| sciCourse == "Computer Science SL"){
   if (sciCred >= ut.biosl[1]){
     sciCredit = ut.biosl[0];
   }
   else if (sciCred<ut.biosl[1]){
     sciCredit = 0;
   }
   else {
     sciCredit = "no input";
}
}
  else if (sciCourse == "Biology HL"){
    if (sciCred >= ut.biohl[1]){
      sciCredit = ut.biohl[0];
    }
    else if (sciCred<ut.biohl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Chemistry HL"){
    if (sciCred >= ut.chemhl[5]){
      sciCredit = ut.chemhl[4];
    }
    else if (sciCred == ut.chemhl[3]){
      sciCredit = ut.chemhl[2];
    }
    else if (sciCred == ut.chemhl[1]){
      sciCredit = ut.chemhl[0]
    }
    else if (sciCred<ut.chemhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Physics HL"){
    if (sciCred >= ut.phyhl[1]){
      sciCredit = ut.phyhl[0];
    }
    else if (sciCred<ut.phyhl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
  else if (sciCourse == "Computer Science HL"){
    if (sciCred >= ut.cshl[1]){
      sciCredit = ut.cshl[0];
    }
    else if (sciCred<ut.cshl[1]){
      sciCredit = 0;
    }
    else {
      sciCredit = "no input"
    }
  }
}


//math
function utcpmath(){
  if (mathCourse == "Math Studies SL"){
    if (mathCred >= ut.mstudiessl[1]){
      mathCredit = ut.mstudiessl[0];
    }
    else if (mathCred<ut.mstudiessl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics SL"){
    if (mathCred >= ut.mathsl[1]){
      mathCredit = ut.mathsl[0];
    }
    else if (mathCred<ut.mathsl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input"
    }
  }
  else if (mathCourse == "Mathematics HL"){
    if (mathCred == ut.mathhl[1]){
      mathCredit = ut.mathhl[0];
      mathCommentary = ut.mathhl[2];
    }
    else if (mathCred >= ut.mathhl[4]){
      mathCredit = ut.mathhl[3];
      mathCommentary = ut.mathhl[5];
    }
    else if (mathCred<ut.mathhl[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
  else if (mathCourse == "Further Mathematics HL"){
    if (mathCred >= ut.fumath[1]){
      mathCredit = ut.fumath[0];
    }
    else if (mathCred<ut.fumath[1]){
      mathCredit = 0;
    }
    else {
      mathCredit = "no input";
    }
  }
}
function utcparts(){
  if (artCourse == "Visual Arts SL"||artCourse == "Visual Arts HL"){
    if (artCred >= ut.va[1]){
      artCredit = ut.va[0];
    }
    else if (artCred<ut.va[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
  else if (artCourse == "Music HL"){
if (artCred >= ut.mhl[1]){
      artCredit = ut.mhl[0];
    }
    else if (artCred<ut.mhl[1]){
      artCredit = 0;
    }
    else {
      artCredit = "no input"
    }
  }
  else if (artCourse == "Music SL"){
    artCredit = ut.msl[0];
  }
  else if (artCourse == "Theatre SL"||artCourse == "Theatre HL"){
    artCredit = ut.th[0];
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
    utcpll();
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
   	  utcpll();
	    document.getElementById("llcredit2").innerHTML = llCredit;
      if (llCommentary !== " "){
	    document.getElementById("llcommentary2").innerHTML = llCommentary;
}
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
    utcplang();
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
   	  utcplang();
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
    utcpss();
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
    utcpsci();
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
   	  utcpsci();
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
   	  utcpsci();
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
    utcpmath();
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
    utcparts();
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


utMI();
}
