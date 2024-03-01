<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/pauloaraujo028/web_scrapper">
	   <h1 align="center">Web Scrapper API</h2>
  </a>

  <h4 align="center">  
    <br />
    <a href="https://pauloaraujo-portfolio.netlify.app/" target="_blank">Ver Online</a>
    ·
    <a href="https://github.com/pauloaraujo028/web_scrapper/issues/new" target="_blank">Relatar Bug</a>
    ·
    <a href="https://github.com/pauloaraujo028/web_scrapper/issues/new" target="_blank">Recurso de Solicitação</a>
  </h4>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#main-features">Funcionalidades principais</a></li>
        <li><a href="#upcoming-features">Próximas funcionalidades</a></li>
        <li><a href="#final-considerations">Considerações finais</a></li>
        <li><a href="#built-with">Construído com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#clone-locally">Clonar localmente</a></li>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contribuindo</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#contact">Contato</a></li>
    <!-- <li><a href="#acknowledgments">Agradecimentos</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

<a name="about-the-project"></a>

## Sobre o Projeto

Um aplicativo web de gerenciamento de produtos que permite aos usuários pesquisar e visualizar detalhes de produtos com base em diferentes critérios, como nutrição e classificação NOVA.

<img width="1493" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/web_scrapper/assets/105018299/9e90022e-c6c9-44b3-a55e-19f489cff6c1">

<a name="main-features"></a>

### Funcionalidades principais:

- **Scraping de Dados:** O projeto é capaz de acessar páginas da web, extrair dados estruturados de HTML e processar esses dados para fornecer informações úteis.
- **Configuração de Parâmetros de Busca:** Os usuários podem fornecer parâmetros de busca, como termos de pesquisa, filtros de categoria, ou outros critérios, para personalizar a consulta de scraping e obter resultados específicos.
- **API RESTful:** A API oferece endpoints bem definidos que permitem aos usuários enviar solicitações HTTP para iniciar o processo de scraping, consultar os dados scrapados e obter resultados formatados em JSON ou outro formato adequado.

O projeto consiste em um sistema de gestão de produtos que visa facilitar a busca e visualização de informações sobre diferentes produtos. Seus principais objetivos incluem fornecer aos usuários uma maneira eficiente de encontrar produtos com base em critérios específicos, como nutrição e classificação NOVA, e apresentar detalhes relevantes de cada produto, como nome, pontuação de nutrição e classificação NOVA. Com isso, os usuários podem tomar decisões mais informadas sobre suas escolhas de alimentos.

<a name="upcoming-features"></a>

### Próximas funcionalidades:

- Autenticação e Autorização
- Tratamento de Erros
- Documentação da API no Swagger
- Agendamento de Tarefas

<a name="final-considerations"></a>

### Considerações finais

Durante o desenvolvimento deste projeto de API web scrapper, me deparei com diversos desafios que me proporcionaram valiosas lições de aprendizado:

1.  **Entendimento da Estrutura das Páginas**: Compreender a estrutura e o funcionamento dos sites-alvo foi um desafio inicial. Aprendi a analisar o HTML das páginas e a identificar os padrões de elementos necessários para a extração de dados.
2.  **Gestão de Requisições e Sessões**: Coordenar as requisições HTTP e gerenciar as sessões de scraping exigiu organização e cuidado. Aprendi a implementar estratégias para evitar bloqueios e bans, como o uso de proxies e a definição de intervalos entre as requisições.
3.  **Tratamento de Dados Desorganizados**: Lidar com dados desestruturados ou inconsistentes foi um desafio constante. Descobri a importância de implementar processos de limpeza e validação de dados robustos para garantir a qualidade dos resultados.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<a name="built-with"></a>

### Construído com

**Principais tecnologias:**

- ![Puppeteer](https://img.shields.io/badge/PUPPETEER-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=black)
- ![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- GETTING STARTED -->

<a name="getting-started"></a>

## Getting Started

<a name="clone-locally"></a>

### Clonar-localmente

- Digite essa url: [https://github.com/pauloaraujo028/web_scrapper](https://github.com/pauloaraujo028/nextjs-portfolio) no seu navegador.
- Uma vez aberto, navegue até o nível superior esquerdo do projeto, um botão verde de download do código estará visível no lado direito.
- Selecione a opção de download Zip no menu suspenso.
- Quando o download estiver concluído, você poderá acessar meu projeto localmente.

<a name="prerequisites"></a>

### Pré-requisitos

- NPM: Para instalar o npm, você pode seguir estas etapas

1. Primeiro, verifique se você tem o Node.js instalado em sua máquina. O npm é instalado automaticamente junto com o Node.js. Você pode baixar e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).
2. Depois de instalar o Node.js, abra o terminal ou prompt de comando e execute o seguinte comando para verificar se o npm foi instalado corretamente:

```sh
  $ npm -v
```

- Instalando as dependências

```sh
  $ npm install
```

- Rodando a aplicação

```sh
  # desenvolvedor
  $ npm run start

  # modo de auto reload
  $ npm run start:dev

  # ambiente de produção
  $ npm run start:prod
```

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- CONTRIBUTING -->

<a name="contributing"></a>

## Contribuição

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

Se você tiver uma sugestão para melhorar o projeto, faça um fork do repositório e crie uma solicitação pull. Você também pode simplesmente abrir um issue com a tag "melhoria".
Não se esqueça de dar uma estrela ao projeto! Obrigado novamente!

1. Faça o Fork do Projeto
2. Crie seu Branch (`git checkout -b feature/RecursoIncrivel`)
3. Commit suas alterações (`git commit -m 'Adicione algum recurso incrivel'`)
4. Push para o Branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- LICENSE -->

<a name="license"></a>

## Licença

Distribuído sob a licença MIT.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- CONTACT -->

<a name="contact"></a>

## Contato

### Paulo Araújo

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://pauloaraujo-portfolio.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pauloaraujo028/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pauloaraujo028)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pauloaraujo.phz@gmail.com)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- ACKNOWLEDGMENTS
<a name="acknowledgments"></a>
## Agradecimentos

*
*
*
*
<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>-->
