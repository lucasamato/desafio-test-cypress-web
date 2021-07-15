///<reference types="cypress"/>

describe('Validar fluxo de compra de produto', () => {

    beforeEach(() => {

        cy.visit('/');
        
    });

    it('Buscar por produto', () => {

        
        cy.searchProduct();
        cy.selectProduct();
                   
        
    });

    it('Buscar produto e adicionar ao carrinho', () => {

       
        cy.searchProduct();
        cy.selectProduct();
        cy.addCart();
        cy.validateCart();
        
    });

    it('Adicionar produto ao carrinho, continua compras e validar se o produto permanece no carrinho', () => {

      
        cy.searchProduct();
        cy.selectProduct();
        cy.addCart();
        cy.validateCart();
        cy.continueShop();
        cy.cartButton();
    
 
    });

    it('Adicionar produto ao carrinho, avançar para checkout e validar se produto permanece no carrinho', () => {
       
        cy.searchProduct();
        cy.selectProduct();
        cy.addCart();
        cy.validateCart();
        cy.buttonCheckout();
        

        
    });



    


});