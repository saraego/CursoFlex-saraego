const path = require('path')
const axios = require('axios')
let pessoas = []
let alerta = false

class PessoasControler{
   
    static index(req,res){ 
        if(pessoas.length > 0){
            alerta = false
        }else{
            alerta = true
        }
        res.render('index',{
            pessoas:pessoas,
            alerta:alerta
        })
    }
    static cadastro(req,res){
        res.render('cadastro')
    }
    static salvar(req,res){
        console.log(req.body);
        pessoas.push(req.body)
        res.redirect('/')
    }

    static async buscarcep(req,res){

        let cep = '69053060'

        let rota = process.env.API_BASE+''+cep+'/json/'
       
        
     let endereco = await axios.get(rota)
        .then(function(res){
            console.log(res.data);
            return res.data
        })
        .catch(function(error){
            return error
        })
       

        res.render('endereco',{
            endereco:endereco
        })
    }

   
}

module.exports = PessoasControler