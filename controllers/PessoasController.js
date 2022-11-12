const { Pessoa } = require('../models')
const axios = require('axios')
let pessoas = []
let alerta = false

class PessoasController {

    static async index (req,res)
    {
        const pessoas = await Pessoa.findAll({raw:true})
        console.log(pessoas)

        res.render('index',{
            pessoas:pessoas
        })

    }
    static async create(req, res) {
        const pessoa = await Pessoa.create({
            nome: "Maria Pereira da Silva",
            email: "maria@maria.com",
            data_nascimento: new Date('1980-12-24')
        })
        res.render('pessoa/index')
        res.redirect('/')
    }
    // static index(req,res)
    // {
    //     if(pessoas.length> 0){

    //         alerta = false

    //     } else{

    //         alerta = true
    //     }


    //     res.render('index',{
    //         pessoas:pessoas,
    //         alerta:alerta
    //     })
    // }

    // static cadastro(req, res)
    // {
    //     res.render('cadastro')
    // }

    // static salvar(req, res)
    // {
    //     pessoas.push(req.body)
    //     res.redirect('/')
    // }

    // static async buscacep(req, res)
    // {
    //     let cep = '69090312'
    //     let rota = process.env.API_BASE + '' + cep + '/json/'

    //     let endereco = await axios.get(rota)
    //       .then(function (response) {
    //         return response.data;
    //       })
    //       .catch(function (error) {
    //         return error;
    //       })

    //     res.render('endereco', {
    //         endereco:endereco
    // })  

    // }
}


 module.exports = PessoasController