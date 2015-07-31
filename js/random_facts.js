function generateRandomFact(first, last) {
    return Math.floor(Math.random() * (last - first + 1)) + first;
  }
  randomFactNum = generateRandomFact(1, 7)
  if (randomFactNum == 1) {
    $("#fact-text").append( "I'm detail oriented" );
  }
  else if (randomFactNum == 2) {
    $("#fact-text").append( "I've surfed in South Africa" );
  }
  else if (randomFactNum == 3) {
    $("#fact-text").append( "I've cooked dinner for a Senator" );
  }
  else if (randomFactNum == 4) {
    $("#fact-text").append( "I like chocolate chip cookies" );
  }
  else if (randomFactNum == 5) {
    $("#fact-text").append( "I'm a pretty decent point guard" );
  }
  else if (randomFactNum == 6) {
    $("#fact-text").append( "Go Wolfpack!!!" );
  }
  else if (randomFactNum == 7) {
    $("#fact-text").append( "I write and perform my own music" );
  }

function onClick() {
  function generateRandomFact(first, last) {
    return Math.floor(Math.random() * (last - first + 1)) + first;
  }
  randomFactNum = generateRandomFact(1, 7)
  if (randomFactNum == 1) {
    $( "#fact-text" ).remove();
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I'm detail oriented</h1>" );
  }
  else if (randomFactNum == 2) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I've surfed in South Africa</h1>" );
  }
  else if (randomFactNum == 3) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I've cooked dinner for a Senator</h1>" );
  }
  else if (randomFactNum == 4) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I like chocolate chip cookies</h1>" );
  }
  else if (randomFactNum == 5) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I'm a pretty decent point guard</h1>" );
  }
  else if (randomFactNum == 6) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>Go Wolfpack!!!</h1>" );
  }
  else if (randomFactNum == 7) {
    $( "#fact-text" ).remove( "h1" );
    $( "#fact-div" ).prepend( "<h1 id='fact-text'>I write and perform my own music</h1>" );
  }
}
