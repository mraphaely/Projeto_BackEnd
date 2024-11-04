import Empresa from "../models/empresaModel.js";
import Curtida from "../models/curtidaModel.js";

export const getEmpresa = async (request, response) => {
    try {
        // 1° Buscar informções da empresa -> tabela_empresa
        // const infoEmpresa = await Empresa.findAll({ raw: true })
        // const infoEmpresa = await Empresa.findOne({ raw: true, where: {id:1} })
        const infoEmpresa = await Empresa.findByPk(1, { raw: true });
        // 2° Contar a quantidade de like da tabela_curtida
        const likes = await Curtida.count({
             where: {
                 tipo_avaliacao: "up", 
                },
        });
        // 3° Contar a quantidade de deslike da tabela_curtida
        const deslikes = await Curtida.count({
             where: {
                 tipo_avaliacao: "down", 
                },
        });
        infoEmpresa.likes = likes
        infoEmpresa.deslikes = deslikes
        response.status(200).json(infoEmpresa);
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao buscar dados da empresa" });
        
    };
};