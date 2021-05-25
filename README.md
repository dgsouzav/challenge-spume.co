# spume::challenge for Padawans

Seguem instruções sobre o uso das ferramentas deste desafio e os resultados esperados.

#### Overview

Se trata de uma página simples com três _botões_ que disparam requisições via ```fetch API``` para um servidor ```nodejs``` pré-configurado na solução, estas requisiçoes retornam uma coleção de artigos diversos encontrados no repositório do desafio.
Encontra-se implementada a requisição que trás todos os artigos (limitados a 50 por motivos de desempenho), e cabe ao desafiado implementar as demais rotinas, sendo a primeira obrigatória para a conclusão deste desafio e a segunda um bônus que deve contar bastante!

#### DevOps

Este desafio foi construído com uma _docker_ ```nodejs``` pré-configurada.
Para iniciar a _docker_, considerando que o ambiente esteja instalado devidadamente no seu sistema, basta executar o _script_ ```./docker/start.sh```. De maneira análoga, para encerrar a _docker_ há um script de nome ```stop.sh```.
Ao iniciar o _container_, você deverá ser direcionado para o sistema emulado, uma vez dentro do servidor, basta correr o comando ```/root/proj/run``` e uma instância ```nodemon``` será executada com o projeto carregado.

<sub>**notas**:</sub>
<sub>1. Se o sistema não te direcionar para dentro do contâiner, use o código: ```docker exec -it nodejs zsh``` para acessá-lo.</sub>
<sub>2. com o ```nodemon``` funcionando, cada vez que algum arquivo da aplicação ```node``` for modificada, basta digitar ```rs``` e teclar _Enter_ para que o servidor seja reiniciado com as novas modificações.</sub>
<sub>3. Para acessar a aplicação, basta digitar ```http://localhost:3000``` em qualquer navegador de internet (chrome, edge, opera, etc.).</sub>

#### Backend

###### Pastas de projeto e arquivo de inicio
||Projeto|Servidor|
|---|---|---|
| Pasta raiz | ```./project``` | ```/root/proj``` |
| Aplicação | ```./project/app``` | ```/root/proj/app``` |
| Node start file| ```./project/app/app.js``` | ```/root/proj/app/app.js```| 

###### Estrutura ```MVC``` de pastas (do desafio apenas!)

```
    project/
    \____ docker/                   -- docker config files/scripts
    \____ app/
          \____ assets/
          |    \____ rss/           -- project`s RSS RAW files
          \____ lib/                -- spume`s framework
          \____ webroot/
                \____ controllers/  -- nodejs specific files
                \____ views/        -- web files, node independent

```

###### Arquivos principais do desafio (backend)

```
    project/
    \____ app/
          \____ assets/
          |    \____ rss/*              -- project`s RSS RAW files
          \____ webroot/
                \____ controllers/
                      \____ artcles.js  -- where the magic will happen!
                      \____ rss.js      -- just in case you need to surprise us (optional)
                      \____ themes.js   -- try yourself on customizations! (optional)
```

#### Frontend


###### Pastas de projeto e arquivo de renderização
||Projeto|
|---|---|
| Pasta raiz | ```./project/app``` |

###### Arquivos principais do desafio (frontend)

```
    project/
    \____ app/
          \____ webroot/
                \____ views/
                |     \____ components/
                |           \____ article_tile.htm  -- the tile in wich articles are shown (optional customization) 
                |     \____ css/
                |           \____ style.css         -- help you write your style (optional)
                |     \____ js/
                |           \____ preset.js         -- boot scheduler (wrong choises messes the system)
                |     \____ home.htm                -- main app container
                |     \____ splash.htm              -- feel free to customize the boot screen (optional)
                \____ index.html
```

#### O desafio

Crie código no arquivo ```./project/app/webroot/controllers/article.js```, dentro das funçoes membros: ```only_10_days``` e ```only_techs```(opcional), paar customizar o retorno das chamadas que vêm da página ```./project/app/webroot/views/home.htm```.
Já há nesta classe/módulo uma ```action``` implementada com assinatura ```array Articles::all(int limit)``` que retorna todos (limitados a 50 por razões de performance) os artigos encontrados pela classe ```Rss``` (do documento: ```./project/app/webroot/controllers/rss.js```)

###### only_10_days
Ao contrário da chamada para ```Articles::all```, a função mebro ```only_10_days``` deve retornar **apenas**, única e somente os artigos encontrados com data de publicação dentro dos últimos 10 dias. Atenção para a implementação do _limite_ de retorno.

###### only_techs (opcional, porém bônus)
Você deve criar um critério mínimo para decidir se o artigo têm conteúdo de tecnologia, aplique seu critério e retorne apenas os artigos que você encontrou. Não se preocupe em perder artigos, o importante é que os que vierem sejam de fato de tecnologia.

#### Avaliação

Você será avaliado pelo desafio _only_10_days_, este precisa estar concluído.

#### Bônus
O desafio _only_techs_ é totalmente opcional, mas traduz bastante os desafios que você enfrentará na Spume, e por isso te dará pontos extras!

#### Opcionais
Apenas servirão para que possamos ser surpreendidos!
São eles:
    1. Alterações na classe ```Rss```: pode te dar pontos se úteis.
    2. Lidar com 'possíveis' erros nos arquivos _rss_ (inclusive _charset_): pode ser bom!
    3. Alterações visuais no ```*/article_tile.htm```
    4. Alterações na página principal (```*/home.htm```)
    5. Alterações na página de carregamento (```*/splash.htm```)
    6. Exibir o nome, tratado e limpo, da Mídia publicadora da notícia RSS para o usuário seria interessante.

# Que a força esteja com você!