---
date: 2025-09-26
title: 'Feijão com Arroz'
description: 'Às vezes esquecemos o valor do básico bem feito na engenharia de software.'
author: Rodolpho Alves
published: true
lang: pt
---

Esses dias o YouTube me recomendou uma palestra que eu não esperava pelo título, mas cujo conteúdo (pelo menos nos primeiros 15 minutos) fez total sentido para mim: a [keynote de abertura da Rails World 2025](https://youtu.be/gcwzWzC7gUA?si=KVKwsHroxcvSSdbC) do David Heinemeier Hansson. Ele fala sobre a liberdade end-to-end e como criamos complexidade desnecessária nas últimas décadas. Fiquei remoendo isso e este post é meu take — concordando bastante com o DHH.

## Feijão com arroz?

> “Ué, isso aqui não era um blog de engenharia de software? Por que falar de comida?!”

Para aqueles que não estão acostumados com o termo “feijão com arroz”, uma breve explicação: é o prato mais comum da culinária brasileira e, ao mesmo tempo, entrega praticamente todos os nutrientes de que precisamos. Chamar algo de “feijão com arroz” não significa só que é “básico”, mas que cobre o essencial.

> Em inglês o termo equivalente seria “bread and butter” - o básico que sustenta o resto.

Com essa referência estabelecida, dá para falar sobre uma tendência... complicada: a mania de ignorarmos o básico e irmos direto para o chamativo ou complexo.

## O que é o básico?

Para mim, no contexto de engenharia de software, o básico é aquilo que:

- Atende a maior parte dos requisitos.
- Funciona de maneira estável e confiável.
- (Idealmente) É simples de evoluir e manter.

Pode parecer óbvio, mas boa parte dos sistemas que você usa hoje faz exatamente esse básico muito bem:

- Mercado Livre: você encontra um produto, adiciona ao carrinho e finaliza a compra.
- LinkedIn: você abre o feed e edita seu perfil.
- Steam: você compra, instala e joga.

> “Mas isso não é básico!”  
> Depende: o “básico” varia conforme domínio. Mas se o caminho crítico (critical path) não funciona, todo o resto perde valor. Se você não consegue instalar e jogar, pouco importa o Steam Overlay.

## A mania de perseguir o “completo”

Ao longo das últimas décadas fomos adicionando camadas e camadas:

- Kubernetes
- Incontáveis soluções de logs e observabilidade
- Vários sabores de pipelines CI/CD
- Muitas maneiras de implementar feature flags (toggles)
- Infrastructure as Code (Terraform ou proprietários)

Quando eu tinha 15 anos, mantinha um servidor “privado” de Tibia no meu PC (Windows XP SP2) com 200+ jogadores simultâneos. Sem link dedicado, sem IaC, sem pipeline, sem testes. Eu logava como GOD, validava e deployava em minutos. Hoje, em alguns projetos, abrir 5+ PRs para prototipar algo não é estranho.

Bootcamps ensinam Cloud antes de TCP/IP ou HTTP. Falamos de Container Registry antes de uma simples transferência via SSH ou SFTP (que poderia economizar horas de debug). Começamos direto em microsserviços ou serverless em vez de iniciar com algo coeso e evoluir. Pressionamos por mais E2E/Stress/Chaos/Performance enquanto devs nem conseguem rodar o básico localmente.

> Existem sistemas em que desenvolvedores não conseguem executar a aplicação localmente, eles dependem totalmente da nuvem para testar uma feature.

Resultado? Adoção acrítica, vendor lock-in, latência para deploy e para entregar valor.

## Microsserviços por toda parte

Microsserviços podem escalar performance, times e domínios. Mas têm custo: orquestração, infraestrutura, CI/CD, padrões. E quando mal feitos geram acoplamento distribuído, chatter excessivo e transações frágeis; podendo performar pior que um monólito.

Mesmo assim, o hype manda começar distribuído. Startups gastam mais mantendo a arquitetura do que construindo funcionalidades que comprovem hipóteses de mercado.

> “Então não devo usar microsserviços e só fazer monólitos?”  
> Não. O ponto é: use a complexidade quando ela se justifica, não antes.

## Adicione complexidade apenas quando necessário

**YAGNI — You Ain’t Gonna Need It.** Às vezes esquecemos disso enquanto recitamos DRY ou SOLID.

O livro Refactoring (Martin Fowler) ensina: resolva o problema primeiro, depois refatore se padrões emergirem ou dores aparecerem. Não comece pensando no pattern, comece entregando valor.

> Nem tudo precisa do melhor pattern / ferramenta / processo logo de cara. Errar e refatorar faz parte do desenvolvimento ágil.

Se sua API só faz CRUD, talvez não precise de Kubernetes. Um container simples pode ser suficiente. Com 50 usuários talvez nem isso... um serviço básico resolve. Construa para evoluir, mas não sacrifique tempo e oportunidade perseguindo perfeição prematura.

## Resumo prático

- Comece simples: entregue o caminho crítico estável.
- Meça antes de otimizar ou distribuir.
- Adote ferramentas pela dor real, não pelo hype.
- Evite complexidade “aspiracional”.
- Evolua por refactor incremental, não por reescrita antecipada.

> Valor entregue > arquitetura “instagramável”.
