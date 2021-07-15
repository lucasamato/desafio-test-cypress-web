

const locators = {
    
    PRODUCT:{
        SEARCH:'#search_query_top',
        SELECT:'T-shirts > Faded Short Sleeve T-shirts',
        ITEM:'Faded Short Sleeve'
 
    },

    CART:{
        BUTTON:'button[name="Submit"]',
        EXPECT:'There is 1 item in your cart.',
        CONTINUE_BUTTON: 'Continue shopping',
        CHECKOUT_BUTTON: 'Proceed to checkout',
        CART_BUTTON: '[title="View my shopping cart"]',
       
    },

    CART_SUMMARY:{

       TOTAL_PRICE:'#total_price',
       
    },


   
}

export default locators;
