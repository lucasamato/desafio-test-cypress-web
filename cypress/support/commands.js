
import locators from './pages/elements'

//Buscar produto através do campo de busca
 Cypress.Commands.add('searchProduct', () => {

    cy.intercept('/index.php?controller=search&q=faded+short*').as('getFadedShort')
    cy.get(locators.PRODUCT.SEARCH).type(locators.PRODUCT.ITEM)
    cy.wait('@getFadedShort')

  });

//Adicionar produto ao carrinho

Cypress.Commands.add('selectProduct', () => {

    cy.contains(locators.PRODUCT.SELECT).click() 
    
  });

  //Adiciona o produto ao carrinho

  Cypress.Commands.add('addCart', () => {

    cy.get(locators.CART.BUTTON).should('be.visible').click()
    cy.contains(locators.CART.EXPECT).should('be.visible')
    
  });

//Valida que o produto foi adicionado com sucesso

   Cypress.Commands.add('validateCart', () => {

    cy.contains(locators.CART.EXPECT).should('be.visible')
    
  });

//Clica no botão de Continue Shopping dentro do carrinho

  Cypress.Commands.add('continueShop', () => {

    cy.contains(locators.CART.CONTINUE_BUTTON).should('be.visible').click()
    
  });

  //Clica no carrinho

  Cypress.Commands.add('cartButton', () => {

    cy.get(locators.CART.CART_BUTTON).should('be.visible').click()
    
  });

  //Valida o produto no carrinho

  Cypress.Commands.add('cartItem', () => {

    cy.contains(locators.PRODUCT.ITEM)
    
  });

//Clica no botão de checkout a valida item selecionado

  Cypress.Commands.add('buttonCheckout', () => {

    cy.contains(locators.CART.CHECKOUT_BUTTON).click()
    cy.contains(locators.PRODUCT.ITEM)
    cy.get(locators.CART_SUMMARY.TOTAL_PRICE).should('be.not.empty')
    
  });




  

  



