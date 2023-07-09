'use strict';

const Order = require('../Models/OrderModel');
const Product = require('../Models/ProductModel');

exports.get = (req, res) => {
   console.log(`Requisicao GET: ${req.body}`);

   Order.find()
      .then((products) => {
         console.log(`Resposta: ${products}`);
         res.json(products).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Order} nao funcionou: ${error}`);
      });
};

exports.post = async (req, res) => {
   console.log(`Requisicao POST: ${req.body}`);
   const order = req.body;
   
   try{
      const products = await Promise.all(
         order.products.map(async (product) => {
            const {id, amount} = product;
            console.log(`id: ${id} amount: ${amount}`);
            const storedProduct = await Product.findById(id).lean();

            console.log(`stored-id: ${storedProduct.id} stored-amount: ${storedProduct.amount}`);

            if(!storedProduct){
               res.status(404);
               throw new Error("Produto nao cadastrado, hacker fdp")
            }
            if(amount > storedProduct.amount){
               throw new Error("Ta comprando muito item, nao tem estoque nao, burgues fdp");
            }
         })
      );
      
      const newOrder = new Order({
         client : req.body.client,
         products : req.body.products
      })

      newOrder.save()
         .then((response) => {
            console.log(`Resposta: ${response}`);
            res.json(response).status(200);
         })
         .catch((error) => {
            console.log(`Cadastro de: ${Product} nao funcionou: ${error}`);
         });
   }
   catch(error){
      console.log(error);
   }
};

exports.updateProducts = (req, res) => {
   console.log(`Requisicao POST: ${req.body}`);
   
   try{

   }
   catch(error){

   }
};

exports.put = (req, res) => {
   const nomeAntigo = req.body.nomeAntigo; // Nome antigo a ser buscado
   const novoNome = req.body.novoNome; // Novo nome para atualização
 
   Order.findOneAndUpdate(
     { nome: nomeAntigo }, // Critério de busca
     { nome: novoNome }, // Valores atualizados
   )
     .then((orderAtualizado) => {
       if (orderAtualizado) {
         console.log('Dado atualizado com sucesso:', orderAtualizado);
         res.json(orderAtualizado).status(200);
       } else {
         console.log('Dado não encontrado');
         res.status(404).send('Dado não encontrado');
       }
     })
     .catch((error) => {
       console.log('Erro ao atualizar o dado:', error);
       res.status(500).send('Erro ao atualizar o dado');
     });
 };

exports.delete = (req, res) => {
   const id = req.params.id;

   // Lógica para remover o dado do banco de dados com o ID fornecido
   Order.findOneAndDelete({})
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

