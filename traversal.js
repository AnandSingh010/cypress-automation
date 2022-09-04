/// <reference types ="cypress" />

describe("tarversal", () => {
  it("tarversal", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#data-table").invoke("removeAttr", "target").click();
    cy.get(".traversal-breadcrumb")
      .children(".active")
      .should("contain", "Contact Us");
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
    cy.get(".traversal-drinks-list >*").eq(2).should("contain", "Milk");
    cy.get(".btn-group-toggle >*")
      .filter(".active")
      .should("contain", "Button-1");
    cy.get(".traversal-pagination >*").find("a").should("have.length", 7);
    cy.get(".traversal-table >tbody>tr>td").first().should("contain", "Andy");
    cy.get(".traversal-table >tbody>tr>td").last().should("contain", "Scott");
    cy.get(".traversal-drinks-list >*").contains("Tea").nextAll();
    cy.get("#coffee").nextUntil("#espresso");
    cy.get(".traversal-button-states >*")
      .not(".disabled")
      .should("not.have.class", "disabled");
    cy.get(".traversal-mark")
      .parent()
      .should("contain", "Lorem ipsum dolor sit amet");
    cy.get(".traversal-cite").parents().should("match", "blockquote");
    cy.get("#sugar").prev().contains("Espresso");
    cy.get(".menu >*").prevAll().should("have.length", 2);
    cy.get("#veggie").prevUntil().should("have.length", 6);
    cy.get(".traversal-button-states >*")
      .siblings()
      .should("have.length.above", 2);
  });
});
