/// <reference types ="cypress" />

// const { data } = require("cypress/types/jquery");

describe("contact us page", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
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
    cy.get("@user").then((user) => {
      cy.get('[name="first_name"]').type(user.firstname);
      cy.get('[name="email"]').type(user.email);
    });
    cy.title().should("include", "WebDriver | Contact Us");

    cy.get('[name="last_name"]').type("test");

    cy.get('[type="submit"]').click();
  });
});
