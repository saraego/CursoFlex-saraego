
import fetch from 'node-fetch'


async function pegarCep(){
    try {
        const resultado = await fetch(`http://viacep.com.br/ws/6908714622a/json/`)
        const resultadoJson = await resultado.json()
        console.log(resultadoJson); 
    } catch (error) {
        console.log("Erro URL invalida", error.message);
    }
    
}

async function inicio(){
    await console.log("inicio");
    await pegarCep()
    await console.log("fim");
}

inicio()