/// <reference types="cypress" />
import "../../support/commands";
describe("variables expl", () => {
  it("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    const a = cy.get("a[href*='product/category&path']").contains("Hair Care");
    a.click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index of " + index + " is " + $el.text());
    });
  });
  it.only("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    const a = cy.get("a[href*='product/category&path']").contains("Hair Care");
    a.click();
    // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    //     if ($el.text().includes('Curls to straight Shampoo')) {
    //         cy.wrap($el).click()
    //     }
    // })
    cy.selectProduct("Curls to straight Shampoo");
  });
});
