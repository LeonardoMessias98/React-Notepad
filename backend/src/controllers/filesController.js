const connection = require('../database/connection');

module.exports = {
  async index(request,response){
    let dataIndex = await connection('file').select('*');

    return response.json(dataIndex);
  },

  async create(request,response){
    let dataReceived = request.body;

    await connection('file').insert(dataReceived);

    return response.json(dataReceived);

  },

  async update(request,response){
    let { id } = request.params;

    let { title, text } = request.body;

    await connection('file').where('id',id).update({title,text})

    return response.status(204).send();

  },

  async delete(request,response){
    let { id } = request.params;

    await connection('file').where('id',id).delete();

    return response.status(204).send();

  }
}