
let inputTarefa = document.querySelector('.inputTarefa')
let btnUnidade = document.querySelector('.btnUnidade')
let btnBackspace = document.querySelector('.backspace')
let btnBackspace2 = document.querySelector('.backspace2')
let inputQTD = document.querySelector(".inputNum")
let abrirFechar = document.querySelector('.abrirFechar')
let btnAdicionar = document.querySelector('.btnAdicionar')
let spacebar = document.querySelector('.spacebar')






btnUnidade.textContent = "Unid."
let div = Array.from(document.querySelectorAll(".letra"))
let div2 = Array.from(document.querySelectorAll(".numero"))

div.forEach( (item) => {
    item.addEventListener("click", adicionarletra)
})
div2.forEach( (item) => {
    item.addEventListener("click", adicionarnumero)
})


spacebar.addEventListener("click", espaco)
inputTarefa.addEventListener("click", abrirTela)
abrirFechar.addEventListener("click", fecharTela)
inputQTD.addEventListener("focus", mudarTecladoNumerico)
btnBackspace.addEventListener("click", backspace)
btnBackspace2.addEventListener("click", backspace2)
btnAdicionar.addEventListener("click", inserirDados)
btnUnidade.addEventListener("click", trocaUnidade)
btnAdicionar.addEventListener("click", limparTeclado)

let quantidade = 0

function inserirDados (){
    if(document.querySelector(".inputTarefa").textContent == ""){
        let aviso = document.querySelector("p")
        let main = document.querySelector("header")
        aviso.textContent = "Por favor, insira um valor para continuar"
        aviso.style.color = "red"
        return main.append(aviso)
    } 

    let aviso = document.querySelectorAll('p')
    aviso.forEach( (teste)=> {
        teste.textContent = ""
    })

    let inputQTD = document.querySelector('.inputNum')
    let qtd = document.createElement("h1")
    qtd.classList.add("qtd")
    qtd.textContent = inputQTD.textContent + " " +btnUnidade.textContent

    let span = document.createElement("span")
    span.innerHTML = "<span>&#10003;</span>"


    let btnRemover = document.createElement("button")
    btnRemover.classList.add("btnRemover")
    btnRemover.textContent = "Remover"

    let spanRemove = document.createElement("span")
    
    btnRemover.append(spanRemove)

    let ul = document.querySelector("ul")

    let li = document.createElement("li")
    li.textContent = document.querySelector(".inputTarefa").textContent

    
    let list = Array.from(document.querySelectorAll("li"))

    li.addEventListener("click", function(item) {
        li.classList.toggle("selecionado")
        span.classList.toggle("span")
    })
    btnRemover.addEventListener("click", function () {
        
    for (let i = 0; i <= list.length; i++){
        if(li.textContent == li.textContent){
            return li.remove()
        } 
        }
    })        
    li.append(span)
    li.append(btnRemover)
    btnRemover.append(qtd)
    ul.append(li)
}


let click = 0
function trocaUnidade (){
    click++
    if(click == 1 ){
        btnUnidade.textContent = "kg"
        
    } else if (click == 2){
        
        btnUnidade.textContent = "g"
    }else{
        
        click = 0
        btnUnidade.textContent = "Unid."
    }

}
window.onload(fecharTela())

function abrirTela(){
    let header = document.querySelector("header")
    let main = document.querySelector("main")
    let btnUnidade = document.querySelector('.btnUnidade')
    let inputQtd = document.querySelector('.inputNum')
    let tecladoLetras = document.querySelector(".tecladoLetras")
    let tecladoNumerico = document.querySelector(".tecladoNumerico")
    let abrirFechar = document.querySelector(".abrirFechar")
    abrirFechar.classList.remove("esconder")
    tecladoLetras.classList.remove("esconder")
    tecladoNumerico.classList.add("esconder")
    let p = document.querySelector("p")
   
    btnAdicionar.classList.remove("esconder")
    btnUnidade.classList.remove("esconder")
    header.classList.remove("esconder")
    main.classList.remove("esconder")
    inputQtd.classList.remove("esconder")
    inputTarefa.classList.remove("esconder")
    p.classList.add("esconder")
    
}

function fecharTela(){
    let header = document.querySelector("header")
    let main = document.querySelector("main")
    let btnUnidade = document.querySelector('.btnUnidade')
    let inputQtd = document.querySelector('.inputNum')
    let tecladoLetras = document.querySelector(".tecladoLetras")
    let tecladoNumerico = document.querySelector(".tecladoNumerico")
    let abrirFechar = document.querySelector(".abrirFechar")
    abrirFechar.classList.add("esconder")
    tecladoLetras.classList.add("esconder")
    tecladoNumerico.classList.add("esconder")
    let p = document.querySelector("p")
    

    btnAdicionar.classList.add("esconder")
    btnUnidade.classList.add("esconder")
    header.classList.add("esconder")
    main.classList.add("esconder")
    inputQtd.classList.add("esconder")
    inputTarefa.classList.add("esconder")
    inputQtd.textContent = ""
    inputTarefa.textContent = ""
    p.classList.remove("esconder")
    p.textContent = "Digite aqui..."
    
}


function adicionarletra (){
    for(let i = 0; i <= div.length; i++){
        if(this.textContent == this.textContent){
            return document.querySelector("h1").textContent += this.textContent
        } 
    }
}

function adicionarnumero (){
    for(let i = 0; i <= div2.length; i++){
        if(this.textContent == this.textContent){
            return document.querySelector("h2").textContent += this.textContent
        } 
    }
}

function backspace (){
    let textoTarefa = document.querySelector(".inputTarefa").textContent
    let texto = textoTarefa.slice(0,-1);
    document.querySelector(".inputTarefa").textContent = texto
}


function backspace2 (){
    let inputQtd = document.querySelector(".inputNum").textContent
    let qtd = inputQtd.slice(0,-1);
    document.querySelector(".inputNum").textContent = qtd
}



function mudarTeclado(){
    let tecladoLetras = document.querySelector(".tecladoLetras")
    let tecladoNumerico = document.querySelector(".tecladoNumerico")
    tecladoLetras.classList.remove("esconder")
    tecladoNumerico.classList.add("esconder") 
}

function mudarTecladoNumerico(){
    let tecladoLetras = document.querySelector(".tecladoLetras")
    let tecladoNumerico = document.querySelector(".tecladoNumerico")
    tecladoLetras.classList.add("esconder")
    tecladoNumerico.classList.remove("esconder") 
}

function limparTeclado (){
    document.querySelector('.inputNum').textContent = 1
    document.querySelector(".inputTarefa").textContent =""
    

}
function espaco(){
    document.querySelector(".inputTarefa").textContent +=" "

}

/*
function sugestao (){
    alert("lista")
}


*/