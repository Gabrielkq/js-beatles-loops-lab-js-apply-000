// add solution here



 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var emptyArray = [];
function theBeatlesPlay(muscians,intruments){
var mLen = musicians.length;  

for (var i = 0; i < mLen; i++)  {
var string = musicians[i] + " plays " + instruments[i] ;
 emptyArray[i] = string;}
 return emptyArray
 
}
theBeatlesPlay();

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var lennonArray = [];
  while (i < facts.length) {
  lennonArray[i] = facts[i] +"!!!";
  i++;
}
  return lennonArray;
}
johnLennonFacts();
