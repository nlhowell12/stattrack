const express = require('express');
const socket = require('socket.io')
const app = express();
app.use(express.static("./public"));
app.set('view engine', 'pug');
app.use(express.json());
const port = 3000;
const server = app.listen(port);

var io = socket(server);

const state = {
    players: {

    }
}

function createPlayer(name) {
    state.players[name] = {
        stunned: 0,
        poisoned: 0,
        charmed: 0,
        fatigued: 0,
        frightened: 0,
        blinded: 0,
        paralyzed: 0,
    }
    console.log(state);
}

io.on('connection', (socket) => {
    console.log(`Connected on Port: ${port}`)

})

io.on('addPlayer', (data) => {
    console.log(data.player);
    if (!state.players[data.player]) {
        createPlayer(data.player);
    }
})

app.get('/', (req, res) => {
    res.render('index')
})


