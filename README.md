# ProjetoWeb
Projeto desenvolvido para a disciplina SCC0219

## Integrantes
<b>
* Lucas  NºUSP<br>
* Pedro  NºUSP<br>
* Ramon  NºUSP<br>
</b>

Tabelas de conteúdo 
 1. [Requisitos](#requisitos)
 2. [Descrição do Projeto](#descricao)
 3. [Comentários sobre o Código](#comentarioscodigo)
 4. [Plano de testes](#testes)
 5. [Resultados dos testes](#testesresultados)
 6. [Como faço para rodar o projeto?](#how)
 7. [Problemas](#problemas)
 7. [Comentários](#problemas)


<div id='requisitos'/>  

## Requisitos
Nossos requsitos não fogem de nada especificado no documento do trabalho. Nossa implementação foi feita inteiramente como especificado.

<div id='descricao'/>  

## Descrição do Projeto

### Sobre a entrega Atual

Nosso projeto consiste em um petshop, o iBama, contamos com diversos produtos para seus pets.

O sistema foi pensado tanto para o usuário cliente, que pode navegar com facilidade no site e encontrar facilmente o que deseja comprar, tanto para o administrador que vai gerenciar os produtos do site e fazer seu trabalho com facilidade!

Salientamos que nosso site foi feito utilizando HTML e CSS como aprendido em aula, inclusive com uma implementação responsiva para se ajustar a qualquer tamanho de tela e garantir uma melhor experiência do usuário.

Ao longo desse README, iremos mostrar diagramas e capturas de tela do sistema para facilitar a compreensão de nosso trabalho.

### Futuras entregas
Nosso sistema se tornará uma plataforma de e-commerce robusta e funcional. Os clientes poderão desfrutar de uma experiência de compra completa, começando pelo cadastro fácil e rápido. Eles terão a liberdade de atualizar suas informações pessoais conforme necessário e aproveitarão recursos de filtragem para encontrar os produtos desejados de forma mais eficiente. Além disso, poderão adicionar os produtos ao carrinho de compras e finalizar a compra de maneira conveniente.

Por outro lado, os administradores terão acesso a recursos exclusivos para gerenciar e expandir o catálogo de produtos. Eles poderão criar suas contas de administrador, modificar suas informações quando necessário e serão responsáveis por cadastrar novos produtos no sistema. Além disso, terão a capacidade de realizar alterações nos cadastros existentes, garantindo que as informações sejam sempre atualizadas e precisas.

Com essas funcionalidades abrangentes, nosso sistema promete oferecer uma experiência de compra agradável para os clientes e, ao mesmo tempo, fornecer às equipes administrativas todas as ferramentas necessárias para gerenciar efetivamente o processo de vendas e o catálogo de produtos.

#### Funcionalidades para os clientes:
* Se cadastrar;
* Alterar seus dados;
* Filtrar os produtos que quiser;
* Colocá-los no carrinho;
* Finalizar compra.

#### Funcionalidades para os administradores:

* Se cadastrar;
* Alterar seus dados;
* Cadastrar novos produtos;
* Alterar o cadastro de produtos;

obs.: Se verificarmos a necessidade de mais alguma funcionalidade, nós a adicionaremos.

#### Informações salvas no servidor

As informações salvas no servidor serão as providas pelos clientes e admins quando realizarem seu cadastro, as informações dos produtos cadastrados pelos administradores, das mudanças nos dados do administrador ou do cliente (quando for realizada alguma alteração) e das transações de compra do cliente.

Nas próximas entregas detalharemos cada um dos campos que serão necessários.

#### Diagrama de Navegação

![image](https://user-images.githubusercontent.com/86575893/236716216-4b33793e-3148-4f35-af76-21ba3fcc7da0.png)

Explicando o fluxo:

* **Administrador**:

Se você for um administrador, entrará em nosso sistema pela Homepage, fará login (ou se registrará) e irá para a "Página de Administrador". 
Nela você poderá escolher o que deseja fazer, desde cadastrar outros administradores no sistema, editar seu cadastro, ou "Ver os produtos", que pode tanto editar os produtos já cadastrados, como adicionar outros.

* **Cliente**:

Se você for um cliente, entrará em nosso sistema pela Homepage, fará login (ou se registrará) e irá para a "Página de Cliente". 
Nela você verá os produtos disponíveis em nossa loja e poderá adicioná-los ao carrinho, ou então editar seus dados cadastrais. Se adicionar um produto ao carrinho, poderá ir para a tela do carrinho para finalizar a compra, ou escolher continuar comprando.

<div id='comentarioscodigo'/> 

## Comentários sobre o código
Foram feitos os seguintes arquivos HTML (todos utilizando para nosso style.css)
* adminpage.html: é a pagina que nossos administradores verão ao entrarem no sistema, na qual ele pode fazer seu trabalho, como por exemplo, cadastrar produtos.

* clientpage.html: é a tela que nosso cliente vê ao entrar no sistema, nela ele consegue ver nossos produtos e conta com um filtro para facilitar sua busca

* homepage.html: é a pagina inicial de nosso sistema que ambos usuários vão ver sem precisar de login.

* login.html: é a página de login tanto para administradores quanto para clientes, na própria página você consegue selecionar o tipo de usuário.

* register.html: semelhante à de login, a tela de registrar serve tanto para administradores quanto para clientes, na própria página você consegue selecionar o tipo de usuário.

<div id='testes'/>

## Testes
Para as próximas entregas, essa seção vai contar com detalhes a implementação de testes automatizados nas entregas futuras, que serão focadas no JavaScript e Backend. Como essa primeira entrega é apenas CSS e HTML, concluimos que não seria relevante.

<div id='testesresultados'/>

## Resultados dos testes


<div id='how'/> 

## Como faço para rodar o projeto?
O passo a passo é bem simples, basta clonar o repositório do github e abrir no seu navegador os arquivos .html. Bem simples!

<div id='problemas'/> 

## Problemas

<div id='comentarios'/>

## Comentários

 



