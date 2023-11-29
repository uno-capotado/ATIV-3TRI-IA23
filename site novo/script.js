document.addEventListener('DOMContentLoaded', function () {
  // Função para exibir o diálogo correspondente
  function exibirDialog(nome) {
      var dialog = document.getElementById('dialog' + nome);
      if (dialog) {
          dialog.style.display = 'block';
      }
  }


  
  // Função para fechar o diálogo
  function fecharDialog(nome) {
      var dialog = document.getElementById('dialog' + nome);
      if (dialog) {
          dialog.style.display = 'none';
      }
  }

  // Adiciona evento de clique para Nana Osaki
  document.querySelector('.nanaosaki').addEventListener('click', function () {
      exibirDialog('NanaOsaki');
  });

  // Adiciona evento de clique para Nobuo
  document.querySelector('.nobuo').addEventListener('click', function () {
      exibirDialog('Nobuo');
  });

  // Adiciona evento de clique para Shinichi
  document.querySelector('.shinichi').addEventListener('click', function () {
      exibirDialog('Shinichi');
  });

  // Adiciona evento de clique para Yasushi
  document.querySelector('.yasushi').addEventListener('click', function () {
      exibirDialog('Yasushi');
  });

  // Adiciona eventos de clique para os botões de fechar
  document.querySelectorAll('.fechar').forEach(function (fecharBtn) {
      fecharBtn.addEventListener('click', function () {
          var nomeDialog = fecharBtn.dataset.nomeDialog;
          fecharDialog(nomeDialog);
      });
  });
});

function toggleMenu() {
    var menuContainer = document.getElementById("myNavbar");
    menuContainer.style.display = (menuContainer.style.display === 'flex') ? 'none' : 'flex';
}




function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}