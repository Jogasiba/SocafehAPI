import AsyncStorage from '@react-native-async-storage/async-storage';
import Usuarios from "../model/UsuariosModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

async function list(req, res) {
    try {
        const response = await Usuarios.findAll();
        res.json(response);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function select(req, res) {
    try {
        const id = req.params.id;
        const response = await Usuarios.findByPk(id);
        res.json(response);
    } catch (error) {
        console.error('Erro ao listar usuário:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function create(req, res) {
    try {
        const response = await Usuarios.create(req.body);
        res.json(response);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function update(req, res) {
    try {
        const nome = req.body.nome;
        const login = req.body.login;
        const senha = req.body.senha;
        const cargo = req.body.cargo;

        const usu_id = req.params.id;

        const response = await Usuarios.update(
            { nome, login, senha, cargo },
            { where: { usu_id } }
        );
        res.json(`Linhas alteradas: ${response}`);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function del(req, res) {
    try {
        const usu_id = req.params.id;
        const response = await Usuarios.destroy({ where: { usu_id } });
        res.json(`Linhas alteradas: ${response}`);
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function definirSenha(req, res) {
    try {
        var senha = req.body.senha;

        const usu_id = req.params.id;

        if (!usu_id) {
            res.status(422).send('Código de Usuário obrigatório!')
        }

        const usuario = await Usuarios.findByPk(usu_id);
        if (!usuario) {
            res.status(404).send('Usuário não encontrado!')
        }

        if (!(senha.toString().length >= 6 && senha.toString().length <= 20)) {
            res.status(422).send('A senha deve conter no mínimo 6 caracteres e no máximo 20!')
        }

        senha = await bcrypt.hash(senha, 10)
        const response = await Usuarios.update(
            { senha },
            { where: { usu_id } }
        );

        res.json(`Linhas alteradas: ${response}`)
    } catch (error) {
        console.error('Erro ao definir senha:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function verificaLogin(login, senha) {
    try {
        const response = await Usuarios.findOne({ where: { login, senha } });

        return response ? 200 : 401
    } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        res.status(500).json({ erro: error.message });
    }
}

async function login(req, res){
    try {
        const { login, senha } = req.params;

        console.log(login, senha);

        const status = await verificaLogin(login, senha);
        res.status(status)

        if (status == 200){
            const token = jwt.sign({ login }, process.env.API_KEY, { expiresIn: "1h" });
            return res.json({ token });
        }
        
        res.json()
    }
    catch (error) {
        console.error('Erro ao logar:', error);
        res.status(500).json({ erro: error.message });
    }
}

export default { list, select, create, update, del, definirSenha, login };