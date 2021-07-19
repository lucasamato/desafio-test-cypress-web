
When(/^digito o nome de um produto no campo de busca$/, () => {
	cy.searchProduct();
});

Then(/^o produto será exibido na busca$/, () => {
	return true;
});

Then(/^eu clico no produto$/, () => {
	cy.selectProduct();
});

Then(/^eu sou direcionado para a página do produto$/, () => {
	return true;
});

		



