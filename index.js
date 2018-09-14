function shout(string){
 return string.toUpperCase(); 
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
console.log (string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma (string){
  if (string=== whisper(string)){
   return `I can't hear you!`;
    // Here I am refering back to whisper(string) as it is string.toLowerCase() then, return I can't hear you.
    
  }if (string===shout(string)){
   return "YES INDEED!";
//here is the same as above where we refer back to where string is.toUpperCase then return Yes INDEED.

}if (string === "I love you, Grandma.")
  return "I love you, too.";
  // here it is more direct, where string is equal to I love you, Grandma and then return I love you, too.
}