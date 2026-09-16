const form = document.getElementById("formProblema");
const listaProblemas = document.getElementById("listaProblemas");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const local = document.getElementById("local").value;
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${tipo}</td>
        <td>${local}</td>
        <td>Pendente</td>
    `;

    listaProblemas.appendChild(novaLinha);

    form.reset();

    alert("Problema registrado com sucesso!");
});
