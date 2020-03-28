const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// usado para que o corpo das requisicões seja aceito em Json
app.use(express.json());
//  usado para permitir o acesso aos recursos por outros domínios (CORS=CROSS ORIGIN RESOURCE SHARING)
app.use(cors());
// usado para que o app utilize a variável routes, que referencia o arquivo ./routes
app.use(routes);
// usado para definir a porta de escuta
app.listen(3333);