window.addEventListener("load", filmes);

// referência dos elementos html
var main = document.getElementById("main");



function filmes() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
        .then((response) => response.json())
        .then((resultado) => {
            resultado.results.map((dados, ix) => {
                main.innerHTML += `<div>
                <img src=https://image.tmdb.org/t/p/w500${dados.poster_path}>
                <span id="media">${dados.vote_average}%</span>
                <h2>${dados.title}</h2>
                <h5>Lançamento: ${dados.origin_country}</h5>
                <span id="link">
                    <a href=detalhes.html?id=${dados.id}> Mais detalhes </a>
                </span>
                </div>`;
            })
        })
        .catch((erro) => console.error(`Erro ao ler a API -> ${erro}`))
}