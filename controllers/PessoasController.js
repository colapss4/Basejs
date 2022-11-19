const { Pessoa,Telefone } = require('../models')
const axios = require('axios')
const telefone = require('../models/telefone')
let pessoas = []
let alerta = false

class PessoasController {

    static async index (req,res)
    {
        try {
            const pessoas = await Pessoa.findAll({include:'telefones'})
            console.log(pessoas[0].telefones)
    
            res.render('index',{
                pessoas:pessoas
            })    
        } catch (error) {
            console.log(error.message)
        }

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

    static cadastro(req, res)
    {
        res.render('cadastro')
    }

    static  async salvar(req, res)
    {
        try {
            const pessoa = await Pessoa.create({
                nome: req.body.nome,
                cep: req.body.cep,
                email: req.body.email,
                data_nascimento: req.body.data_nascimento
            })
            if(pessoa)
            {
                await Telefone.create({
                    numero: req.body.numero,
                    pessoaId: pessoa.id
                })
            }
        } catch (error) {

            console.log(error.message)
            res.redirect('/')
        } 
        res.redirect('/')
    }

    static async buscacep(req, res)
    {
        let cep = '69090312'
        let rota = process.env.API_BASE + '' + cep + '/json/'

        let endereco = await axios.get(rota)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            return error;
          })

        res.render('endereco', {
            endereco:endereco
    })  

    }

    static async show(req,res)
    {
      const pessoa = await Pessoa.findByPk(req.params.id)
    //   const pessoa02 = await Pessoas.findOne({
    //        where:{
    //         nome: 'Teste'
    //        }
    //   })
      console.log(pessoa)
    }

    static async update(req,res)
    {
        try {
            const pessoa = await Pessoa.findByPk(req.params.id)
            pessoa.nome = 'Novo Aluno'
            pessoa.save()

            res.redirect('/')
        } catch (error) {
            
        }
    }

    static async deletar (req,res)
    {
      try {
        const pessoa = await Pessoa.findByPk(req.params.id)
        pessoa.destroy()
        res.redirect('/')

      } catch (error) {
        console.log(error.message)
      }
    }

}

 module.exports = PessoasController