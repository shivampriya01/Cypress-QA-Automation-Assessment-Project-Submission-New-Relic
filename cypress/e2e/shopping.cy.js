describe('Search for Hoodie product and Validate cart for product and its specifications', () => {
it("Search and Add Items to Shopping Cart", () => {
    
    //Declaring the product specifications
    let search_product = "Classic Hoodie - Alpine Green";
    let preferred_size = "Medium";
    let order_quantity = 4;
    cy.visit("/");

    //Searching Product and selecting from the suggested Search results
    cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
    cy.get('[id="Search-In-Modal"]').type(search_product);
    cy.get("#predictive-search-results-products-list")
      .should("contain", search_product)
      .click();

    //Choosing preferred Size & Quantity to order for selected product
    cy.get("h1")
      .should("contain", search_product);
    cy.get("label").contains(preferred_size).click({ force: true });
    for (let quantity = 1; quantity <= order_quantity; quantity++)
      cy.get('[class="quantity__button"]').eq(-1).click();
    cy.get("button").contains("Add to cart").click({ force: true });

    //No Thanks popup getting displayed four times when tried for viewing cart in this website
    let count_No_Thanks_popup = 4;
    for (let count = 1; count <= count_No_Thanks_popup; count++) {
        cy.contains("No Thanks").click();
    }
    
    //Validating whether selected product added in cart with right specifications
    cy.get(".upcart-product-title-link ").should("have.text", search_product);
    cy.get('[class="upcart-item-option-value"]').should("have.text", preferred_size);
    cy.get("input.upcart-product-quantity-input").should("have.value", order_quantity);
  });
});  