# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando da Arquitetura da Solução, as estruturas de dados e as telas já implementadas, bem como do ambiente de hospedagem da aplicação.

## Diagrama de componentes

O Diagrama de Componentes é o diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.
Os componentes que fazem parte da solução deste projeto são apresentados na Figura 9, a seguir.

![Diagrama de Componentes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-1-e1-proj-web-t1-walkstyle/blob/main/docs/img/Diagrama%20de%20componentes.png?raw=true)

Figura 9 - Arquitetura da Solução

A solução implementada conta com os seguintes módulos:

- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Informações dos tênis** – marca, modelo, tamanho, preço e prazo de entrega. 
     - **Feedback** - registro de opiniões dos usuários sobre os tênis.
 - **API das Redes Sociais** - plataformas que permitem o acesso às Redes Sociais da loja e o contato direto com o vendedor.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Diagrama de solução

A imagem a seguir ilustra a o fluxo do usuário para a solução deste projeto.

![User Flow](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-1-e1-proj-web-t1-walkstyle/blob/main/docs/img/User_flow_3.png?raw=true)

Assim que o usuário entra na plataforma, ele é apresentado à tela inicial (Homepage), a qual conta com um cabeçalho fixo e idêntico em todas as demais telas do site. Nele constam o logo da loja Walking Style, um botão de retorno à Homepage, um Menu de Marcas dos tênis vendidos, onde o usuário poderá acessar os produtos já classificados por fabricante, e outro menu referente às redes sociais do vendedor, por meio do qual o usuário será redirecionado para as páginas da Walking Style nas respectivas redes, podendo explorar funcionalidades inerentes a cada uma delas, sendo possível também entrar em contato diretamente com o vendedor por lá. 

Além do cabeçalho funcional, do slogan e das imagens de destaque, a tela inicial ainda conta com uma seção de “Perguntas frequentes”, na qual o usuário irá encontrar diversas informações sobre o funcionamento do site, método de compra, meios de pagamento aceitos, dentre outras informações úteis que buscam dar uma maior praticidade à experiência de usabilidade. Além disso, a homepage ainda possui *feedbacks* de compradores a respeito dos produtos que receberam e também um espaço para que o usuário deixe seu comentário e sua avaliação relativa a compra que realizou. Essa avaliação é automaticamente adicionada à homepage a partir do momento de envio.

A partir do Menu de Marcas, presente no cabeçalho do site, o usuário consegue se deslocar pelas telas onde se encontram os tênis de cada marca disponíveis para encomenda. Caso opte por alguma das opções desse menu, ou seja, os botões "Adidas", "Jordan", "Balenciaga" ou "Nike", o usuário será redirecionado para às respectivas telas dessas marcas: Tela Adidas, Tela Jordan, Tela Balenciaga, ou Tela Nike, onde são encontrados os tênis disponíveis para encomenda pela Walking Style, com suas respectivas fotos e informações de marca, modelo, preço, tamanhos disponíveis e prazo de entrega. No rodapé das telas, são informadas as formas de pagamento aceitas pela Walking Style, para que o usuário já saiba desta informação antes de entrar em contato com o vendedor. Este rodapé é fixo e idêntico para todas as telas do Menu de Marcas.

Caso o usuário queira retornar à tela inicial (Homepage), poderá clicar no primeiro botão do cabeçalho "Home", que está localizado ao lado do Menu de Marcas e está presente em todas as telas do site.

## Tecnologias Utilizadas e Hospedagem do site

Para a elaboração da página web serão utilizadas as seguinte linguagens:
- De marcação: HTML
- De esilização: CSS
- De programação: JavaScript e JSON

Como ferramentas de diagramação será utilizado o Figma.
- Figma (https://www.figma.com/)

Como ferramentas de suporte ao design serão utilizados os seguintes sites:
- Coolors.co (https://coolors.co/palettes/trending)
- Flatcon (https://www.flaticon.com/br/)

Serão utilizadas também APIs para as seguinte redes sociais: Facebook, Instagram e Whatsapp.

Para a elaboração do código será utilizado o Visual Studio Code (VS Code).

A hospedagem do site se dará na plataforma Github Pages, que tem integração com o Github.
- Github Pages (https://pages.github.com/)

Na Figura 9 é apresentado o Diagrama de Componentes, que integra essas tecnologias.

