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
 
   console.log(`Nome: ${req.body.name}`);
   console.log(`email: ${req.body.email}`);
   console.log(`rg: ${req.body.rg}`);
   console.log(`address: ${req.body.address}`);
   console.log(`pass: ${req.body.password}`);
   
   const { name, email, rg, address, password } = req.body;

  // Validate the required fields
  if (!email || !rg || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new user
  const newUser = new Admin({
    name,
    email,
    rg,
    address,
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
 
   Admin.findOneAndUpdate(
     { nome: nomeAntigo }, // Critério de busca
     { nome: novoNome }, // Valores atualizados
   )
     .then((admAtualizado) => {
       if (admAtualizado) {
         console.log('Dado atualizado com sucesso:', admAtualizado);
         res.json(admAtualizado).status(200);
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

