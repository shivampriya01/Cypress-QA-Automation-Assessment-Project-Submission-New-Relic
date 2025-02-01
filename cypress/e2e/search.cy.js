describe('Search for Hoodie and do assertions', () => {
beforeEach(() => {
    cy.visit("/");
  });
  
  it('Test Fail when searched for "Hoodie"', () => {
    //Search for Hoodie and fail the assertion
    cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
    cy.get('[id="Search-In-Modal"]').type("Hoodie");

    cy.get("#predictive-search-results-groups-wrapper").should("not.contain","Hoodie");
  });
  
  it('Test Pass when searched for "Hoodie"', () => {
    //Search for Hoodie and pass the assertion
    cy.get('[class="icon icon-search"]').eq(1).click({ force: true });
    cy.get('[id="Search-In-Modal"]').type("Hoodie");

    cy.get("#predictive-search-results-groups-wrapper").should("contain","Hoodie");
  });
});