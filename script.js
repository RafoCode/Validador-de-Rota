const inputCep = document.querySelector("#inputcep");
const resultado = document.querySelector("#resultado");
const submit = document.querySelector("#botao");
const paragrafo = document.querySelector("#texto");

inputCep.addEventListener('keypress', () =>{
//formatando input
    let inputlength = inputCep.value.length
    if(inputlength === 5){
        inputCep.value += '-'
    }
})

//verificando informações
submit.addEventListener('click', () =>{

    let cep = inputCep.value;

    if (cep.length !== 9 ) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(json => {
            const bairro = json.bairro
//| json.bairro.slice(3)== "219"
            rotasInvalidas = fetch('clientes.json')
             .then(response => response.json())
             .then(rotas => {
               if(rotas.bairrosInvalidos.includes(bairro)| json.localidade != "Rio de Janeiro"  ){
                resultado.style.height = '25%'

                paragrafo.innerHTML = `Bairro: ${bairro}<br/>`
                paragrafo.innerHTML += `Logradouro: ${json.
                logradouro}<br/>`
                paragrafo.innerHTML += `Localidade: ${json.localidade}<br/> Não Coberto Pela Rota!`
        
               }else{
                console.log("Pode agendar!")
                paragrafo.innerHTML = `Bairro: ${bairro}<br/>`
                paragrafo.innerHTML += `Logradouro: ${json.
                logradouro}<br/>`
                paragrafo.innerHTML += `Localidade: ${json.localidade}<br/> Pode Agendar!`
                resultado.style.height = '25%'
                console.log(json.bairro)
               }
             })

            })

             
    
});





