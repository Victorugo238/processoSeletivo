const sequelize = require("../config/sequelize");
const User = require("../models/users");
const api = require("../config/api");

const controller = {
    //visualizar todos os Usuarios 
    users: async (req,res) =>{
        const userAll = await User.findAll();
        return res.status(201).json({
            products: userAll
        });
     },
     //criar um novo User 
    newUser: async (req,res) => {
        try {
            const {nome,CRM,telefone,celular,cep,especialidade1,especialidade2} = req.body;
            if(!nome || !CRM || !telefone || !celular || !cep || !especialidade1 || !especialidade2){
                return res.status(401).json({
                    message:"preencher todos os campos"
                })
            }
    
            const result = await sequelize.transaction(async(t) => {
                const newProduct = await User.create({
                    nome,
                    CRM,
                    telefone,
                    celular, 
                    cep,
                    especialidade1,
                    especialidade2
                })
            })
            return res.status(401).json({
                message:"User criado com sucesso"    
            })
            
        } catch (error) {
            console.log(error)
        }
    },
    //visualizar um User especifico 
    user: async(req,res) =>{
        try {
            
            const { id } = req.params;
            
            
           
           
           
            const usuario = await User.findOne({
                where: {
                    id: id
                }
            })

            if(!usuario){
                return res.status(401).json({
                    message:"produto não encontrado"
                })
            }
            api.get(`/users/${id}`).then(resultApi => {
                const nameApi = resultApi.data.name;
                return res.status(201).json({
                    produto:{
                        usuario,
                        nameApi
                    }
                })
            })

        } catch (error) {
            console.log(error)
        }
    },
    //deletar um User especifico
    delUser: async (req,res) => {
        try {
            const { id } = req.params;

            const result = await sequelize.transaction(async(t) => {
                const deleteuser = await User.destroy({
                    where:{
                        id
                    }
                })
            })

            return res.status(201).json({
                message:"Produto excluido com sucesso!"
            })
            } catch (error) {
                console.log(error)
            }
        },
    //atualizar um User especifico
    updateUser: async (req,res) =>{
        try {
            const {id} = req.params;
            console.log(id)
            const {nome,CRM,telefone,celular,cep,especialidade1,especialidade2} = req.body;
            const result = await sequelize.transaction(async(t) => {
                const upUser = await User.update({
                    nome,
                    CRM,
                    telefone,
                    celular,
                    cep,
                    especialidade1,
                    especialidade2

                },
                {
                    where:{id}
                })
            })
            
            return res.status(201).json({
                message:"produto atualizado com sucesso"
            })
        } catch (error) {
            console.log(error)
        }


    }
}


module.exports = controller;