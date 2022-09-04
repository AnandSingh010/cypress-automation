/// <reference types ="cypress" />

describe("mouse actions", () => {
  it("mouse actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#actions").invoke("removeAttr", "target").click();
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
    cy.get("#double-click").dblclick();
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($el) => {
        expect($el).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
