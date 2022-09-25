function imc(){
    let nome = document.getElementById('nome').value
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resposta = document.getElementById('resposta')

    if(nome !== '' && peso !== '' && altura !== ''){
        const calcIMC = (peso / (altura * altura)).toFixed(2)
        let classificacao = ''

        if(calcIMC < 18){
            classificacao = 'abaixo do peso'
        }else if(calcIMC < 25){
            classificacao = 'com peso Ideal'
        }else if(calcIMC < 30){
            classificacao = 'um pouco acima do peso'
        }else if(calcIMC < 35){
            classificacao = 'Com Obesidade grau I'
        } else if(calcIMC < 40){
            classificacao = 'Com Obesidade grau II'
        }else{
            classificacao = 'Com Obesidade grau III'
        }

        resposta.innerText = `Ola ${nome} seu imc é de ${calcIMC} voce esta ${classificacao}`
    }else{
        alert('Preencha todos os campos')
    }

}



