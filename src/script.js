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
        <td class="status">Pendente</td>
        <td>
            <button type="button" class="resolver">
                Marcar como resolvido
            </button>
        </td>
    `;

    listaProblemas.appendChild(novaLinha);

    const botaoResolver = novaLinha.querySelector(".resolver");

    botaoResolver.addEventListener("click", function() {
        const status = novaLinha.querySelector(".status");

        status.textContent = "Resolvido";

        botaoResolver.remove();
    });

    form.reset();

    alert("Problema registrado com sucesso!");
});
