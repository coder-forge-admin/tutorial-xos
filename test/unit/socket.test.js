"use strict";

const assert = require('chai').assert,
    nock = require('nock'),
    Socket = require(global.dirApp+'lib/Socket');

describe('Socket', ()=>{

    it('Will scan for other players', (done)=>{

        const expected = {
            ip: '127.0.0.10',
            username: 'FooBar Mc BizBaz',
        }

        // setup nock to catch
        const player = nock('http://127.0.0.10')
            .get('/player/')
            .reply('200', expected);

        Socket.findPlayers((err, actual)=>{
            assert.deepEqual(actual, expected);
            done();
        });

    });
});
