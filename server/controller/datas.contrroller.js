const Datas = require('../model/datos.model')

module.exports = {
    queryAll: async function (req, res) {
        const datas = await Datas.find();
        res.json(datas);
    },

    queryById: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        let id = req.body._id;
        
        Datas.find({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    
    new: async function (req, res) {
        // {
        //     first_name: 'steve',
        //     last_name: 'Jobs',
        //     email: 'steve.jobs@gmail.com',
        //     password: '123456'
        // }
        const body = req.body;
        const user = new Datas(body);
        user.save()
        .then( data => res.json(data))
        .catch(err => res.json(err));
    },

    update: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        const body = req.body;

        const id = body._id;
        
        Datas.updateOne({ _id: id, body })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    delete: async function (req, res) {
        // {
        //     "_id": "636d57dee80f54419378d9a1"
        // }
        let id = req.body._id;
        
        Datas.deleteOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
  
};




