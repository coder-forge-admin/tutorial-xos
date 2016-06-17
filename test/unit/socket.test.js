"use strict";

const assert = require('chai').assert,
    nock = require('nock'),
    Socket = require(global.dirApp+'lib/Socket');

describe('Socket', ()=>{

    it('will get the network ip', (done)=>{

        const actual = Socket.getAddress(),
            test1 = '127.0.0.1',
            test2 = '127.0.1.1';

        assert.notEqual(actual, test1, 'Invalid ip address: '+actual);
        assert.notEqual(actual, test2, 'Invalid ip address: '+actual);
        done();
    });

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
