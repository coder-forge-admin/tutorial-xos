import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.board.onRendered(function boardCreated(){

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

/**
Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/
