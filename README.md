# DesafioBruxo


Desafio é criar uma página que exiba os dados dos [personagens de Harry Potter](https://hp-api.onrender.com/api/characters) e pinte os cards com as cores das casas, os cards seriam para uma versão responsiva, mas a ideia é também haver visualização em tabela e filtragem dependendo dos grupos de dados recebidos na api.

## Instruções

- Fazer um fork desse repositório para sua conta no github (se não tiver uma, crie  ❤)
- Crie um projeto React para fazer esse desafio
- Ao finalizar, suba seu projeto no repositório do fork e contate-me.

## Critérios

- Rsponsivo (Card e Tabela)
- Os cards devem ser pintados com as cores das casas, e caso não seja aluno de hogwarts, deixe o card cinza
- Filtros por cada casa ou sem casa e ancestralidade (sangue puro ou mestiço)
- Card adicional com as informações da varinha de cada um
- Utilizar a imagem do personagem
- Listar os 10 primeiros e ao clicar no botão "Exibir mais" carregar mais 10 personagens

Pode fazer o desafio no seu tempo, quando terminar, abra uma issue e contate-me em [Insta/Usakimodoki](https://www.instagram.com/usakimodoki/?hl=pt-br) avisando que terminou o desafio, então faremos o code review em uma call para mentorá-lo sobre seu desempenho e próximos passos.

## Minhas Anotações

Ao realizar esse desafio decidi por em prática alguns conceitos, como o uso de contextos, custom hooks e até a utilização de Styled Components para a estilização. Criei uma interface simples para exibir os resultados seguindo as regras dos desafios, aproveitando adicionei um filtro de pesquisa por nome do personagem.

- Criei um custom hook, useFetchCharacters, para realizar as requisições da API, manipulando estados de loading, erro e por fim os dados.
- Adicionei um contexto para poder compartilhar os estados do select e do input de search com o resto da aplicação, assim poder realizar as operações de filtro.
