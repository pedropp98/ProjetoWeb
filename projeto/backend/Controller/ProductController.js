'use strict';

const Product = require('../Models/ProductModel');

exports.getAll = (req, res) => {
   console.log(`Requisicao GET: ${req.body}`);

   Product.find()
      .then((products) => {
         console.log(`Resposta: ${products}`);
         const response = {products};
         res.json(response).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Product} nao funcionou: ${error}`);
      });
};

exports.getOneById = (req, res) => {
   const id = req.params.id;
 
   Product.findById(id)
     .then((data) => {
       if (!data) {
         return res.status(404).json({ error: 'Data not found' });
       }
 
       res.json(data).status(200);
     })
     .catch((error) => {
       console.error('Error:', error);
       res.status(500).json({ error: 'Internal server error' });
     });
 };

exports.post = (req, res) => {
   console.log(`Requisicao POST: ${req.body}`);

   const product = new Product({
      image : req.body.image,
      title : req.body.title,
      description : req.body.description,
      price : req.body.price,
      category : req.body.category,
      amount : req.body.amount,
   });
 
   product.save()
      .then((response) => {
         console.log(`Resposta: ${response}`);
         res.json(response).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Product} nao funcionou: ${error}`);
      });
};

exports.put = (req, res) => {
   const nomeAntigo = req.body.nomeAntigo; // Nome antigo a ser buscado
   const id = req.params.id;
   const payload = req.body;

   console.log(`id: ${id} payload: ${payload}`);

   if(mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({ error: 'Invalid resource ID' });
   }
 
   Product.findByIdAndUpdate(id, payload, { new: true })
    .then(updatedResource => {
      if (!updatedResource) {
        return res.status(404).json({ error: 'Resource not found' });
      }

      const response = {
        message: `Resource with ID ${resourceId} updated successfully`,
        data: updatedResource
      };

      res.json(response);
    })
    .catch(error => {
      console.error('Error occurred:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
 };

exports.delete = (req, res) => {
   const id = req.params.id;

   // Lógica para remover o dado do banco de dados com o ID fornecido
   Product.findOneAndDelete({})
      .then(deletedData => {
         if (deletedData) {
         console.log('Dado removido com sucesso:', deletedData);
         res.send('Dado removido com sucesso');
         } else {
         console.log('Dado não encontrado');
         res.status(404).send('Dado não encontrado');
         }
      })
      .catch(error => {
         console.error('Erro ao remover o dado:', error);
         res.status(500).send('Erro ao remover o dado');
      });
};

