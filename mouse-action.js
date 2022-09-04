/// < reference types="Cypress" />

describe("mouse action", () => {
  it("validate scroll  action", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it.skip("validate scroll  action", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mouseover")
      .trigger("mouseup", { force: true });
  });
});
