const { response, request } = require('express');

const usersGet = ( req = request, res = response ) => {

    const query = req.query;

    res.json({
        msg: 'Get API - usersGet',
        query
    });

}

const usersPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - usersPost',
        nombre,
        edad
    });

}

const usersPut = ( req, res = response ) => {

    const id = req.params.id;

    res.json({
        msg: 'Put API - usersPut',
        id
    });

}

const usersPatch = ( req, res = response ) => {

    res.json({
        msg: 'Patch API - usersPatch'
    });

}

const usersDelete = ( req, res = response ) => {

    res.json({
        msg: 'Delete API - usersDelete'
    });

}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete,
    usersGet,
}