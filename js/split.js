"user strict";

var splitInParts = function(s, partLength){
    let raides = ''; 
    for (let i=0; i<s.length; i++){
        raides += s[i];
        if (i%partLength === partLength-1 ){
            raides += ' ';
        }
    }
    return raides.trim();
  };




console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
console.log(splitInParts("HelloKata", 1), "H e l l o K a t a")
console.log(splitInParts("HelloKata", 9), "HelloKata")