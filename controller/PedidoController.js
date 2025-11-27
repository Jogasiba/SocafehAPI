import Pedido from "../model/PedidoModel.js";
import Comanda from "../model/ComandaModel.js";
import sequelize from "../banco.js";

async function list(req, res) {
    try {
        const response = await Pedido.findAll();
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar pedidos:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function select(req, res) {
    try {
        const id = req.params.id;
        const response = await Pedido.findByPk(id);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function create(req, res) {
    try {
        const response = await Pedido.create(req.body);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function update(req, res) {
    try {
        const status = req.params.status;
        const com_id = req.params.com_id;

        const ped_id = req.params.id;

        const response = await Pedido.update(
            { status, com_id },
            { where: { ped_id } }
        );
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function del(req, res) {
    try {
        const ped_id = req.params.id;

        const response = await Pedido.destroy({ where: { ped_id } });
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao deletar pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function buscarPedidoPorComanda(req, res) {
    try {
        const com_id = req.params.id;
        const response = await Pedido.findAll({ where: { com_id } });
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao buscar pedido por comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function buscarComanda(req, res) {
    try {
        const com_id = req.params.id;
        const response = await Comanda.findByPk(com_id);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao buscar comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function calculaTotal(req, res) {
    const ped_id = req.params.id;
    try {
        let total = await sequelize.query(`SELECT * FROM fkg_retorna_valores(${ped_id})`);
        res.json(total[0][0].fkg_retorna_valores);
    }
    catch (error) {
        console.error('Erro ao calcular total do pedido:', error);
        throw error;
    }
}

export default { list, select, create, update, del, buscarComanda, buscarPedidoPorComanda, calculaTotal };