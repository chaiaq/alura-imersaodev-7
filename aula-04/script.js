function adicionarFilme() {
    var posterFilme = document.getElementById("poster").value;
    // DESAFIO: Adicionar não apenas a imagem do filme, mas também o nome por meio de outro input;
    var nomeFilme = document.getElementById("nome").value;
    // DESFIO: Ao clicar no poster ser redirecionado para o link do trailer;
    var linkTrailer = document.getElementById("trailer").value;
  
    if (listaFilmes.includes(posterFilme)) {
      alert("Este já está na lista!");
    } else {
      if (posterFilme.endsWith("jpg")) {
        listaFilmes.push(posterFilme);
        listaNomeFilmes.push(nomeFilme);
        listaTrailer.push(linkTrailer);
  
        document.getElementById("poster").value = "";
        document.getElementById("nome").value = "";
        document.getElementById("trailer").value = "";
  
        limpaGaleria();
        mostraGaleria();
      } else {
        alert("Tente uma imagem tipo .jpg");
      }
    }
  }
  
  function mostraGaleria() {
    var divGaleria = document.getElementById("listaFilmes");
  
    for (var i = 0; i < listaFilmes.length; i++) {
      divGaleria.innerHTML +=
        '<div class="objetoGaleria"><a href=' +
        listaTrailer[i] +
        "><img src=" +
        listaFilmes[i] +
        "></a> <p>" +
        listaNomeFilmes[i] +
        "</p></div>";
    }
  }
  
  function limpaGaleria() {
    document.getElementById("listaFilmes").innerHTML = "";
  }
  
  // DESAFIO: Criar um botão para remover um filme na tela;
  function removerFilme() {
    listaFilmes.pop();
    listaNomeFilmes.pop();
    listaTrailer.pop();
  
    limpaGaleria();
    mostraGaleria();
  }
  
  var listaFilmes = [];
  
  var listaNomeFilmes = [];
  
  var listaTrailer = [];
  
  mostraGaleria();
  