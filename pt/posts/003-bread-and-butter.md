---
date: 2025-09-26
title: 'Feijão com Arroz'
description: 'as vezes esquecemos o valor do básico bem feito...'
author: Rodolpho Alves
published: true
lang: pt
---

Esses dias estava vagando pelo YouTube e me foi sugerido um vídeo que eu não esperava com base no título mas que o conteúdo (pelo menos os primeiros 15m) fez total sentido para mim. Era uma [keynote da abertura da Rails World 2025](https://youtu.be/gcwzWzC7gUA?si=KVKwsHroxcvSSdbC) pelo David Heinemeier Hansson em que se falava muito sobre a liberdade end-to-end de uma stack e sobre como, nas últimas décadas, o universo de software criou complexidade desnecessária. Desde que assisti essa keynote fiquei remoendo e este post é meu take no assunto, no qual eu concordo plenamente com DHH!

## Feijão com Arroz?

> Ué, isso aqui não era um blog de engenharia de software? Pq falar de comida!?

Para aquele que não estão acostumados com o termo "Feijão com Arroz" uma breve explicação: na culinária brasileira esse é o prato mais comum e que, ao mesmo tempo, provê praticamente todos os tipos de nutrientes que precisamos para ficarmos saudáveis. Portanto chamar algo de "feijão com arroz" não só quer dizer que é algo "básico" (pela sua simplicidade de se fazer) mas que também supre essa demanda fundamental para a existência humana.

> Importante para fins de tradução: em inglês o termo equivalente é o "Bread and Butter" - o prato mais básico da culinária deles e que funciona para que seu "breakfast" te mantenha saciado por um tempo decente.

E com essa referência bem compreendida acho que podemos começar a falar um pouco sobre uma tendência... complicada... de muitos desenvolvedores e produtos por ai: a mania de esquecer os básicos e partir direto para algo mais chamativo ou complexo!

## O que é o básico?

Para mim, no contexto de engenharia de software, o básico é aquilo que:

- Atende a maior parte dos requisitos
- Funciona de maneira estável e confiável

Parece bobo mas no fim se formos ver boa parte dos sistemas que você usa, hoje, fazem exatamente esse básico de uma maneira excepcional e sem problemas:

- Ao abrir o Mercado Livre você consegue achar um produto, adicionar ao carrinho e faturar
- Ao abrir o LinkedIn você consegue visualizar um feed de Posts e alterar seu perfil
- Ao logar na sua Steam você consegue comprar, instalar e jogar jogos em seu computador

> Mas Rodolpho, essas coisas não são básicas!!!

Realmente o "básico" pode variar conforme o sistema / domínio que você está lidando. Mas a verdade é que para todos esses use cases, por mais complicados ou longos que sejam de implementar, se eles não funcionarem não tem muito valor todas as outras funcionalidades! Se você não consegue comprar, instalar e jogar na Steam de pouco vai lhe servir o Steam Overlay ou a feature de comunidades!

> Em alguns cenários de qualidade ou risk-assessment também podemos chamar o básico de "Critical Path" de um sistema.

## A mania por perseguimos o completo

Voltando à keynote do DHH: algo curioso que aconteceu na indústria é que nas últimas décadas adicionamos cada vez mais complexidade aos sistemas nos quais trabalhamos:

- Kubernetes
- 1001 Sistemas para logs (observabilidade)
- 200 sabores de pipelines para CI/CD
- Trocentas maneiras de fazer feature flags / toggles
- Infrastructure as Code, seja com Terraform ou algo proprietário

Me lembro de, aos meus 15 anos, conseguir manter meu servidor privado (para não falar outra coisa) de Tibia rodando em meu computador (um Windows XP Service Pack 2) por meses a fio e chegando a ter mais de 200 jogadores em simultâneo. Tudo isso sem ter um link dedicado, sem ter um banco de dados controlado por IaC (aliás, se me lembro bem, era um banco de dados XML na época!), sem ter uma esteira para validar meu código LUA e definitivamente sem testes de unidade (o teste era eu logar como GOD no servidor e ir fazer a quest!). Em questão de minutos eu conseguia subir uma versão nova com mais áreas no mapa e novas quests / spells para meus amigos que estavam jogando.

Ironicamente, hoje em dia, existem projetos em que eu atuo com tecnologias bem mais robustas mas que o deploy não é algo tão simples como isso. Desde abrir mais de 5 PRs em repositórios diferentes a ter de lidar com várias camadas de abstrações de IaC para poder prototipar (nem lançar) uma nova feature. E se formos ver a industria como um todo cada vez mais estamos tendendo a ir para a complexidade ao invés do básico!

Muitos bootcamps e cursos hoje recomendam para desenvolvedores primeiro saberem usar uma Cloud (AWS, Azure, GCP) antes de falar do básico que é o protocolo IP e coisas como HTTP. Falamos de Container Registry mas não falamos de um SSH / SFTP (que, em muitos casos, poderia salvar horas e horas de debug feito via deploys). Tendemos a criar sistemas diretamente na arquitetura de microservices / serverless ao invés de fazer o básico e iterar sobre ele. Existe uma pressão para que cada vez existem mais testes automatizados de alto nível (E2E, Stress, Chaos, Performance) enquanto equipes sofrem para testar suas alterações localmente.

> Existem sistemas por ai em que os desenvolvedores sequer consegue rodar algo localmente, dependendo totalmente da nuvem para conseguir rodar um teste (manual) de sua feature!

A cada semana que passa um novo serviço, ou biblioteca, surge para ser a "bala de prata" e o "must-have" de uma tech-stack. E cada vez eles são adotados sem um pensamento crítico. Sem tratar a causa raiz. Resultado? Vendor lock-in, latência para conseguir fazer um deployment ou para conseguir criar uma feature.

## Microservices all the way down

Um exemplo prático de nossa sanha coletiva, como indústria, pelo complexo são os micro serviços.

É uma arquitetura maravilhosa que de fato escala bem (quando bem feita) tanto em performance quanto em quantidade de equipes trabalhando em paralelo. Porém ela tem um custo considerável de complexidade técnica (orquestração, CI/CD, recursos de infraestrutura) e mental (padrões de arquitetura e anti-patterns a serem evitados) e principalmente: quando ela é feita de forma errada, com anti-patterns abundantes, ela performa pior do que um "monólito".

Mas abra o YouTube e você verá muito mais cursos falando de como seu projeto deve começar com microservices (ou serverless) ao invés de considerar uma arquitetura monolítica ou de serviços. Vá para a indústria e verá a quantidade de start-ups que gastam mais recursos mantendo seus microservices do que criando features para clientes, totalmente sabotando sua habilidade de gerar valor.

> Mas Rodolpho, quer dizer que então eu não deveria usar microservices e fazer apenas monolítos?

Não meu amigo. O que eu quero dizer é que...

## Adicione complexidade apenas quando for necessário!

YAGNI - You ain't gonna need it. Uma sigla que as vezes esquecemos ao pensar em DRY ou SOLID mas que funciona muito bem tanto para abstrações de código quanto para de arquitetura e processos.

Um dos livros clássicos, Refactoring por Martin Fowler, nos passa uma lição importante e que pode ser aplicada para várias coisas em seus sistemas (e processos): não comece pelo refactor ou o design pattern. Comece resolvendo o problema (seja ele qual for) e observe como sua solução ficou. Se você copiar-colar ela ou se ver que existem problemas com ela (como falta de escalabilidade em um serviço) ai sim aplique uma das técnicas de refactor.

> Nem tudo precisa seguir o melhor Design Pattern / Ferramenta / Processo logo de cara. Errar e 'refatorar' é parte crucial para o desenvolvimento ágil de produto.

Se sua API só faz CRUD não tem motivo para rodar ela em um Kubernetes. Um simples container, deployado em um Fargate da vida, pode ser suficiente. Se você possui apenas 50 usuários talvez nem de um Fargate precise... Crie sistemas que podem evoluir mas não perca tempo (e, por tabela, oportunidades) fazendo algo perfeito!
