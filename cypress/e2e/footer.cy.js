describe('Footer Links Navigation Check', () => {
    it("Verifying Footer Links", () => {
        cy.visit("https://weratedogs.com/");
        
        //Reusable component called from command.js to check all links in footer
        cy.checkPageLinks("footer a");
    });
});