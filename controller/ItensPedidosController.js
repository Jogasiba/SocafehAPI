import ItensPedidos from "../model/ItensPedidosModel.js";

async function list(req, res) {
    try {
        const response = await ItensPedidos.findAll();
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar itens_pedidos:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function select(req, res) {
    try {
        const ped_id = req.params.id;
        const response = await ItensPedidos.findAll({ where: { ped_id } });
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar item_pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function selectItem(req, res) {
    try {
        const ite_id = req.params.id;
        const response = await ItensPedidos.findAll({ where: { ite_id } });
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar item_pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function create(req, res) {
    try {
        const response = await ItensPedidos.create(req.body);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao criar item_pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function update(req, res) {
    try {
        const ped_id = req.params.ped_id;
        const ite_id = req.params.ite_id;
    
        const response = await ItensPedidos.update(
            { ped_id, ite_id },
            { where: { ped_id, ite_id } }
        );
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao atualizar item_pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function del(req, res) {
    try {
        const ite_id = req.params.item;
        const ped_id = req.params.pedido;
        
        const response = await ItensPedidos.destroy({where: {ite_id, ped_id}});
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao deletar item de pedido:', error);
        res.status(500).json({ erro: error.message });
    }
}

export default { list, select, create, update, selectItem, del };