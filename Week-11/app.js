$( document ).ready( () => {

    // let p = $('p')
    // console.log(p.css('background-color'));

    // p.hide( 2500 );
    // p.fadeOut( 2500 );
    // p.show( 2500 );
    // p.slideUp( 2500 );
    // p.on("click", () => {
    //     p.toggle();
    // })

    // jquery 

    let array = []
    let turn = true;
    for ( let i = 0; i < 9; i++ ) {
        let td = $(`#${i+1}`);
        td.on('click', () => {
            if (turn) {
                td.text('X').addClass('XandO');
                turn = false;
            } else {
                td.text('O').addClass('XandO');
                turn = true;
            }
            
        });
        array.push(td);
    }
    
    

        // let square = $( evt.target );
        // square.add( 'p' ).text('X').addClass('XandO');

        // square.text('X').addClass('XandO').slideUp( 2500 )
        
        
        


})