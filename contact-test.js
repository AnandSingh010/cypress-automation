/// <reference types ="cypress" />

import "../../support/commands.js";

// const { data } = require("cypress/types/jquery");

describe("contact us page", () => {
  beforeEach(function () {
    cy.fixture("credentials").then(function (data) {
      // this.data = data;
      globalThis.data = data;
    });
  });
  it("contact page", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    cy.get("#contact-us")
      .should("have.attr", "href")
      .and("include", "Contact-Us");
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ force: true })
      .then(($el) => {
        const a = $el.text();

        cy.log("clicked lin is" + a);
      });
    cy.title().should("include", "WebDriver | Contact Us");
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type('test')
    // cy.get('[name="email"]').type('test@gmail.com')
    // cy.get('[type="submit"]').click()

    cy.webdrivercontact(Cypress.env("firstname"));
  });
});
