/// <reference types="cypress" />
describe("variables expl", () => {
  it("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    const a = cy.get("a[href*='product/category&path']").contains("Makeup");
    a.click();
    const b = cy.get("a[href*='product/category&path']").contains("Skincare");

    b.click();
  });
  it("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    const a = cy.get("a[href*='product/category&path']").contains("Makeup");
    a.click();
    cy.get("h1 .maintext").then(($text) => {
      const text = $text.text();
      cy.log("text is " + text);
      expect(text).is.eq("Makeup");
    });
  });
  it.only("expl", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    // cy.contains("#maincontainer"," Contact Us").find('#field_11').contains('First name:')
    cy.contains("#maincontainer", " Contact Us").then((text) => {
      const firstName = text.find("#field_11").text();
      expect(firstName).contain("First name:");
    });
  });
});
