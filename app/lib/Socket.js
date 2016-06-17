"use strict";
/**
 * Networking calls.
 * @author daithi coombes <webeire@gmail.com>
 * @module Network
 */
const ifaces = require('os').networkInterfaces();

/**
 * @class Socket
 */
class Socket{

    construct(){

    }

    /**
     * @todo
     *  - user sets ip address in ui
     *  - http across ip range (255 pings)
     *  - listen for 'tutorial-xos' response and persist ip address
     *  - list persisted ip address in ui for user to select when not playing a
     *  game
     */
    findPlayers(cb){

        // get ip address
        const address = this.getAddress();

        // Print the result
        console.log(address);

        // broadcast ello on port 12345
        cb(null, {});
    }

    /**
     * Get the current network IP
     * @return {String} Returns the network ip.
     */
    getAddress(){

        // Iterate over interfaces ...
        const address = Object.keys(ifaces).reduce(function (result, dev) {
          return result.concat(ifaces[dev].reduce(function (result, details) {
            return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
          }, []));
        });

        return address.replace('lo', '');
    }
}

module.exports = new Socket();
