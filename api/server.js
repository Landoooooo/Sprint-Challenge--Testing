const express = require('express');

const Games = require("../games/gamesModel");

const server = express();

server.use(express.json());

server.get('/games', async (req, res) => {
    const games = await Games.all();
    res.status(200).json(games)
});

server.post('/games', async (req, res) => {
    const title = req.body.title
    const genre = req.body.genre
    if(!genre || !title){
        return res.status(422).json({error: "missing required field"})
    } else{
        try{
            const newGame = await Games.insert(req.body)
            res.status(201).json(newGame)
        }catch (e){
            res.status(500).json({message: 'server error'})
        }
    }
})

module.exports = server;