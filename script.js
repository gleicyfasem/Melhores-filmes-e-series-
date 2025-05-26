function selecionarTipo(tipo) {
    document.getElementById("escolha").style.display = "none";
    document.getElementById("plataformas").style.display = "block";
}

function filtrarPlataforma(plataforma) {
    document.getElementById("plataformas").style.display = "none";
    document.getElementById("nichos").style.display = "block";
}

function filtrarCategoria(categoria) {
    let filmes = document.querySelectorAll('.filme');

    filmes.forEach(filme => {
        if (filme.getAttribute('data-categoria') === categoria) {
            filme.style.display = "block";
        } else {
            filme.style.display = "none";
        }
    });
}
function voltarInicio() {
    // Esconder todas as seções e mostrar a tela inicial
    document.getElementById("escolha").style.display = "block";
    document.getElementById("plataformas").style.display = "none";
    document.getElementById("nichos").style.display = "none";
    document.getElementById("catalogo").style.display = "none";
}

function voltarSessao(sessao) {
    // Esconder todas as seções e mostrar apenas a desejada
    document.getElementById("escolha").style.display = "none";
    document.getElementById("plataformas").style.display = "none";
    document.getElementById("nichos").style.display = "none";
    document.getElementById("catalogo").style.display = "none";
    
    document.getElementById(sessao).style.display = "block";
}
