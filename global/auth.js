import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export function autenticarToken(req, res, next) {
	const authHeader = req.headers["authorization"] || req.get("Authorization");
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) 
		return res.status(401).json({ erro: "Token ausente" });

	jwt.verify(token, process.env.API_KEY, (erro, user) => {
		if (erro) 
			return res.status(403).json({ erro: "Token inválido" });
		req.user = user;
		next();
	});
};