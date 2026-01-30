const { text } = require('body-parser');
const {Pool} = require('pg');
const pool=new Pool({
    user:'postgres',
    host:'localhost',
    database:'authdb',
    password:'2980',
    port:5432
});
module.exports={
    query:(text,params)=>pool.query(text,params)
}
