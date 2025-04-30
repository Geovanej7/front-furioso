# 🦁 FURIA Fan - Sistema de Furiosidade

Bem-vindo ao **FURIA Fan**, uma aplicação criada como parte do processo seletivo para o time de engenharia de software da FURIA. O projeto tem como objetivo proporcionar uma experiência gamificada para fãs, incentivando a interação com o universo FURIA através de um sistema de **FURIOSIDADE**.

---

## 💡 Sobre o projeto

O FURIA Fan permite que os fãs criem um perfil, escolham seu jogador favorito e participem de uma jornada onde acumulam pontos conforme interagem com a plataforma. Ao atingir 100% da barra de furiosidade, o fã se qualifica para participar de sorteios mensais exclusivos.

---

## ⚙️ Tecnologias utilizadas

- 🧠 **ChatGPT** – suporte para pesquisa e modelagem da solução
- 🌐 **Angular** *(em desenvolvimento)* – desenvolvimento do frontend
- ☕ **Java com Spring Boot** *(em desenvolvimento)* – backend da aplicação
- 🐘 **PostgreSQL** *(em desenvolvimento)* – persistência dos dados

---

## 🖥️ Protótipo da interface

As telas contemplam:

1. **Tela de boas-vindas** com call-to-action
2. **Formulário de cadastro**
3. **Login**
4. **Complemento de perfil**
5. **Dashboard com barra de furiosidade e ações**

---

## 📊 Lógica da Furiosidade

O usuário pode acumular pontos **uma única vez por rodada (mensal)**. Ao atingir **100 pontos**, ele participa de um **sorteio exclusivo** para jogar com seu jogador favorito.

| Ação Realizada             | Pontos |
|---------------------------|--------|
| Cadastro                  | +20 pts |
| Completar perfil          | +20 pts |
| Visitar a loja oficial    | +20 pts |
| Seguir redes sociais      | +20 pts |
| Compartilhar o projeto    | +20 pts |
| **Total possível**        | **100 pts** |

**🕑 Rodadas mensais**: Ao final de cada mês, os usuários com 100% de furiosidade participam automaticamente do sorteio.

---

## 📐 Diagrama de Classes (Mermaid)

```mermaid
classDiagram
    class Usuario {
        Long id
        String nome
        String email
        String password
    }

    class Complemento {
        Integer idade
        String localizacao
        Enum playerFavorito
    }

    class BarraDeFuriosidade {
        Long id
        Long usuarioId
        Integer pontos
        Boolean atingiu_maximo
    }

    class Rodadas {
        Long id
        Long  atingiu_maximo_id
        LocalDate inicio
        LocalDate fim
    }

    Usuario "1" --> "1" Complemento
    Usuario "1" --> "1" BarraDeFuriosidade
    Rodadas "1" --> "n" BarraDeFuriosidade
