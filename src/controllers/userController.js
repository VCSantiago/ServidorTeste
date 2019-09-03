const Post = require('../models/User');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res ){
        const posts = await Post.find().sort('-createdAt');
        return res.json(posts);
    },
    async store(req, res ){
        const { nome, email, senha, confirmasenha } = req.body;
        const post = await Post.create({
            nome, 
            email, 
            senha, 
            confirmasenha, 
        });
        return res.json(post);
    }
};