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
