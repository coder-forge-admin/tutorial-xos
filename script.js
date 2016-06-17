"use strict";       // needed to state we are using version ES6 of javascript here.

/**
 * A Javascript ES6 tutorial using X's and O's
 * @author daithi coombes <webeire@gmail.com>
 */

// get our two html elements as javascript objects. A 'const' is something that
// won't be changed later in the code.
const board = document.getElementById("board"),     // div id="board"
    select   = document.getElementById("piece");    // select id="piece"


// this defines a variable 'piece' that is available to all our code. If one
// function changes its value then another function will see that change. This
// is known as a global variable.
let piece;


/**
 * Handles the onclick event of the button.
 *
 * When user clicks a button an event is fired. There's many events, but in this
 * case we're interested in the 'click' event.
 *
 * Here we define a function, called 'btnClick'. We then later set this function
 * for each of the buttons by storing it as the buttons 'onclick' parameter.
 *
 * @param  {Event} event The click event object (plenty of info inside it)
 */
const btnClick = (event)=>{

    // if no piece selected warn user and return.
    if(!piece)
        return alert('Please select a piece');

    // if this button has a piece, then remove it
    if(event.target.innerHTML != '')
        event.target.innerHTML = '';

    // else add piece to this button
    else
        event.target.innerHTML = piece;

} // end of btnClick function


/**
 * Handles the onchange event of the select dropdown.
 *
 * @param  {Event} event The event object.
 */
const selectPiece = (event)=>{

    // event.target is the element that caused the event. In this case its our
    // select dropdown.
    piece = event.target.value;

    // when developing if you want to see what something contains you can 'log
    // it to the console'. Then in your browser hit 'f12' and view the
    // 'console' tab.
    console.log(event);
}
select.onchange = selectPiece;


// lets add 9 buttons on the board
// this will loop nine times
for(let x=0; x<9; x++){

    // 1st create a button and a unique id
    let btn = document.createElement('button'),
        id = 'btn-'+x;

    // every 3 times create a new line using the 'br' element.
    // the 'x%3' will return the remainder of x divided by 3. Which will only
    // equal 0 every time x is a multiple of 3.
    if (x % 3 == 0) {
        let br = document.createElement('br');
        board.appendChild(br);
    }

    // set buttons attributes
    btn.id = id;
    btn.style.width = '80px';
    btn.style.height = '80px';
    btn.onclick = btnClick;             // set the buttons click event to our btnClick function above.

    // add new btn x to board
    board.appendChild(btn);
}
