
# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia contempla a definição das ferramentas que serão utilizadas pela equipe, tanto para a gestão e manutenção dos códigos e demais artefatos, quanto para a divisão de tarefas e gerenciamento do projeto.

## Ferramentas e Ambientes de Trabalho

Os artefatos do projeto serão desenvolvidos a partir de duas plataformas: GitHub e Figma. 
A relação dos ambientes com sua respectiva plataforma é apresentada na tabela abaixo:

|Ambiente    |Plataforma          |
|------------|--------------------|
|Repositório de código fonte |[Github](https://github.com) |
|Documentos do projeto | [Github](https://github.com) |
|Projeto de Interface e  Wireframes| [Figma](https://www.figma.com) |
|Gerenciamento do Projeto | [Github](https://github.com) |

A relação das ferramentas empregadas no projeto e suas respectivas funções segue abaixo:

|Função     |Ferramentas          |
|-----------|---------------------|
|Editor de código |Github, VS Code | 
|Ferramentas de comunicação |Github, Microsoft Teams, Discord |
|Ferramentas de diagramação |Figma |

Os editores de código foram escolhidos por possuírem uma integração com o sistema de versão e maior possibilidade de integração da equipe na elaboração dos códigos. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas, facilitando o contato interno entre os membros da equipe e o contato externo da equipe com o orientador do projeto. Por fim, para criar diagramas, a ferramenta utilizada foi selecionada por melhor captar as necessidades da solução e proporcionar uma melhor visualização do produto final, alémm de ser um ambiente colaborativo para a atuação simultânea da equipe.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [Github](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branchs:

- `master`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gestão do código fonte

Para fazer a gestão do código fonte do software desenvolvido neste projeto, a equipe utilizará um processo baseado no Git Flow, no qual todas as manutenções no código serão realizadas em branches separados, identificados como Hotfix, Release, Develop e Feature.
Uma breve explicação sobre este processo é apresentada no vídeo [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs). A Figura 1, a seguir, exemplifica a metodologia do Git Flow.

![Git Flow](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-1-e1-proj-web-t1-walkstyle/blob/main/docs/img/Git%20Flow.png?raw=true)

Figura 1 - Fluxo de controle do código fonte no repositório Git

## Gerenciamento de Projeto

A equipe utilizará o conceito de metodologias ágeis para fazer o gerenciamento do projeto, tendo escolhido a metodologia Scrum como base para a definição do processo de desenvolvimento.

### Divisão de Papéis

A equipe está organizada da seguinte maneira:
- **Scrum Master:** Gabriel Santos Pereira
- **Product Owner:** Arthur Bernardo de Almeida Simões
- **Equipe de Desenvolvimento:** Aline dos Santos Silva, Arthur Bernardo de Almeida Simões, Arthur Fernandes Roque Ferrarez, Gabriel Santos Pereira e Miguel Ilídio Menezes de Souza

### Processo

Para a organização e distribuição das tarefas do projeto, a equipe utilizará o Github, estruturado com as seguintes listas: 

- **Product Backlog:** é uma lista detalhada de tudo o que precisa ser realizado para transformar a visão do produto em realidade (MindMaster, 2021). Ou seja, recebe todas as tarefas (entregas) que serão feitas durante o projeto. Caso surja a necessidade de incorporar novas atividades ao projeto, estas devem ser adicionadas a esta lista.
- **Sprint:** são as entregas que serão feitas ao longo do projeto para compor o Product Backlog. Ao final de cada Sprint terá sido concluída uma das tarefas da lista do Product Backlog. Os Sprints serão divididos em Sprints Backlogs, que são tarefas menores dentro de cada Sprint que determinarão o progresso do projeto.
- **Kanban:** é um Scrum Board que mostra o progresso da realização das Sprints Backlogs. Este quadro é delimitado em: To Do, Doing e Done.
- **To Do:** É a lista dos Sprints Backlogs que serão trabalhados no Sprint da vez.
- **Doing (In progress):** É a lista de tarefas que estão sendo executadas no momento pela equipe.
- **Done:** É a lista de tarefas do Sprint que já foram concluídas e estão prontos para serem entregues ao usuário.

Um exemplo do quadro Kanban montado pela equipe no Github é apresentado na Figura 2, a seguir:

![Kanban](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-1-e1-proj-web-t1-walkstyle/blob/main/docs/img/Kanban%20do%20projeto.png?raw=true)

Figura 2 - Tela de planejamento do Github

