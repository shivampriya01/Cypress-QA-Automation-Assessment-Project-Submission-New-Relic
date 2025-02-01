// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ***********************************************

//cypress will not fail test and return false if any exception occurs
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

//Custom command to retrieve href attribute value from all links on the page and checking it is active or not
Cypress.Commands.add('checkPageLinks', (locator) => {
      cy.get(locator).should('be.visible').each(($link) => {
        const link_href = $link.attr('href');
       if (link_href && !link_href.startsWith('http')) {
          cy.request(link_href).its('status').should('eq',200);
        }
      });
    });