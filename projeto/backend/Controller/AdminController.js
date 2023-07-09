'use strict';

const Admin = require('../Models/AdminModel');

exports.get = (req, res) => {
   console.log(`Requisicao GET: ${req.body}`);

   Admin.find()
      .then((products) => {
         console.log(`Resposta: ${products}`);
         res.json(products).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Admin} nao funcionou: ${error}`);
      });
};

exports.get = (req, res) => {
   const id = req.params.id;
 
   Admin.findById(id)
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
 
   console.log(`Nome: ${req.body.nome}`);
   
   const admin = new Admin({
     nome: req.body.nome,
   });
 
   admin.save()
      .then((response) => {
         console.log(`Resposta: ${response}`);
         res.json(response).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Admin} nao funcionou: ${error}`);
      });
};

exports.put = (req, res) => {
   const id = req.params.id;
   console.log(`Requisicao GET: ${req.body} ID: ${id}`);
 
   const updateProduct = {
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity
   };

   Products.findByIdAndUpdate(id, updateProduct, {new : true})
      .then(updateProduct => {
         console.log(`Produto atualizado: ${updateProduct}`);
         res.json(updateProduct).status(200);
      })
      .catch(error => {
         console.log(`Erro atualizando o produto: ${error}`);
         res.status(500).json({error: 'Erro atualizando o produto'});
      })
 };

exports.delete = (req, res) => {
   const id = req.params.id;

   // Lógica para remover o dado do banco de dados com o ID fornecido
   Admin.findOneAndDelete({})
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

