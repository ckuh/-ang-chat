var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res, next){
    Message.find()
        .populate('user', 'firstName')
        .exec(function(err, docs){
            if(err){
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            })
        })
})

// middleware
router.use('/?', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err){
            return res.status(404).json({
                title: 'Authentication Failed',
                error: err
            });
        }
        next();
    })

})

router.post('/', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    User.findById({_id: decoded.user._id}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        console.log("this is doc in find", doc)
        var message = new Message({
            content: req.body.content,
            user: doc
        });
        console.log("this is message in post message", message)
        message.save(function(err,result){
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            doc.messages.push(result)
            doc.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            })

        })
    })
});

router.patch('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No Document found',
                error: {message: 'Message could not be found'}
            });
        }
        if(doc.user != decoded.user._id){
            return res.status(401).json({
                title: 'No Authorized',
                error: {message: 'Message created by other user'}
            });
        }
        doc.content = req.body.content;
        doc.save(function(err, result) {
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            })
        });
    })
})

router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'No Document found',
                error: {message: 'Message could not be found'}
            });
        }
        doc.content = req.body.content;
        doc.remove(function(err, result) {
            if(err){
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if(doc.user != decoded.user._id){
                return res.status(401).json({
                    title: 'No Authorized',
                    error: {message: 'Message created by other user'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    })
});


module.exports = router;