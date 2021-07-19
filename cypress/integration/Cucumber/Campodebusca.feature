Feature: Campo de busca de produto
    Como usuario do ecommerce, desejo buscar um produto para poder adicionalo ao carrinho

Scenario: Buscar produto
    Given que eu acesso o site do ecommerce
    When digito o nome de um produto no campo de busca
    Then o produto será exibido na busca
    And eu clico no produto
    Then eu sou direcionado para a página do produto
    