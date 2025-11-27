import Comanda from "../model/ComandaModel.js";

async function list(req, res) {
    try {
        const response = await Comanda.findAll();
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar comandas:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function select(req, res) {
    try {
        const id = req.params.id;
        const response = await Comanda.findByPk(id);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function create(req, res) {
    try {
        const response = await Comanda.create(req.body);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao criar comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function update(req, res) {
    try {
        const mesa = req.body.mesa;
        const status = req.body.status;
        const data = req.body.data;
    
        const com_id = req.params.id;
    
        const response = await Comanda.update(
            {mesa, status, data},
            {where: {com_id}}
        );
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao atualizar comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function del(req, res) {
    try {
        const com_id = req.params.id;
        
        const response = await Comanda.destroy({where: {com_id}});
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao deletar comanda:', error);
        res.status(500).json({ erro: error.message });
    }
}

export default {list, select, create, update, del};