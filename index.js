$(document).ready(() => {

  var vez = 0;
  // play[0] é o jogador atual.
  var play = [];
  var tabuleiro = [];
  $('#tabuleiro').hide();

  for (let i = 1; i <= 9; i++) {
    // crio nove posições vazias que serão preenchidas com as jogadas.
    tabuleiro[i] = "";

    $("#q" + i).click(() => {

      Jogada($("#q" + i), i);

    })

  }


  function Jogada(posicao, tab) {


    if (vez % 2 == 0) {
      posicao.html(play[0]);
      tabuleiro[tab] = posicao.html();
      $("#play_atual").html(play[1]);

    } else if (vez % 2 == 1) {
      posicao.html(play[1]);
      tabuleiro[tab] = posicao.html();
      $("#play_atual").html(play[0]);
    }
    // desabilito a div quando é clicado(obs: o evento de clique é desabilitado, impedindo de receber valor).
    posicao.off("click");
    ValidarVitoria();
    // console.log('jogador atual: ' + play[0]);
    vez++;

  }

  function ModalVitoria(p) {
    $("#nj").click(()=>{
      window.location.reload();
    })

    $("#modal").show();

    if (p == '<img src="img/x.png" class="h-100 w-100">') {
      p = 'X';
      $("#jv").html(p);
    }

    if (p == '<img src="img/c.png" class="h-100 w-100">') {
      p = 'O';
      $("#jv").html(p);


    }
  }
  // transição para outra tela.
  function Jogar() {
    $('body').css({ 'background-color': 'rgb(10, 121, 106)' }).show();
    $('body').css({ 'background-color': 'rgb(10, 121, 106)' });
    $("#jogador").hide();
    $('#tabuleiro').show();

  }

  function ValidarVitoria() {

    //Linhas
    if (tabuleiro[1] == play[0] && tabuleiro[2] == play[0] && tabuleiro[3] == play[0]) {
      ModalVitoria(play[0]);
    }
    else if (tabuleiro[4] == play[0] && tabuleiro[5] == play[0] && tabuleiro[6] == play[0]) {
      ModalVitoria(play[0]);
    }
    else if (tabuleiro[7] == play[0] && tabuleiro[8] == play[0] && tabuleiro[9] == play[0]) {
      ModalVitoria(play[0]);
    }

    // Colunas
    else if (tabuleiro[1] == play[0] && tabuleiro[4] == play[0] && tabuleiro[7] == play[0]) {
      ModalVitoria(play[0]);
    }

    else if (tabuleiro[2] == play[0] && tabuleiro[5] == play[0] && tabuleiro[8] == play[0]) {
      ModalVitoria(play[0]);
    }

    else if (tabuleiro[3] == play[0] && tabuleiro[6] == play[0] && tabuleiro[9] == play[0]) {
      ModalVitoria(play[0]);
    }

    // Diagonal
    else if (tabuleiro[1] == play[0] && tabuleiro[5] == play[0] && tabuleiro[9] == play[0]) {
      ModalVitoria(play[0]);
    }

    else if (tabuleiro[3] == play[0] && tabuleiro[5] == play[0] && tabuleiro[7] == play[0]) {
      ModalVitoria(play[0]);
    }

    // -----
    if (tabuleiro[1] == play[1] && tabuleiro[2] == play[1] && tabuleiro[3] == play[1]) {
      ModalVitoria(play[1]);
    }
    if (tabuleiro[4] == play[1] && tabuleiro[5] == play[1] && tabuleiro[6] == play[1]) {
      ModalVitoria(play[1]);
    }
    if (tabuleiro[7] == play[1] && tabuleiro[8] == play[1] && tabuleiro[9] == play[1]) {
      ModalVitoria(play[1]);
    }

    // Colunas
    if (tabuleiro[1] == play[1] && tabuleiro[4] == play[1] && tabuleiro[7] == play[1]) {
      ModalVitoria(play[1]);
    }

    if (tabuleiro[2] == play[1] && tabuleiro[5] == play[1] && tabuleiro[8] == play[1]) {
      ModalVitoria(play[1]);
    }

    if (tabuleiro[3] == play[1] && tabuleiro[6] == play[1] && tabuleiro[9] == play[1]) {
      ModalVitoria(play[1]);
    }

    // Diagonal
    if (tabuleiro[1] == play[1] && tabuleiro[5] == play[1] && tabuleiro[9] == play[1]) {
      ModalVitoria(play[1]);
    }

    if (tabuleiro[3] == play[1] && tabuleiro[5] == play[1] && tabuleiro[7] == play[1]) {
      ModalVitoria(play[1]);
    }


  }

  // define o jogador
  $("#play-X").click(() => {
    play[0] = '<img src="img/x.png" class="h-100 w-100">';
    play[1] = '<img src="img/c.png" class="h-100 w-100">';
    $("#play_atual").html(play[0]);
    Jogar();
  })

  $("#play-O").click(() => {
    play[0] = '<img src="img/c.png" class="h-100 w-100">';
    play[1] = '<img src="img/x.png" class="h-100 w-100">';
    $("#play_atual").html(play[1]);
    Jogar();
  })

})

