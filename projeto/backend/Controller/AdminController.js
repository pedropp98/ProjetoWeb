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
   const nomeAntigo = req.body.nomeAntigo; // Nome antigo a ser buscado
   const novoNome = req.body.novoNome; // Novo nome para atualização
 
   Admin.findOneAndUpdate(
     { nome: nomeAntigo }, // Critério de busca
     { nome: novoNome }, // Valores atualizados
   )
     .then((adminAtualizado) => {
       if (adminAtualizado) {
         console.log('Dado atualizado com sucesso:', adminAtualizado);
         res.json(adminAtualizado).status(200);
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

