console.log( 'js sourced' );

var funFunFunction = function () {
  var theFunThing = prompt( 'What\'s so funny?' );
  console.log( 'the user thinks', theFunThing, 'is funny...' );
  var pTag = document.getElementById( 'funnyStuff' );
  pTag.appendChild( document.createTextNode( theFunThing ) );
};

var boringBoringFunction = function(){
  console.log( 'in boringBoringFunction' );
    var theBoringThing = prompt( 'What\'s boring?' );
    console.log( 'the user thinks', theBoringThing, 'is boring and I agree so I\'m not going to show it on the page...' );
};
