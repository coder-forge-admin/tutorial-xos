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

        // broadcast ello on port 12345
        cb(null, {});
    }
}

module.exports = new Socket();
