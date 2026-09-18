# ManutenAi

## Sobre o projeto

O *ManutenAi* é um sistema simples de manutenção escolar criado para facilitar o registro e o acompanhamento de problemas de infraestrutura dentro da escola.

## Problema

Nas escolas, podem ocorrer problemas como:

- Ventiladores quebrados;
- Lâmpadas queimadas;
- Torneiras com defeito;
- Portas danificadas;
- Cadeiras quebradas.

Quando esses problemas não são comunicados de forma organizada, pode ser difícil acompanhar se eles foram solucionados.

## Solução proposta

O *ManutenAi* oferece uma forma simples e organizada de registrar problemas encontrados na escola e acompanhar a situação de cada solicitação.

O sistema permite que o usuário:

1. Registre o problema encontrado;
2. Informe o local onde ele ocorreu;
3. Descreva o problema;
4. Informe o tipo de problema;
5. Visualize os problemas registrados;
6. Acompanhe o status da solicitação;
7. Marque o problema como resolvido quando ele for solucionado.

## Objetivo

Facilitar a comunicação de problemas de infraestrutura e ajudar a escola a acompanhar as solicitações de manutenção de forma mais organizada.

## Público-alvo

O sistema é destinado principalmente a:

- *Alunos*;
- *Funcionários da escola*;
- *Responsáveis pela manutenção*.

## Funcionalidades

- [x] Registrar um problema;
- [x] Informar o local do problema;
- [x] Descrever o problema;
- [x] Informar o tipo de problema;
- [x] Visualizar problemas registrados;
- [x] Consultar o status de cada problema;
- [x] Marcar um problema como resolvido.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- GitHub Pages

## Estrutura do projeto

```text
ManutenAi/
├── docs/
│   ├── arquitetura.md
│   ├── requisitos.md
│   ├── testes.md
│   ├── ManutenAi-Modelagem-Fluxo do Sistema.drawio.png
│   └── Diagrama P II.drawio.png
│
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── index.html
└── README.md

## Como executar

O sistema pode ser acessado diretamente pelo GitHub Pages.

Também é possível executar localmente:

1. Baixe ou clone o repositório;
2. Acesse a pasta `src`;
3. Abra o arquivo `index.html` em um navegador;
4. Preencha o formulário com o local, tipo e descrição do problema;
5. Clique em **Registrar problema**;
6. O problema será exibido na tabela com o status **Pendente**;
7. Após a manutenção, clique em **Marcar como resolvido** para atualizar o status.

## Testes e validação

Foram realizados testes das principais funcionalidades do sistema:

- Cadastro de problemas;
- Exibição da descrição;
- Exibição do local e tipo do problema;
- Atualização do status para **Resolvido**;
- Cadastro de novos problemas após a atualização de status.

Os resultados dos testes estão registrados no arquivo `docs/testes.md`.

## Resultado final

O ManutenAi possui um protótipo funcional capaz de registrar problemas de infraestrutura escolar, exibir as informações cadastradas e atualizar o status dos problemas após a realização da manutenção.

## Escopo

O projeto foi desenvolvido de forma simples, tendo como foco o *registro e acompanhamento de problemas de manutenção escolar*.
