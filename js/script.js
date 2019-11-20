$("document").read(function(){
$("#pigButton").click(function() {
   let inputtoChange= $("#word").val();
    inputtoChange = inputtoChange.toLowerCase();

   const vowels = ["a", "e", "i", "o", "u"];

   let wordtoChange = inputtoChange.split(" ");

   let result = [];
   
   wordtoChange.forEach(function(word) {
    
    let vowelIndex = 0;

    if (vowels.includes(word[0])) {
    
   result.push( word + "ay"+ " ");
    
    } else {
   
    for (let char of word) {
      
      if (vowels.includes(char)) {
       
        vowelIndex = word.indexOf(char);
        break;
      }
    }

    result.push(word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"+" ");
    
    }
   
    
    $("#pigWord").html(result);
    
    });
  
  });

});