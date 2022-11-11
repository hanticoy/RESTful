
const mongoose = require('../config/mongoose.config')

// Las tareas se deben devolver en un formato JSON. Ten en cuenta las tareas como objetos con las siguientes propiedades:
//  _id: (cadena) (ID predeterminado generado por MongoDB)
// title: (cadena)
// description: (cadena, predeterminado a una cadena vacía)
// completed: (booleano, predeterminado a: false)
// created_at: (fecha, predeterminada a la fecha actual)
// updated_at: (fecha, predeterminada a la fecha actual)

//Generamos un esquema de objeto JSON que almacenaremos
const datasSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'title: no puede ser vacio'] },
        description: { type: String, default:'' },
        completed:{type:Boolean},
    }, { timestamps: true }
);

// crea un objeto que contenga métodos para que Mongoose interactúe con MongoDB
const datas = mongoose.model('data', datasSchema);

module.exports = datas;