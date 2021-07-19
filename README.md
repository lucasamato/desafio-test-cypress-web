# Deafio automação de testes web com Cypress

## Test Strategy

Os testes foram criadas utilizando a escrita Gherkim utilizando a prática do BDD com cucumber, para isso foi utilizada a biblioteca cypress-cucumber-preprocessor que permite a integração do cucumber com Cypress

https://www.npmjs.com/package/cypress-cucumber-preprocessor 
## Dependencies

* Node
* Cypress
* Mocha-awesome
* cypress-cucumber-preprocessor
* mocha
* mochawesome
* mochawesome-merge
* mochawesome-report-generator

## Project folder structure

*  As features de testes estão no caminho **cypress/integration/Cucumber**

*  Os comandos customizados para os testes estão na pasta de comandos padrão do cypress **cypress/commands.js**

## Page Objects

* Os elementos das páginas que foram utilizados nos testes estão no caminho **cypress/support/pages/elements.js**

## Covered sceneries

Feature: Carrinho de compra
    Como usuario do ecommerce, desejo adicionar produtos ao carrinho de compra

Scenario: Buscar e adicionar o produto no carrinho
    Given que eu acesso o site do ecommerce
    When digito o nome de um produto no campo de busca
    Then o produto será exibido na busca
    And eu clico no produto
    Then eu sou direcionado para a página do produto
    And adiciono o produto ao carrinho
    And recebo uma confirmação de que o produto foi adicionado com sucesso

---------------------------------------------------------------------------------

Feature: Campo de busca de produto
    Como usuario do ecommerce, desejo buscar um produto para poder adicionalo ao carrinho

Scenario: Buscar produto
    Given que eu acesso o site do ecommerce
    When digito o nome de um produto no campo de busca
    Then o produto será exibido na busca
    And eu clico no produto
    Then eu sou direcionado para a página do produto


## Service URLs
| Environment     | URL                                                                          |
|-----------------|:-----------------------------------------------------------------------------|
| Production        | `http://automationpractice.com/index.php` |

## Running the project

```shell
npm install -D
```

## Comandos de execução dos testes com Cypress e Cucumber:

* Para abrir o dashboard do cypress para executar os testes em ambiente de produção:

```shell
npm run cy:open:cucumber
```

* Abrir o dashboard do cypress para executar os testes em ambiente local(necessário configurar a url em cypress/support/environment/local.json):

```shell
npm run cy:open:local 
```
* Para executar os testes em modo headles via linha de comando gerando relatório de execução:

```shell
npm run cy:run:cucumber
```

* Para abrir os relatório do Cucumber

```shell
npm run report:cucumber
```

* Limpa a pasta de relatórios

```shell
npm run report:clean
```




