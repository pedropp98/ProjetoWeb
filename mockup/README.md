# ProjetoWeb
Projeto desenvolvido para a disciplina SCC0219

## Integrantes
<b>
* Lucas Pereira Pacheco NºUSP: 12543930 <br>
* Pedro Afonso Perez Chagas NºUSP: 7777970 <br>
* Ramon Moreira Machado NºUSP: 12543179 <br>
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

* **Home:**
![image](https://user-images.githubusercontent.com/40775728/236725210-b03fc960-c86a-48e1-99fe-6404dda4d2b6.png)


* **Login**
Tela de login para cliente
![image](https://user-images.githubusercontent.com/86575893/236719933-4385a201-c968-4040-90fa-09c606384204.png)

Tela de login para administrador
![image](https://user-images.githubusercontent.com/86575893/236720019-c0311e51-41b1-4da0-a784-6dd8d668b313.png)

* **Registrar**
Tela de registro para cliente
![image](https://user-images.githubusercontent.com/86575893/236720183-a6738b69-d668-457d-9932-6ac593e3e4cb.png)

Tela de registro para Administrador
![image](https://user-images.githubusercontent.com/86575893/236720209-d11a691e-4cba-4e91-9eaf-99a580ecb367.png)

* **Administrador**:

Se você for um administrador, entrará em nosso sistema pela Homepage, fará login (ou se registrará) e irá para a "Página de Administrador". 
Nela você poderá escolher o que deseja fazer, desde cadastrar outros administradores no sistema, editar seu cadastro, ou "Ver os produtos", que pode tanto editar os produtos já cadastrados, como adicionar outros.

Tela inicial de Admin:
![image](https://user-images.githubusercontent.com/86575893/236723577-e1e278a0-8500-4e82-8963-bb08e243d6b7.png)


* **Cliente**:

Se você for um cliente, entrará em nosso sistema pela Homepage, fará login (ou se registrará) e irá para a "Página de Cliente". 
Nela você verá os produtos disponíveis em nossa loja e poderá adicioná-los ao carrinho, ou então editar seus dados cadastrais. Se adicionar um produto ao carrinho, poderá ir para a tela do carrinho para finalizar a compra, ou escolher continuar comprando.

Tela inicial do Cliente:
![image](https://user-images.githubusercontent.com/86575893/236723341-52d8ad55-1642-4735-9f7b-c2e91389879a.png)


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

Ou acesse em [lbama.com.br](https://lbama.com.br/html/homepage.html)

<div id='problemas'/> 

## Problemas

<div id='comentarios'/>

## Comentários

 



