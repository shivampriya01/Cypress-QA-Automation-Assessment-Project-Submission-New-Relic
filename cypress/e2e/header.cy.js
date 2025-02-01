describe('Header Links Navigation Check', () => {
    it("Verifying Header Links", () => {
        cy.visit("/");
        cy.get(".header__menu-item").should('be.visible').each(($link) => {
            //Retrieving href  for headers and cheking it is active or not
            const link_href = $link.attr('href');
            if (link_href && !link_href.startsWith('http')) {
                cy.request(link_href).its('status').should('eq', 200);
            }
        });
    });
});