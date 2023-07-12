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

exports.getOneById = (req, res) => {
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
   const id = req.params.id;
   const payload = req.body;

   console.log(`id: ${id} payload: ${payload}`);

   if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid resource ID' });
   }

   Admin.findByIdAndUpdate(id, payload, { new: true })
      .then(updatedResource => {
         if (!updatedResource) {
         return res.status(404).json({ error: 'Resource not found' });
         }

         const response = {
         message: `Resource with ID ${id} updated successfully`,
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

