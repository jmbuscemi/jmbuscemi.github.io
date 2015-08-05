var randomFact = {
  "facts": [
    {"text":"I'm detail oriented"},
    {"text":"I've surfed in South Africa"},
    {"text":"I've cooked dinner for a Senator"},
    {"text":"I like chocolate chip cookies"},
    {"text":"I'm a pretty decent point guard"},
    {"text":"Go Wolfpack!!!"},
    {"text":"I write and perform my own music"}
  ]
};

function generateRandomFact(first, last) {
  return Math.floor(Math.random() * (last - first + 1)) + first;
}

randomFactNum = generateRandomFact(1, 7) - 1;
// alert(randomFactNum);
// alert(randomFact.facts[randomFactNum].text);
$("#fact-text").append( randomFact.facts[randomFactNum].text );

function onClick() {
  randomFactNum = generateRandomFact(1, 7) - 1;
  $( "#fact-text" ).empty();
  $( "#fact-text" ).prepend( randomFact.facts[randomFactNum].text );
}
