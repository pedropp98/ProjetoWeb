'use strict';

const { response } = require('express');
const Admin = require('../Models/AdminModel');

exports.get = (req, res, next) => {
   console.log(`Requisicao: ${req.body}`);

   Admin.find()
      .then((products) => {
         console.log(`Resposta: ${products}`);
         res.json(products).status(200);
      })
      .catch((error) => {
         console.log(`Busca por ${Admin} nao funcionou: ${error}`);
      });
};


// const axios = require('axios');

// axios.get('http://localhost:3000/')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
