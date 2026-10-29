<div align="center">

# 🖥️ GM OS 2.0

### Uma experiência de desktop construída para o navegador.

**Meu portfólio em evolução, inspirado na interação de um sistema operacional.**

<img src="https://img.shields.io/badge/status-em_desenvolvimento-f59e0b?style=for-the-badge" alt="Em desenvolvimento" />
<img src="https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
<img src="https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
<img src="https://img.shields.io/badge/GSAP-animações-88ce02?style=for-the-badge" alt="Animações com GSAP" />

[Explorar o código](./src) · [Primeira versão](https://github.com/gmanzattodev/GMOS) · [Meu GitHub](https://github.com/gmanzattodev)

</div>

---

## ✨ Sobre o projeto

O **GM OS 2.0** é um ambiente de desktop interativo desenvolvido com **React, JavaScript, CSS, Vite e GSAP**. Estou construindo um portfólio que permite explorar uma interface inspirada em sistemas operacionais, com identidade visual própria e interações feitas componente por componente.

A experiência começa na tela de bloqueio, passa por um login demonstrativo e chega à área de trabalho. Cada etapa reúne desafios de front-end: gerenciamento de estado, eventos de teclado e mouse, renderização condicional, temporizadores e animações.

## 🔓 Da tela de bloqueio ao desktop

| Etapa | O que já está no código |
| --- | --- |
| **Bloqueio** | Hora e data atualizadas, desbloqueio por clique ou barra de espaço e transição com GSAP |
| **Login** | Mostrar e ocultar senha, aviso de Caps Lock, feedback de erro e bloqueio de 10 segundos após 5 tentativas incorretas |
| **Desktop** | Papel de parede, barra superior, Dock e menu contextual |
| **Wi-Fi** | Painel com liga/desliga e seleção entre três redes simuladas |
| **Volume** | Controle visual de 0 a 100 com ícone que acompanha o nível |
| **Dock** | Oito atalhos com alternância de estado e indicador visual |
| **Clique direito** | Menu na posição do cursor, com cálculo para limitar sua posição nas bordas da tela |

> **Estado atual:** o Dock alterna os IDs dos aplicativos e seus indicadores. As janelas e funcionalidades internas dos apps ainda não estão renderizadas no desktop. Os botões do menu contextual também aguardam a implementação de suas ações.

## 🎨 Identidade visual

Papéis de parede, ícones próprios, transparências e efeitos de desfoque compõem a interface. O movimento faz parte da navegação: a transição de desbloqueio usa **GSAP**, integrado ao React por meio de **@gsap/react**.

O objetivo é cuidar tanto da aparência quanto do comportamento de cada interação.

## ⚙️ Tecnologias

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **React 19** | Componentes, estados, efeitos e composição das telas |
| **JavaScript / JSX** | Lógica de interação, eventos e renderização |
| **CSS** | Layout, estilização e efeitos visuais |
| **GSAP + @gsap/react** | Animação de desbloqueio com escopo e `contextSafe` |
| **Vite** | Ambiente de desenvolvimento e build |
| **ESLint** | Análise estática do código |
| **GitHub Actions** | Workflow de build e publicação no GitHub Pages |

## 🗂️ Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| [`src/app`](./src/app) | Entrada da aplicação e estilos globais |
| [`src/screens/TelaBloqueio`](./src/screens/TelaBloqueio) | Relógio, data e animação de desbloqueio |
| [`src/screens/TelaLogin`](./src/screens/TelaLogin) | Login demonstrativo e controle de tentativas |
| [`src/screens/Desktop`](./src/screens/Desktop) | Composição da área de trabalho e estados compartilhados |
| [`src/features/Layouts`](./src/features/Layouts) | Barra superior, Dock e menu contextual |
| [`src/features/wifi`](./src/features/wifi) | Painel e estados das redes simuladas |
| [`src/assets`](./src/assets) | Ícones, foto de perfil e papéis de parede |

## 🧠 O que estou praticando

- Dividir uma interface em componentes com responsabilidades claras.
- Compartilhar dados e ações por props.
- Usar `useState`, `useEffect` e `useRef` em interações reais.
- Atualizar relógios e contagens regressivas com limpeza dos temporizadores.
- Renderizar listas e alternar itens de um array sem mutar o estado.
- Trabalhar com coordenadas do cursor e limites da janela.
- Integrar animações GSAP ao ciclo de vida do React.
- Organizar recursos por telas e funcionalidades.

## 🚧 Evolução do GM OS

- [x] Publicar o código da versão 2.0.
- [x] Integrar bloqueio → login → desktop.
- [x] Criar a transição de desbloqueio com GSAP.
- [x] Implementar feedback e limite de tentativas no login.
- [x] Criar os painéis simulados de Wi-Fi e volume.
- [x] Criar o Dock com indicadores de estado.
- [x] Exibir o menu contextual com posicionamento limitado pelas bordas.
- [x] Adicionar o workflow de publicação no GitHub Pages.
- [ ] Conectar os atalhos do Dock às janelas dos aplicativos.
- [ ] Desenvolver o Gerenciador de Arquivos.
- [ ] Implementar Terminal, Notas, Calculadora e outros apps.
- [ ] Adicionar ações aos botões do menu contextual.
- [ ] Evoluir foco, sobreposição e gerenciamento de múltiplas janelas.
- [ ] Aprimorar responsividade, acessibilidade e navegação por teclado.

## 📌 Sobre a simulação

O GM OS 2.0 é uma aplicação front-end executada no navegador. O login é demonstrativo, com validação no cliente; Wi-Fi e volume representam estados visuais da interface, sem controlar a rede ou o volume do dispositivo.

O repositório contém um workflow que executa `npm ci`, gera o build com `npm run build` e envia a pasta `dist` para o GitHub Pages.

## 👨‍💻 Autor

Desenvolvido por **Giovani Manzatto** — [@gmanzattodev](https://github.com/gmanzattodev).

Este projeto registra minha evolução como desenvolvedor front-end, transformando estudo em uma experiência interativa para o meu portfólio.

---

<div align="center">

**GM OS 2.0 · Construindo minha própria experiência, componente por componente.**

</div>
