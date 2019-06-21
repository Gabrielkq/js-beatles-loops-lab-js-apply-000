// add solution here



 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var emptyArray = [];
function theBeatlesPlay(muscians,intruments){
var mLen = musicians.length;  
for (i = 0; i < mLen; i++)  {
var string = musicians[i] + " plays " + instruments[i] ;
 emptyArray[i] = string;}
 return emptyArray
 
}
theBeatlesPlay();
