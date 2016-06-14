import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


let piece   = null,
    running = false;

// document.ready()
Template.board.onRendered(function boardRendered(){

    // #board ul li button
    const buttons = $('#board button');

    for(let x=0; x<buttons.length; x++){

        let button          = $(buttons[x]),
            widthButton     = button.width(),
            widthTotal      = $('#board').width(),
            heightButton    = null,
            heightTotal     = $('#board').height();

        if( (widthButton*3) > heightTotal )
            heightButton = heightTotal / 3.5;
        else
            heightButton = widthTotal / 3;

        button.height(heightButton*1.2);
    }
});

Template.body.events({

    'click #play'(event, instance){

        if(!piece || piece==='')
            return alert('You must select a piece first');

        running = true;

        $('#play').attr('disabled', 'disabled');
        $('#piece').attr('disabled', 'disabled');
        $('#stop').removeAttr('disabled');
    },

    'click #stop'(event, instance){

        running = false;

        $('#play').removeAttr('disabled');
        $('#piece').removeAttr('disabled');
        $('#stop').attr('disabled', 'disabled');

        $('#board button').html('');
    },

    'change #piece'(event, instance){
        piece = event.target.value
    },
})

Template.board.events({

    'click #board button'(event, instance) {

        const button    = $(event.target);

        console.log(piece);
        if(piece!=='x' && piece!=='o')
            return alert('Please select X or O to start with');

        button.html(piece);
    },
});
