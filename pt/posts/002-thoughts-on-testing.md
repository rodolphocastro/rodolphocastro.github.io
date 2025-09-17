---
date: 2025-09-16
title: 'Automation: crie o caminho de menor resistência'
description: 'alguns pensamentos sobre qualidade e automação'
author: Rodolpho Alves
published: true
lang: pt
---

## Antes de falar dos detalhes

Irônico! Faz _quase_ um ano desde a última vez que escrevi neste post! Construí todo o site durante um período de PTO enquanto procurava emprego, na época motivado por uma certa frustração com como alguns pares estavam afetando minha saúde mental e a da equipe. Agora estou finalmente voltando a escrever enquanto inicio outra busca (mas por motivos diferentes).

## Afinal, o que é qualidade?

Nas últimas semanas ouvi comentários de que alguns elementos do sistema em que trabalhamos teriam "menor qualidade". Quando pergunto aos stakeholders por que acham isso, recebo percepções muito diferentes do que qualidade significa para cada um:

- "o site está lento!"
- "isso não funciona quando ... acontece"
- "o botão está estranho!"
- "não temos métricas para acompanhar o comportamento do sistema, então deve faltar qualidade!"

Tudo isso é facilmente debatível dentro do time e não vou me alongar tanto, mas foi o gatilho para eu pensar: "afinal, o que é qualidade?" e é disso que quero falar hoje e o que me levou a explorar o [Playwright](https://playwright.dev) de forma prática, tanto profissionalmente quanto aqui no site.

> Aliás: usar Playwright para testar um site estático como este é exagero. Então... não recomendo a menos que seja realmente crítico ou você só queira brincar.

### O blá‑blá técnico de Engenharia

Quando converso com alguém do time em um contexto de Engenharia, costumo focar em duas linhas de pensamento:

- Testes Automatizados (Unit, Integration, API, E2E) e Métricas (uptime, latência, taxa de erros)
- Processos Sólidos (tickets bem escritos, refinement, planejamento, release, observabilidade, documentação)

> OBS: Antes de me xingar! Eu sei que a lista não é exaustiva e há muitos outros tipos de testes e abordagens para garantir Qualidade. Esses são os que priorizo quando trato com Software Engineers. Então segue comigo.

Testes automatizados geralmente são o mais fácil de resolver quando você entra em um projeto. São relativamente fáceis de rastrear e gerar KPIs (afinal a maioria dos times ao menos captura cobertura e roda um [SonarQube](https://www.sonarsource.com/products/sonarcloud/), né?). Também são mais baratos no pipeline, fáceis de explicar para stakeholders usando a pirâmide de testes e estão totalmente dentro da esfera de influência direta do time. Então, naturalmente, é onde os Engineers tendem a focar!

#### Mergulhando na pirâmide de testes

Nesse contexto, meu reflexo imediato foi olhar os KPIs da parte automatizada, como:

- Cobertura % (Unit e Integration), que gira em torno de 80%
- Uptime, que fica em 99.99999%
- Taxa de Erros, que varia por serviço e componente mas estava ok no caminho crítico
- Quantidade de Testes E2E Automatizados vs Manuais: tínhamos quase 10 automatizados para milhares de manuais

Então, sendo o engenheiro fução que sou, veio aquele "PUUUUUUTZ" de que devíamos atacar E2E imediatamente. O que me levou ao buraco de coelho de envolver SDETs, guildas de qualidade e afins para: ter uma suíte adotável tanto por SDETs quanto por SEs.

#### Experiência de Desenvolvimento

> A água segue o caminho de menor resistência.

No projeto em que estou houve _inúmeras_ tentativas de fazer os times (SEs e SDETs) adotarem uma suíte E2E. Normalmente falharam por baixa adesão, mesmo com gerência incentivando (até usando em performance review). O impacto da falta de cobertura extensa E2E sempre era mitigado porque havia bastante teste de unidade+integração e QEs bem engajados testando manualmente de maneira rápida.

Na última iteração, o SDET lead da época decidiu que seria incrível usar Kotlin + Playwright + SpringBoot para estruturar a "suíte" que todos deveriam usar. Ótimo no papel, certo? Todos os SEs usam SpringBoot e Kotlin; eles podem aprender Playwright! Muitos meses foram gastos construindo do zero para permitir testes Backend e Frontend.

Chegada a hora de adotar e... catástrofe. A curva de aprendizado (esperada, se você olha as diferenças de expectativa de stack entre SDETs e SEs) tornou mais fácil testar manualmente por vários sprints do que criar um único caso de teste. E como poucos SDETs venciam essa curva, quase ninguém conseguia se juntar à gerência para incentivar (e liderar pelo exemplo) a adoção pelos SEs. Além disso a arquitetura era tão "perfeita" que nenhum SDET participou de fato da construção: tudo centralizado em um lead que adorava over-engineering para embelezar o Currículo. Sorry, not sorry.

Acabamos com uma bazuca chique que ninguém sabia operar direito e mal matávamos uma formiga. Por quê? Porque ninguém pensou na experiência de desenvolvimento daqueles SDETs que pavimentaria a entrada rápida dos SEs depois.

#### E aí?

Concordamos em largar aquilo. Sem necessidade de descomissionar (afinal tinha uns incríveis 10 testes!), mas decidimos coletivamente usar o que fazia sentido para os SDETs: TypeScript e Playwright ou Cypress.

Após uma burocracia desnecessária (já vi empresa do setor público com menos) um dos SDETs criou um repositório Playwright e em uma semana fez 5 casos cobrindo as partes mais frágeis.

Nada de "injetar toneladas de dados via um conector Kafka que traduz REST para mensagens em CloudEvent", só priorização simples e isolar o que (na época) não valia automatizar transformando em _padrões_.

Nossos SDETs estavam sobrecarregados com testes manuais e um processo de release oneroso (lembra da burocracia?), então resolvi dar voz ao meu engenheiro interior e calçar os sapatos deles para: 1. gerar mais empatia pelo trabalho deles, 2. _liderar pelo exemplo_ e 3. desafogar as demandas deles.

E o simples novo repositório foi realmente uma curva tranquila: eu, com zero experiência em Playwright, consegui brincar rápido porque sabia Typescript o suficiente e a estrutura lembrava Jest / Vitest (que uso em projetos pessoais).

E aí vem o efeito da [sombra do líder](https://thinkingfocus.com/tag/shadow-of-the-leader/). Consegui criar 3 novos casos de teste e reduzir o tempo de autenticação de 30s por teste para 30s uma vez só por sessão (kudos para a doc incrível do Playwright). Nos dias seguintes os SDETs adicionaram mais casos e fomos para 15. Depois conversamos nos stand-ups com os SEs e desde então não só subimos para 20 casos como também melhoramos o pipeline para rodar os testes em todo pull request, deixando a experiência mais fluida para quem contribui. Tudo isso em cerca de um mês.

É bala de prata? Não é (leia a nota). Mas é um passo, iterativo, na direção certa.

### Nota 1: A percepção coletiva

> Você pode passar batom em um porco. Ainda será um porco.

O problema de testes automatizados é que, por mais que você escreva em vários níveis, eles não compensam processos ruins. Seja processo da empresa, do produto ou de engenharia.

E aí entram os processos. Mais difíceis de mudar, de medir, mas os que mais impactam o que o coletivo percebe como qualidade:

> Quando algo é deployado deveria simplesmente funcionar, estar bonito e não quebrar.

Vou deixar o drama de processo para outro post. Já está ficando tarde e quero terminar isto e adicionar mais alguns testes aqui antes de dormir.

### Nota 2: O próprio Playwright

Se você ficou curioso para aprender mais sobre Playwright, dá uma olhada no código-fonte deste site. Os testes E2E estão na pasta `./tests` e o padrão usado é o `PageObject` porque estou acostumado a organizar código de forma OO. Pelo amor de qualquer entidade em que você acredite: não se sinta obrigado a usar Page Object só porque está vendo aqui! Comece com o que fizer sentido no seu cenário e, se crescer demais, aí refatora para outro padrão.
