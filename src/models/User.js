const mongoose = require('mongoose');

const PostSchema =  new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    confirmasenha: String,
},{
    timestamps: true
});
module.exports = mongoose.model('User', PostSchema);
