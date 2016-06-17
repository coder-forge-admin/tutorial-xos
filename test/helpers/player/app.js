#!/usr/bin/env node
"use strict";

const Player = require('./Player');

/**
 * Mimics another player on network for integration tests.
 *
 * @module integration-test
 * @submodule player
 */

const express = require(__dirname+'/../../../app/node_modules/express'),
    app = express();

app.use('/', (req, res)=>{
    res.status(200)
        .send({
            ip: '0.0.0.0',
            player: {name: 'FooBar'},
        });
});

app.listen(12345, ()=>{console.log('Player running')});
