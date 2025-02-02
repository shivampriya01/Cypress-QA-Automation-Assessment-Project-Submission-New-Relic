# Cypress QA Automation Assessment Project Submission: New Relic

## Introduction
This submission is submitted by Shivam Priya as part of QA Automation assessment for website - [WeRateDogs](https://weratedogs.com) (AUT) using Cypress. It contains all required test cases including support files along with script run commands. 
It also contains strategy test results for test prioritization considering right approach for prioritizing and balancing business needs and end users/customers experience for website - [CatAdoptionTeam](https://catadoptionteam.org/).
Please find the details -

---

## Project Details
- **Repository Link**: [https://github.com/shivampriya01/Cypress-QA-Automation-Assessment-Project-Submission-New-Relic.git](https://github.com/shivampriya01/Cypress-QA-Automation-Assessment-Project-Submission-New-Relic.git)
- **Application under Test**: [WeRateDogs](https://weratedogs.com)
- **Test Framework & Langauge**: Cypress with JavaScript
- **Command to Run all the tests from Command Line**
  ```bash
  npx cypress run --spec 'cypress/e2e/*'

```
OR (use '--headed' for Headed mode run)
  ```bash
  npx cypress run --headed
```
---

## Completed Tasks under Assessment Project

### Code Tests

1. **Code Test One Solution:**
   - Defined the site under test in the Cypress configuration file `cypress.config.js`.

2. **Code Test Two Solution:**
   - Implemented a test case (Verifying Header Links) to verify the links in the `<header>` navigation.
   - Test File: `cypress/e2e/header.cy.js`

3. **Code Test Three Solution:**
   - Implemented a reusable custom command (checkPageLink) for link checking under `cypress/support/command.js`.
   - Called the reusable command defined in command.js to verify the links in the `<footer>` navigation for the test case (Verifying Footer Links).
   - Test File: `cypress/e2e/footer.cy.js`

4. **Code Test Four Solution:**
   - Implemented a test case (Search and Add Items to Shopping Cart) to search and add an item - "Classic Hoodie - Alpine Green" to the shopping cart and perform assertions so that the correct item was added with specifications like size and quantity.
   - Test File: `cypress/e2e/shopping.cy.js`

5. **Code Test Five Solution:**
   - Implemented two test cases to search for "hoodie":
     - Negative Scenario: This test case (Test Fail when searched for "Hoodie) fails the assertion.
     - Positive Scenario: This test case (Test Pass when searched for "Hoodie") passes the assertion.
   - Test File: `cypress/e2e/search.cy.js`

### Strategy Test
- **Testing Strategy and Prioritization for Cat Adoption Team Website (with sense of Sales Led Growth) - [CatAdoptionTeam](https://catadoptionteam.org/)**
  1. **Cat Adoption**
     - Enable ease of cat adoption process for users by providing smooth navigation between sections and pages. It shall includes clear information on how to adopt, adoption fees, policies, locations and a list of available cats and kittens.
     - End Goal: To convert more adoption of cats by offering seaamless workflows for information and forms, increasing sales for organization across various geo-locations and categories of cats.
       ```bash
       it("Should display right steps cards for adoption process page", () => {});
       it("Should navigate to policies and fees page from 'How To Adopt' page", () => {});
       it("Should display all details of cat including adoption fees for selected cat", () => {});
       it("Should be able to search a cat by pet name or ID on Adoption page", () => {});
       it("Should be able to filter cat by selecting and clearing options for 'Location', 'Size,, 'Sex' and 'Age'on Adoption page", () => {});
       it("Should validate required fields in the adoption form for selected cat", () => {});
       it("Should ask and allow user to sign in using email when user click 'Appply to Adopt' btn", () => {});
       it("Should submit the adoption form and show a confirmation message", () => {});
       it("Should display location details with map when 'Locations' page is accessed", () => {});
       ```

  2. **Donation**
     - Encourage and generate more donations by ensuring easy and safe payment process. Confirmation message and thanking mail for relation-building, trust and spread of word encouraging more donations.
     - End Goal: To encourage more donation for initiatives for cats' welfare and adoption process of cats.
       ```bash
       it("Should navigate to Support page on clicking on 'Donate' button on HomePage", () => {});
       it("Should navigate to Monthly Giving program page on clicking on 'Monthly Giving' button on Support Page", () => {});
       it("Should navigate to Other Ways to Give page on clicking on 'Other Ways to Give' button on Support Page", () => {});
       it("Should display predefined donation amounts and a input option in the 'Choose Amount' section in dialog form", () => {});
       it("Should allow users to select between one-time and recurring donations in 'Choose Amount' section in dialog form", () => {});
       it("Should fill user details in 'Information' dialog form after 'Choose Amount' section", () => {});
       it("Should validate payment details and display errors for invalid entries in dialog form", () => {});
       it("Should navigate to corresponding links for accessing on 'Other Ways to Give' page", () => {});
       it("Should process the payment and show a confirmation page after donation", () => {});
       it("Should send a thank-you email with a donation receipt after donation", () => {});
       ```

  3. **Becoming Volunteer**
     - Information for users to know about volunteer opprtunities and have easy sign-up form and login process. Make sure they receive mail after applying and selection/rejection mail if selecetd for the process.
     - End Goal: To foster culture of volunteershio and fostering programs enabling a great ecosystem for spokesperson for adoption and intivaties for cat welfare.
       ```bash
       it("Should display a list of available volunteer roles", () => {});
       it("Should display a list of current volunteers with details", () => {});
       it("Should be navigated to Volunteer site when clicked on 'Current Volunteers' button on Volunteer page", () => {});
       it("Should be navigated to Kitten Foster Program page when clicked on 'Foster Program' button on Volunteer page", () => {});
       it("Should allow all volunteers to sign up separately", () => {});
       it("Should navigate to third-party site for logging in to become a volunteer", () => {});
       it("Should submit the volunteer form after submitting correct and right details", () => {});
       it("Should send a mail to user appointing to becoma a volunteer after form is submitted", () => {});
       it("Should send a selection mail to user if selected or rejected for volunteership", () => {});
       ```

  **Reason for Prioritization with sense of Sales Led Growth -**
  1. *Cat Adoption* is prioritized first because the core objective is to place cats by finding homes for them. This component is major sales generating for the whole website across various geo-locations.
  2. *Donation* further helps and supports the organization's sustainability and mission for initiatives.
  3. *Becoming Volunteer* ensures operational support for ongoing efforts increasing engagement and accomplishments around initiatives like fostering.

  Considering these crucial and high-impact feature workflows ensures shift-left testing with better results in user retention, engagement and ROI aligning the organization's goals while providing high value to users as well.

---

## Process for Running the Tests under Assessment Project
1. Clone the repository locally:
   ```bash
   git clone https://github.com/shivampriya01/Cypress-QA-Automation-Assessment-Project-Submission-New-Relic.git
   ```
2. Navigate to the `qa` directory:
   ```bash
   cd qa
   ```
3. Install dependencies using npm:
   ```bash
   npm install
   ```
4. Open the Cypress Test Runner:
   ```bash
   npx cypress open
   ```
5. Run the tests using the Test Runner interface.
---

## Notes
- `cypress/e2e` folder contains all tests.
- `cypress/support/commands.js` has custom command for link validation (as part of reusability). 
- `cypress.config.js` is used for updating the Cypress related configurations. 

---

## Code Repository Structure
```
[qa/]
├── cypress/
│   ├── e2e/
│   │   ├── footer.cy.js
│   │   ├── header.cy.js
│   │   ├── search.cy.js
│   │   └── shopping.cy.js
│   ├── fixtures/*
│   ├── screenshots/*
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

## Remarks
Please go ahead and use this assessment project to run test automation scripts and validate accordingly.
For any further clarifications/details, feel free to reach out. Thanks!
