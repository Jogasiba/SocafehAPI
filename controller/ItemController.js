import Item from "../model/ItemModel.js";

async function list(req, res) {
    try {
        const response = await Item.findAll();
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar itens:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function select(req, res) {
    try {
        const id = req.params.id;
        const response = await Item.findByPk(id);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao listar item:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function create(req, res) {
    try{
        const response = await Item.create(req.body);
        res.json(response);
    }
    catch (error) {
        console.error('Erro ao criar item:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function update(req, res) {
    try {
        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const preco = req.body.preco;
        const categoria = req.body.categoria;
    
        const ite_id = req.params.id;

        console.log(req.body);
    
        const response = await Item.update(
            {nome, descricao, preco, categoria},
            {where: {ite_id}}
        );
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao atualizar item:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function del(req, res) {
    try {
        const ite_id = req.params.id;
        
        const response = await Item.destroy({where: {ite_id}});
        res.json(`Linhas alteradas: ${response}`);
    }
    catch (error) {
        console.error('Erro ao deletar item:', error);
        res.status(500).json({ erro: error.message });
    }
}

export default {list, select, create, update, del};