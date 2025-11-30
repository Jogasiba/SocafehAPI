import itensPedidos from "./controller/ItensPedidosController.js";
import comanda from "./controller/ComandaController.js";
import usuario from "./controller/UsuarioController.js";
import { autenticarToken } from "./global/auth.js";
import pedido from "./controller/PedidoController.js";
import item from "./controller/ItemController.js";
import banco   from "./banco.js";
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

try {
    await banco.authenticate();
    console.log('Conexão realizada com sucesso!');
} catch (error) {
    console.error('Erro ao conectar banco de dados:', error);
}

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get('/usuario', autenticarToken, usuario.list);
app.post('/usuario', autenticarToken, usuario.create);
app.get("/usuario/:id", autenticarToken, usuario.select);
app.put('/usuario/:id', autenticarToken, usuario.update);
app.delete('/usuario/:id', autenticarToken, usuario.del);
app.get('/login/:login/:senha', usuario.login);

app.get('/pedido', autenticarToken, pedido.list);
app.post('/pedido', autenticarToken, pedido.create);
app.get('/pedido/:id', autenticarToken, pedido.select);
app.put('/pedido/:id', autenticarToken, pedido.update);
app.delete('/pedido/:id', autenticarToken, pedido.del);
app.get('/buscarComanda/:id', autenticarToken, pedido.buscarComanda);
app.get('/buscarPedidoPorComanda/:id', autenticarToken, pedido.buscarPedidoPorComanda);
app.get('/calculaTotal/:id', autenticarToken, pedido.calculaTotal);

app.get('/itensPedidos', autenticarToken, itensPedidos.list);
app.post('/itensPedidos', autenticarToken, itensPedidos.create);
app.get('/itensPedidos/:id', autenticarToken, itensPedidos.select);
app.put('/itensPedidos/:id', autenticarToken, itensPedidos.update);
app.delete('/itensPedidos/:item/:pedido', autenticarToken, itensPedidos.del);
app.get('/itemLivre/:id', autenticarToken, itensPedidos.selectItem);

app.get('/item', autenticarToken, item.list);
app.post('/item', autenticarToken, item.create);
app.get('/item/:id', autenticarToken, item.select);
app.put('/item/:id', autenticarToken, item.update);
app.delete('/item/:id', autenticarToken, item.del);

app.get('/comanda', autenticarToken, comanda.list);
app.post('/comanda', autenticarToken, comanda.create);
app.get('/comanda/:id', autenticarToken, comanda.select);
app.put('/comanda/:id', autenticarToken, comanda.update);
app.delete('/comanda/:id', autenticarToken, comanda.del);

app.listen(5000, () => {console.log('Servidor Aberto!')});