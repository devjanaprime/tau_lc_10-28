console.log( 'js sourced' );

var funFunFunction = function () {
  var theFunThing = prompt( 'What\'s so funny?' );
  console.log( 'the user thinks', theFunThing, 'is funny...' );
  var pTag = document.getElementById( 'funnyStuff' );
  pTag.appendChild(document.createTextNode( theFunThing ) );
};
