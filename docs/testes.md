# Testes do Sistema — ManutenAI

## Objetivo

Verificar o funcionamento das principais funcionalidades do sistema ManutenAI, garantindo que o cadastro, a exibição das informações e a atualização do status dos problemas funcionem corretamente.

## Teste 1 — Cadastro de problema

**Procedimento:**  
Foi preenchido o formulário com local, tipo do problema e descrição.

**Dados utilizados:**
- Local: Sala 08
- Tipo do problema: Ventilador quebrado
- Descrição: O ventilador da sala não está funcionando.

**Resultado esperado:**  
O problema deve ser adicionado à tabela com o status "Pendente".

**Resultado obtido:**  
O problema foi registrado corretamente e apareceu na tabela com o status "Pendente".

**Status:** Aprovado.

---

## Teste 2 — Exibição da descrição

**Procedimento:**  
Foi verificado se a descrição informada no cadastro aparece corretamente na tabela de problemas registrados.

**Resultado esperado:**  
A descrição deve aparecer na coluna "Descrição".

**Resultado obtido:**  
A descrição foi exibida corretamente na tabela.

**Status:** Aprovado.

---

## Teste 3 — Atualização do status

**Procedimento:**  
Foi utilizado o botão "Marcar como resolvido" em um problema registrado como "Pendente".

**Resultado esperado:**  
O status deve ser alterado para "Resolvido" e o botão de ação deve desaparecer.

**Resultado obtido:**  
O status foi alterado corretamente para "Resolvido" e o botão desapareceu.

**Status:** Aprovado.

---

## Teste 4 — Novo cadastro após atualização

**Procedimento:**  
Foi realizado um novo cadastro de problema após a atualização do status de outro problema.

**Resultado esperado:**  
O sistema deve permitir o cadastro normalmente.

**Resultado obtido:**  
O novo problema foi registrado corretamente.

**Status:** Aprovado.

---

## Conclusão

Os testes realizados demonstraram que as principais funcionalidades implementadas no ManutenAI estão funcionando conforme o planejado.
