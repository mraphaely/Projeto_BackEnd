import { literal } from "sequelize";
import Publicacao from "../models/publicacaoModel.js";

export const getAll = async (request, response) => {
    try {
        // 1° buscar informações de publicações
        const publicacao = await Publicacao.findAll({
            raw: true,
            attributes: [
                'id',
                'titulo',
                'local',
                'cidade',
                'imagem',
                //Add Likes
                [literal(`(
                    SELECT COUNT(*) FROM curtidas
                    WHERE publicacoes_id = Publicacoes.id
                    AND curtidas.tipo_avaliacao = 'up'
                )`),
            'Total Likes',
        ],
        // [literal(`()`), "Total Deslikes"],
        // [literal(`()`), "Total Comentarios"],
            ],
        });
        response.status(200).json(publicacao)
    } catch (error) {
        console.log(error)
        response.status(500).json({ err: "Erro"})
        
    }
    // 2° buscar likes individualmente
    // 3° buscar deslikes individualmente
    // 4° buscar comentários individualmente
};