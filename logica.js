function abrirModal(titulo, conteudo) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalConteudo").style.display = "block";
  document.getElementById("tituloModal").innerHTML = titulo;
  document.getElementById("descricaoModal").innerHTML = "conteudo";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modalConteudo").style.display = "none";
}

function piscar(id) {
  abrirModal(id, "conteudo");
  try {
    document
      .getElementById(document.getElementsByClassName("teste")[0].id)
      .classList.remove("teste");
  } catch {}
  document.getElementById(id).classList.add("teste");
}
