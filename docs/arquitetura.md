# Arquitetura e Modelagem do ManutenAi

## 1. Visão geral

O **ManutenAi** é um sistema simples de manutenção escolar criado para facilitar o registro e o acompanhamento de problemas de infraestrutura da escola.

## 2. Fluxo do sistema

O fluxo representa as principais etapas do funcionamento do sistema:

1. O usuário encontra um problema;
2. Registra o problema;
3. Informa o local, o tipo e a descrição;
4. O problema fica com status **Pendente**;
5. O problema é analisado;
6. A manutenção é realizada;
7. É verificado se o problema foi resolvido;
8. Se não foi resolvido, o problema continua pendente e passa novamente pelo processo de análise e manutenção;
9. Se foi resolvido, o problema é marcado como **Resolvido**.

O fluxograma está disponível no arquivo:

**`ManutenAi-Modelagem-Fluxo do Sistema.drawio.png`**

## 3. Protótipo das telas

O protótipo apresenta duas telas principais do sistema.

### 3.1 Tela de registro

Permite informar:

- Local;
- Tipo do problema;
- Descrição.

Também possui o botão **Registrar problema**.

### 3.2 Tela de problemas registrados

Apresenta os problemas cadastrados, mostrando:

- Problema;
- Local;
- Status.

Os principais status utilizados são **Pendente** e **Resolvido**.

O protótipo está disponível no arquivo:

**`Diagrama P II.drawio.png`**

## 4. Escopo da modelagem

A modelagem foi mantida simples, tendo como foco o registro e o acompanhamento de problemas de manutenção escolar.
