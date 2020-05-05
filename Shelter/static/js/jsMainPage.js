$( function () {
  var
    count = 0,
    block = $( '.count1' ),
    interval = setInterval( function () {
      count++;
    
      block.text( count );
      
      if( count === 453 ) {
      	clearInterval( interval );
      }
  	}, 1 );
  
  block.text( count );
} );

$( function () {
  var
    count = 0,
    block = $( '.count2' ),
    interval = setInterval( function () {
      count++;
    
      block.text( count );
      
      if( count === 763 ) {
      	clearInterval( interval );
      }
  	}, 1 );
  
  block.text( count );
} );