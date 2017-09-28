const Database = require('nedb')
const db = new Database({
    filename:'data.db',
    autoload:true
})
module.exports = { db }