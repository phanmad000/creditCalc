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


//lang lit credit finder
function utdpcalc(){
var ut= {
 engahl:[3,4],
 engasl:[3,4], //same class as hl
 spanasl: [6,4],
 spanahl: [27,5,"SPN 601D, 611D, 312L, 327W, 327C",18,4,"SPN 601D, 610D, 611D",22,5,"SPN 506, 507, 312K, 312L, 327W, 327C",16,4,"506,507, 312K, 312L"], //diff course qualification for same score given option
 spanab: [0, 0],
 spansl: [ 10,4],
 spanhl: [16,4,"SPN 506, 508K, 312K, 312L",18,4,"SPN 601D, 610D, 611D"], //diff course qualification for same score given option
 frenchab: [0, 0],
 frenchsl: [12,4],
 frenchhl: [24,6,21,4,5],
 italab: [0, 0],
 italsl: [6,4],
 italhl: [21,4,12,3,6,2],
 germab: [0,0],
 germsl: [10,4],
 sssl: [3,4],
 sshl: [3,4],
 biosl: [3,4],
 biohl: [3,4,5,6],
 chemsl: [3,4],
 chemhl: [8,6,5],
 physl: [4,4],
 phyhl: [14,5,4,4],
 cssl: [3,4],
 cshl: [3,4], //diff class qualification than sl
 mstudiessl: [3,4,"M 302"], //diff class qualification than math sl
 mathsl: [3,4,"M 305G"],
 mathhl: [4,5,"408C",4,4,"408K"], //diff class from 4 score and 5+ score
 fumath: [7,4],
 va: [3,4],
 msl: [0,0],
 mhl: [3,4],
 th: [3,4]
};



//lang lit function
function utdpll(){
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
  if (llCred >= ut.spanahl[1]){
    llCredit = ut.spanahl[0] + " or " + ut.spanahl[6];
    llCommentary = "The 27 credits: " + ut.spanahl[2] + ". The 22 credits: " + ut.spanahl[8];
  }
  else if (llCred == ut.spanahl[4]){
    console.log("rawr")
    llCredit = ut.spanahl[3] + " or " + ut.spanahl[9];
    console.log(llCredit)
    llCommentary = "The 18 credits: " + ut.spanahl[5] + "." + " The 16 credits: " + ut.spanahl[11];
  }
  else if (llCred < ut.spanahl[4]){
    llCredit = 0;
  }
  else {
    llCredit = "no input"
  }
}
}

