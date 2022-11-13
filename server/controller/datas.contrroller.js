const Datas = require('../model/datos.model')

module.exports = {
    queryAll: async function (req, res) {
        const datas = await Datas.find();
        res.json(datas);
    },

    queryById: async function (req, res) {
        let id = req.params.id;
        Datas.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    new: async function (req, res) {
        
        const body = req.body;
        const user = new Datas(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    update: async function (req, res) {
        const body = req.body;
        const id = body._id;
        // console.log('Api in:' + body._id + '|'+ body.title  + '|'+ body.description  + '|'+ body.completed);

        Datas.findOneAndUpdate({_id: id}, {title:body.title, description:body.description, completed: body.completed}, function(err, data){
            if (err) {
                res.json(err)     
            }else{
                console.log('Api out:' + data);
                res.json(data);
            }
        }    
        );
            
    },

    delete: async function (req, res) {
        let id = req.params.id;
        Datas.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
  
};



 