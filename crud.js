
let btnAdicionar = document.querySelector('.btnAdicionar')
let inputTarefa = document.querySelector('.inputTarefa')
let btnUnidade = document.querySelector('.btnUnidade')
btnUnidade.textContent = "Unid."




inputTarefa.addEventListener("focus", mudarTela)
btnAdicionar.addEventListener("click", inserirDados)
btnAdicionar.addEventListener("click", mudarTela)
btnUnidade.addEventListener("click", trocaUnidade)

let quantidade = 0

function inserirDados (){
    if(document.querySelector(".inputTarefa").value == ""){
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
    li.textContent = document.querySelector(".inputTarefa").value

    
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
    let header = document.querySelector("header")
    let main = document.querySelector("main")

    btnAdicionar.classList.toggle("esconder")
    btnUnidade.classList.toggle("esconder")
    header.classList.toggle("esconder")
    main.classList.toggle("esconder")
    
}
/*
function sugestao (){
    alert("lista")
}
*/