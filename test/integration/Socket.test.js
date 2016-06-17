const assert        = require('chai').assert,
    childProcess    = require('child_process');

let process;

// TODO: spawn process of server to send requests to. Maybe possible to test
// against self?
describe.skip('socket', function(){

    before((done)=>{

        // run mock Player
        process = runScript('test/helpers/player/app.js', (err)=>{
            if (err) return done(err);
        });
        done();
    });

    after((done)=>{

        process.kill('SIGINT');
        process = null;
        done();
    });

    it('broadcasts and finds Players', function(done){


        let Socket = require(__dirname+'/../../app/lib/Socket.js');

        Socket.findPlayers((err, actual)=>{
            if(err) return done(err);

            const expected = [{ip: '0.0.0.0', name: 'FooBar'}];

            assert.deepEqual(actual, expected);
            done();
        });

    });
});

function runScript(scriptPath, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    let invoked = false;

    process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    process.on('stdout', function(data){
        console.log(data);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        const err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

    return process;
}
