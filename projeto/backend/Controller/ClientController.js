'use strict';

const Client = require('../Models/ClientModel');

exports.get = (req, res) => {
   console.log(`Requisicao GET: ${req.body}`);

   Client.find()
      .then((products) => {
         console.log(`Resposta: ${products}`);
         res.json(products).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Client} nao funcionou: ${error}`);
      });
};

exports.post = (req, res) => {
   console.log(`Requisicao POST: ${req.body}`);
 
   console.log(`Nome: ${req.body.nome}`);
   
   const { nome, email, rg, senha, endereco, password } = req.body;

  // Validate the required fields
  if (!email || !rg || !senha || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new user
  const newUser = new User({
    nome,
    email,
    rg,
    senha,
    endereco,
    password,
  });

 
  newUser.save()
      .then((response) => {
         console.log(`Resposta: ${response}`);
         res.json(response).status(200);
      })
      .catch((error) => {
         console.log(`Cadastro de: ${newUser} nao funcionou: ${error}`);
      });
};

exports.put = (req, res) => {
   const nomeAntigo = req.body.nomeAntigo; // Nome antigo a ser buscado
   const novoNome = req.body.novoNome; // Novo nome para atualização
 
   Client.findOneAndUpdate(
     { nome: nomeAntigo }, // Critério de busca
     { nome: novoNome }, // Valores atualizados
   )
     .then((clientAtualizado) => {
       if (clientAtualizado) {
         console.log('Dado atualizado com sucesso:', clientAtualizado);
         res.json(clientAtualizado).status(200);
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
   Client.findOneAndDelete({})
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

