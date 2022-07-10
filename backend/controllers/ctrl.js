const connection = require('../dbConfig')

const ctrl = {
    getMovies : async (req, res) => {
        connection.query('SELECT * FROM user', (error,rows) => {
            if(error) throw error;
            console.log(rows);
            console.log("!!!");
            res.send(rows);
        })
    },
    getTables : async (req, res) => {
        connection.query('SELECT * from timetable WHERE class= \"'+req.body.class+ '\" and type = \"'+req.body.type+'\"', (error,rows) => {
            if(error) throw error;
            console.log(req.body);
            console.log("rew");
            res.send(rows);
        })
    }
}

module.exports = ctrl