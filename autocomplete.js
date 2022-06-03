function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      let main = document.querySelector("body")
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      main.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = [
  "Abacate","Açaí","Acerola","Ameixa","Amora","Acerola","Amêndoa","Araçá","Araticum","Avelã","Abacaxi",
  "Abóbora","Acelga","Agrião","Alcachofra","Alface","Alho-poró","Almeirão","Aspargo","Alho",
  "Babaco","Babaçu","Bacaba","Bacuri","Bacupari","Banana","Baru","Bergamota","Biribá","Buriti","Butiá",
  "Batata","Berinjela","Bertalha","Beterraba","Brócolis","Broto","Bardana",
  "Cacau","Caju","Castanha-do-pará","Cereja","Ciriguela","Coco","Cranberry","Cupuaçu","Caqui",
  "Cará","Cebola","Cenoura","Chicória","Chuchu","Couve","Couve de Bruxelas","Couve-Flor",
  "Damasco","Dekopon","Dendê","Dióspiro","Dovyalis","Durião",
  "Embaúba","Embaubarana","Engkala","Escropari","Esfregadinha",
  "Ervilha","Escarola","Espinafre",
  "Figo","Framboesa","Fruta-do-conde","Fruta-pão","Feijoa","Figo-da-índia","Fruta-de-cedro","Fruta-de-lobo","Fruta-do-milagre","Fruta-de-tatu",
  "Fava","Feijão","Grão-de-Bico",
  "Gabiroba","Glicosmis","Goiaba","Granadilla","Gravatá","Graviola","Groselha","Grumixama","Guabiju","Guabiroba","Guaraná",
  "Hawthorn","Heisteria","Hilocéreo",
  "Ibacurupari","Ilama","Imbe","Imbu","Inajá","Ingá","Inharé",
  "Inhame",
  "Jabuticaba","Jaca","Jambo","Jambolão","Jamelão","Jaracatiá","Jatobá","Jenipapo","Jerivá","Juá","Jujuba",
  "Jiló",
  "Kiwi","Kumquat","Kinkan","Kino","Kiwano","Kabosu","Karité",
  "Laranja","Limão","Lima","Lichia","Longan","Lucuma","Lacucha","Lulo","Lobeira","Langsat","Laranja-de-pacu",
  "Lentilha",
  "Mabolo","Maçã","Mamão","Manga","Maracujá","Melancia","Melão","Mexerica","Mirtilo","Morango","Massala","Marmelo","Moranga",
  "Mandioca","Maxixe","Milho Verde","Mostarda",
  "Naranjilla","Nectarina","Nêspera","Noni","Noz","Noz-pecã","Noz-macadâmia",
  "Nabo",
  "Oiti","Oxicoco","Orangelo",
  "Pera","Pêssego","Pitanga","Pinha","Pitaia","Pitomba","Pequi","Pistache","Pixirica","Pajurá","Patauá","Puçá","Pupunha",
  "Palmito","Pepino","Pimentão",
  "Quina", "Quiuí",
  "Quiabo",
  "Romã","Rambai","Rambutão","Rukam",
  "Rabanete","Raiz Forte","Repolho","Rúcula",
  "Saguaraji","Salak","Santol","Sapota","Sapoti","Sapucaia","Saputá","Seriguela","Sorvinha",
  "Salsa","Salsão",
  "Tangerina","Tamarindo","Tâmara","Toranja","Tucumã","Taiuva","Tapiá","Tarumã","Tangor","Tucujá",
  "Taioba","Tomate",
  "Uva","Umbu","Uvaia","Uchuva","Umê","Uxi",
  "Vacínio","Veludo","Vergamota",
  "Vagem",
  "Wampi",
  "Xixá",
  "Yamamomo","Yuzu",
  "Zimbro",

  "Achocolatado", "Acucar","Adoçante","Arroz","Atum","Azeite","Azeitona",
  "Batata Palha","Baunilha","Biscoito","Bombom",
  "Café","Caldo","Catchup","Cereal","Chá","Champignon","Chocolate","Chocolate Granulado","Coco Ralado","Creme de Leite",
  "Farinha de Mandioca","Farinha de Trigo","Farinha de milho","Farinha de Rosca","Feijão","Fermento",
  "Gelatina","Geleia",
  "Leite","Leite Condensado","Leite de Coco","Lentilha",
  "Macarrão","Maionese","Molho","Mostarda",
  "Polpa de Tomate","Polvilho",
  "Sagu","Sal","Sal Grosso","Salsicha","Sardinha","Sopa",
  "Tempero",

  "Refrigerante","Agua com Gás","Agua Mineral","Vinho","Cerveja","Espumante","Suco"












  
  ];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);
