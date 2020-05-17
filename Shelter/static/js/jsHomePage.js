$( function () {
  var
    count = 0,
    block = $( '.count1' ),
    interval = setInterval( function () {
      count++;
    
      block.text( count );
      
      if( count === 12 ) {
      	clearInterval( interval );
      }
  	}, 40 );
  
  block.text( count );
} );

$( function () {
  var
    count = 0,
    block = $( '.count2' ),
    interval = setInterval( function () {
      count++;
    
      block.text( count );
      
      if( count === 57 ) {
      	clearInterval( interval );
      }
  	}, 40 );
  
  block.text( count );
} );