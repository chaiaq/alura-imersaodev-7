function adicionarPoster() {
    var posterFilme = document.getElementById("poster").value;
    // DESAFIO GUI: Armazenar também o nome dos filmes;
    var nomeFilme = document.getElementById("nome").value;
  
    // DESAFIO: Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;
    if (listaFilmes.includes(posterFilme)) {
      alert("Este já está na lista!");
    } else {
      if (posterFilme.endsWith("jpg")) {
        // DESAFIO: Criar um campo e um botão para adicionar a imagem diretamente na tela, em vez de adicionar no código.
        listaFilmes.push(posterFilme);
        nomeFilmes.push(nomeFilme);
  
        limpaGaleria();
        mostraGaleria();
      } else {
        alert("Tente uma imagem tipo .jpg");
      }
    }
  }
  
  function mostraGaleria() {
    var divGaleria = document.getElementById("galeriaFilmes");
  
    for (var i = 0; i < listaFilmes.length; i++) {
      divGaleria.innerHTML +=
        '<div class="objetoGaleria"> <img src=' +
        listaFilmes[i] +
        "> <p>" +
        nomeFilmes[i] +
        "</p></div>";
    }
  }
  
  function limpaGaleria() {
    document.getElementById("galeriaFilmes").innerHTML = "";
  }
  
  var listaFilmes = [
    "https://img.elo7.com.br/product/original/2692949/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo09-90x60-cm-o-senhor-dos-aneis-o-retorno-do-rei.jpg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/96/54/43/20474255.jpg",
    "https://img.elo7.com.br/product/original/26925F8/big-poster-filme-rei-leao-1994-lo04-tamanho-90x60-cm-rei-leao-disney.jpg",
    "https://br.web.img3.acsta.net/pictures/17/07/03/23/02/179143.jpg",
    "https://i.pinimg.com/474x/40/bd/e5/40bde5de6d39650da8cb4169a3b709e2.jpg",
  
    "https://uauposters.com.br/media/catalog/product/4/1/411320150509-uau-posters-filmes-interestelar-interestellar.jpg"
  ];
  
  var nomeFilmes = [
    "O Senhor dos Anéis",
    "Entrevista com o Vampiro",
    "O Rei Leão",
    "Como Nossos Pais",
    "Círculo de Fogo",
    "Interestelar"
  ];
  
  mostraGaleria();
  
  // DESAFIO: Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while;
  
  /*
  var i = 0;
  while (i < listaFilmes.length) {
    document.write("<img src=" + listaFilmes[i] + ">");
    i++;
  }
  
  listaFilmes.forEach(function(filme) {
  document.write('<img src=' + filme + '>');
  });
  
  */
  