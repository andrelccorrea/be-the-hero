const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

// usado para que o corpo das requisicões seja aceito em Json
app.use(express.json());
//  usado para permitir o acesso aos recursos por outros domínios (CORS=CROSS ORIGIN RESOURCE SHARING)
app.use(cors());
// usado para que o app utilize a variável routes, que referencia o arquivo ./routes
app.use(routes);
// usado para validar os erros
app.use(errors());
// exporta módulo app
module.exports = app;