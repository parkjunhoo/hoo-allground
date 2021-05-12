const Board = require('../../../models/board')
const jwt = require('jsonwebtoken')

exports.write = (req, res) => {
    const { title, contents } = req.body
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.admin)
        {
            Board.create(title,contents)
            .then(()=>{
                res.send('uploaded')
            })
        }
        else res.send('not_admin')
    }).catch(onError)
        // if(isAdmin)
        // {
        //     Board.create(title,contents)
        //     .then(()=>{
        //         res.send('uploaded')
        //     })
        // }
        // else res.send(req.session)
}

exports.delete = (req ,res) => {
    const { id } = req.body
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.admin)
        {
            const { id } = req.body
            Board.deleteOne({_id:id})
            .then(()=>{
                res.send('deleted');
            })
        }
        else res.send('not_admin')
    }).catch(onError)

    // const { id } = req.body
    // Board.deleteOne({_id:id})
    // .then(()=>{
    //     res.send('deleted');
    // })
}

exports.edit = (req, res) => {
    const {id , title , contents} = req.body
    const token = req.session.token;
    if(!token) {
        return res.send('not_logged')
    }
    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        }
    )

    const onError = (error) => {
        res.status(403).json({
            success: false,
            message: error.message
        })
    }

    p.then((decoded)=>{
        if(decoded.admin)
        {
            Board.findOneAndUpdate({_id:id,},{$set:{title:title,contents:contents}})
            .then(()=>{
                res.send('updated');
            })
        }
        else res.send('not_admin')
    }).catch(onError)


    // Board.findOneAndUpdate({_id:id,},{$set:{title:title,contents:contents}})
    // .then(()=>{
    //     res.send('updated');
    // })
}

exports.find = (req, res) => {
    Board.find(function(err, board){
        if(err) return res.send(err);
        res.json(board);
    })
}