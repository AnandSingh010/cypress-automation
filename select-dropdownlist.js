/// reference types="cypress" />

describe("handeling dropdown list", () => {
  it("validate dropdown list", () => {
    cy.origin("https://webdriveruniversity.com/");
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts > .thumbnail > .section-title").click();
    cy.exec(6000);
    //   cy.get('#dropdown-menu-lists-2').select('maven')
    //   cy.wait(6000)
  });
});
