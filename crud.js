
let btnAdicionar = document.querySelector('.btnAdicionar')

btnAdicionar.addEventListener("click", inserirDados)

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
    ul.append(li)
}


/*
function sugestao (){
    alert("lista")
}
*/