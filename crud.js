let btnAdicionar = document.querySelector('.btnAdicionar')
let inputTarefa = document.querySelector('.inputTarefa')
let btnUnidade = document.querySelector('.btnUnidade')
let btnBackspace = document.querySelector('.backspace')



btnUnidade.textContent = "Unid."
let div = Array.from(document.querySelectorAll(".letra"))

div.forEach( (item) => {
    item.addEventListener("click", adicionarletra)
})

btnBackspace.addEventListener("click", backspace)
inputTarefa.addEventListener("focus", mudarTela)
btnAdicionar.addEventListener("click", inserirDados)
btnAdicionar.addEventListener("click", mudarTela)
btnUnidade.addEventListener("click", trocaUnidade)

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

    let inputQTD = document.querySelector('.inputQtd')
    let qtd = document.createElement("h1")
    qtd.classList.add("qtd")
    qtd.textContent = inputQTD.value + " " +btnUnidade.textContent

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
window.onload(mudarTela())

function mudarTela(){
    let tecladoLetras = document.querySelector(".tecladoLetras")
    let header = document.querySelector("header")
    let main = document.querySelector("main")
    let btnUnidade = document.querySelector('.btnUnidade')
    let inputQtd = document.querySelector('.inputQtd')
    


    btnAdicionar.classList.toggle("esconder")
    btnUnidade.classList.toggle("esconder")
    header.classList.toggle("esconder")
    main.classList.toggle("esconder")
    inputQtd.classList.toggle("esconder")
    inputTarefa.classList.toggle("esconder")

    tecladoLetras.classList.toggle("esconder")
    
}


function adicionarletra (){
    for(let i = 0; i <= div.length; i++){
        if(this.textContent == this.textContent){
            return document.querySelector("h1").textContent += this.textContent
        } 
    }
}


function backspace (){
    document.querySelector(".inputTarefa").textContent =""
}

/*
function sugestao (){
    alert("lista")
}
*/