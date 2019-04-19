const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove,
    all
};

async function insert(game){
    const [id] = await db('games').insert(game);

    return db('games')
        .where({ id })
        .first();
}

function remove(id){
    return db('games')
        .where({ id })
        .del()
}

function all(){
    return db('games')
}