//language B function
function utdplang(){
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
    langCredit = ut.spanhl[0] + " or " + ut.spanhl[3];
    langCommentary = "The " + ut.spanhl[0] + " credits: " + ut.spanhl[2] + ". The " + ut.spanhl[3] + "credits: " + ut.spanhl[4];
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
  if (langCred >= ut.frenchhl[1]){
    langCredit = ut.frenchhl[0];
  }
  else if (langCred == ut.frenchhl[3]|| langCred == ut.frenchhl[4]){
    langCredit = ut.frenchhl[2];
  }
  else if (langCred<ut.frenchhl[3]){
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
  if (langCred >= ut.italhl[1]){
    langCredit = ut.italhl[0];
  }
  else if (langCred == ut.italhl[3]){
    langCredit = ut.italhl[2];
  }
  else if (langCred == ut.italhl[5]){
    langCredit = ut.italhl[4];
  }
  else if (langCred<ut.italhl[5]){
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

function utdpss(){
if (ssCourse == "History SL"|| ssCourse == "History of Europe/Middle East SL"|| ssCourse == "History of Africa SL"|| ssCourse == "History of Europe SL"|| ssCourse == "History of the Americas SL"){
 if (ssCred >= ut.sssl[1]){
   ssCredit = ut.sssl[0];
 }
 else if (ssCred<ut.sssl[1]){
   ssCredit = 0;
 }
 else {
   ssCredit = "no input";
}
}

else if (ssCourse == "History HL"|| ssCourse == "History of Europe/Middle East HL"|| ssCourse == "History of Africa HL"|| ssCourse == "History of Europe HL"|| ssCourse == "History of the Americas HL"){
  if (ssCred >= ut.sshl[1]){
    ssCredit = ut.sshl[0];
  }
  else if (ssCred<ut.sshl[1]){
    ssCredit = 0;
  }
  else {
    ssCredit = "no input"
  }
}
}

//sciences
function utdpsci(){
 if (sciCourse == "Biology SL"|| sciCourse == "Chemistry SL"|| sciCourse == "Computer Science SL"||sciCourse == "Computer Science HL"){
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
  if (sciCred >= ut.biohl[3]){
    sciCredit = ut.biohl[2];
  }
  else if (sciCred = ut.biohl[1]||sciCred == ut.biohl[1]+1){
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
  if (sciCred >= ut.chemhl[1]){
    sciCredit = ut.chemhl[0];
  }
  else if (sciCred == ut.chemhl[2]){
    sciCredit = ut.chemhl[1];
  }
  else if (sciCred<ut.chemhl[2]){
    sciCredit = 0;
  }
  else {
    sciCredit = "no input"
  }
}
else if (sciCourse == "Physics SL"){
  if (sciCred >= ut.physl[1]){
    sciCredit = ut.physl[0];
  }
  else if (sciCred<ut.physl[1]){
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
  else if (sciCred = ut.phyhl[3]){
    sciCredit = ut.phyhl[2];
  }
  else if (sciCred<ut.phyhl[3]){
    sciCredit = 0;
  }
  else {
    sciCredit = "no input"
  }
}
}


//math
function utdpmath(){
if (mathCourse == "Math Studies SL"){
  if (mathCred >= ut.mstudiessl[1]){
    console.log("rawrM")
    mathCredit = ut.mstudiessl[0];
    console.log(ut.ms)
    mathCommentary = ut.mstudiessl[2];
    console.log(mathCredit)
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
    mathCommentary = ut.mathsl[2];
  }
  else if (mathCred<ut.mathsl[1]){
    mathCredit = 0;
  }
  else {
    mathCredit = "no input"
  }
}
else if (mathCourse == "Mathematics HL"){
  if (mathCred >= ut.mathhl[1]){
    mathCredit = ut.mathhl[0];
    mathCommentary = ut.mathhl[2];
  }
  else if (mathCred == ut.mathhl[4]){
    mathCredit = ut.mathhl[3];
    mathCommentary = ut.mathhl[5];
  }
  else if (mathCred<ut.mathhl[4]){
    mathCredit = 0;
  }
  else {
    mathCredit = "no input"
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
    mathCredit = "no input"
  }
}
}
function utdparts(){
if (artCourse == "Visual Arts SL"||artCourse == "Visual Arts HL"||artCourse == "Music HL"||artCourse == "Theatre SL"||artCourse == "Theatre HL"){
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
else if (artCourse == "Music SL"){
  artCredit = ut.msl[0];
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
  utdpll();
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
if (llCourse !== " "){
document.getElementById("llcourse2").innerHTML = llCourse;
document.getElementById("lltest2").innerHTML = llCred;
if (llCred !== " "){
    utdpll();
    document.getElementById("llcredit2").innerHTML = llCredit;
    if (langCommentary !== " "){
    document.getElementById("llcommentary2").innerHTML = llCommentary;
}
}
llCourse = " ";
llCred = " ";
llCredit = " ";
llCommentary = " ";
}

//lang
langCourse = document.getElementById("language").value;
langCred = document.getElementById("langscore").value;
document.getElementById("langcourse").innerHTML = langCourse;
document.getElementById("langtest").innerHTML = langCred;
console.log(language)
console.log(langCred)
if (langCred !== " "){
  utdplang();
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
if (langCourse !== " "){
document.getElementById("langcourse2").innerHTML = langCourse;
document.getElementById("langtest2").innerHTML = langCred;
if (langCred !== " "){
    utdplang();
    document.getElementById("langcredit2").innerHTML = langCredit;
    if (langCommentary !== " "){
    document.getElementById("langcommentary2").innerHTML = langCommentary;
  }
}
langCourse = " ";
langCred = " ";
langCredit = " ";
langCommentary = " ";
}

//ss
ssCourse = document.getElementById("ss").value;
console.log(ssCourse)
ssCred = document.getElementById("ssscore").value;
document.getElementById("sscourse").innerHTML = ssCourse;
document.getElementById("sstest").innerHTML = ssCred;
if (ssCred !== " "){
  utdpss();
  document.getElementById("sscredit").innerHTML = ssCredit;
  if (langCommentary !== " "){
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
console.log(sciCourse)
console.log(science.value)
console.log(sciCred)
document.getElementById("scicourse").innerHTML = sciCourse;
document.getElementById("scitest").innerHTML = sciCred;
if (sciCred !== " "){
  utdpsci();
  console.log(sciCredit)
  document.getElementById("scicredit").innerHTML = sciCredit;
  document.getElementById("scicommentary").innerHTML = sciCommentary;
}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";

//science 2nd input
sciCourse = document.getElementById("science2").value;
sciCred = document.getElementById("sciencescore2").value;
console.log("rawr4")
console.log(sciCourse)
console.log(sciCred)
if (sciCourse !== " "){
document.getElementById("scicourse2").innerHTML = sciCourse;
document.getElementById("scitest2").innerHTML = sciCred;
if (sciCred !== " "){
    utdpsci();
    document.getElementById("scicredit2").innerHTML = sciCredit;
    document.getElementById("scicommentary2").innerHTML = sciCommentary;
}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";
}

//science 3rd input
sciCourse = document.getElementById("science3").value;
sciCred = document.getElementById("sciencescore3").value;
if (sciCourse !== " "){
document.getElementById("scicourse3").innerHTML = sciCourse;
document.getElementById("scitest3").innerHTML = sciCred;
if (sciCred !== " "){
    utdpsci();
    document.getElementById("scicredit3").innerHTML = sciCredit;
    document.getElementById("scicommentary3").innerHTML = sciCommentary;
}
sciCourse = " ";
sciCred = " ";
sciCredit = " ";
sciCommentary = " ";
}

//math input
mathCourse = document.getElementById("math").value;
mathCred = document.getElementById("mathscore").value;
document.getElementById("mathcourse").innerHTML = mathCourse;
document.getElementById("mathtest").innerHTML = mathCred;
console.log(mathCourse)
console.log(mathCred)
if (mathCred !== " "){
  utdpmath();
  console.log(mathCredit)
  document.getElementById("mathcredit").innerHTML = mathCredit;
  document.getElementById("mathcommentary").innerHTML = mathCommentary;
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
  utdparts();
  console.log(artCredit)
  document.getElementById("artcredit").innerHTML = artCredit;
  document.getElementById("artcommentary").innerHTML = artCommentary;
}
artCourse = " ";
artCred = " ";
artCredit = " ";
artCommentary = " ";



utMI()
}
