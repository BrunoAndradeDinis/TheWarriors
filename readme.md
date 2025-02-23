# The Warriors Website

Este projeto é um site desenvolvido como exercício do módulo 21, criando uma página inspirada no filme "The Warriors". O site contém informações sobre o filme, incluindo trailer, sinopse, galeria e um design moderno, responsivo e interativo.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica do site.
- **CSS3**: Estilos e design responsivo, com uso de Flexbox e Grid.
- **JavaScript (jQuery)**: Interatividade, como controle de exibição do menu e animações.
- **Gulp**: Automação de tarefas, como minificação de arquivos, compressão de imagens, e controle do fluxo de trabalho de desenvolvimento.
- **Slick Carousel**: Para a galeria de imagens do site.
- **Font Awesome**: Ícones para links de redes sociais.

## Funcionalidades

- **Navegação fixa**: A barra de navegação fica visível enquanto o usuário rola a página.
- **Hero Section**: Imagem de introdução com logo e links para redes sociais.
- **Trailer**: Embed do YouTube para exibição do trailer do filme.
- **Sinopse**: Descrição do enredo do filme.
- **Galeria**: Carrossel de imagens do filme com Slick Carousel.
- **Botão para assistir**: Link para uma plataforma de streaming onde o filme pode ser assistido.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/BrunoAndradeDinis/the-warriors.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Para iniciar o desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para compilar e criar a versão otimizada para produção:
   ```bash
   npm run build
   ```


## Estrutura do Projeto

```
the-warriors/
│
├── dist/                # Arquivos finais, como estilos e scripts minificados
│   ├── src/
│   │   ├── images/      # Imagens do site
│   │   ├── js/          # Scripts compilados
│   │   └── styles/      # Arquivos CSS compilados
│   └── index.html       # Arquivo HTML principal
├── src/                 # Arquivos fontes, como imagens e scripts não compilados
│   ├── images/          # Imagens usadas no projeto
│   ├── scripts/         # Arquivos JavaScript
│   └── styles/          # Arquivos Sass
├── gulpfile.js          # Configurações de automação com Gulp
├── package.json         # Dependências e scripts de build
└── README.md            # Este arquivo
```

## Scripts

- **`npm run dev`**: Inicia o processo de desenvolvimento com o Gulp. Observa mudanças nos arquivos e recarrega automaticamente.
- **`npm run build`**: Compila os arquivos, minifica o JavaScript, e otimiza as imagens para produção.

## Contribuições

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua alteração:
   ```bash
   git checkout -b minha-alteracao
   ```
3. Realize suas modificações.
4. Envie um pull request com suas mudanças.

## Autor

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/BrunoAndradeDinis">
        <img src="https://avatars.githubusercontent.com/u/55500337?v=4" width="100px;" alt="Foto de Bruno de Andrade no GitHub"/><br>
        <sub>
          <b>Bruno de Andrade</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## Licença

Este projeto está licenciado sob a Licença ISC.
