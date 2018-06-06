module.exports = {

    // mysql://b1466f0b4aad25:0bdc5aef@us-cdbr-iron-east-04.cleardb.net/heroku_22fdd806fc12bbe?reconnect=true

    liveDb : {
        host: 'us-cdbr-iron-east-04.cleardb.net',
        user: 'b1466f0b4aad25',
        pass:'0bdc5aef',
        port:3306,
        database:'heroku_22fdd806fc12bbe',
        dialect:'mysql',
        pool:{
            min:0,
            max:5,
            idle:10000
        }
    },

    server : {
        host:'http://127.0.0.1',
        port : 1234
    },
    admin : {
        username:'admin',
        password : 'admin123'
    },
    dirPath : {
        model:'../models',
    },
};