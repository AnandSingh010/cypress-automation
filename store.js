/// <reference types ="cypress" />

describe("contact us page", () => {
  it("contact page", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick"); //.click()
    //#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname
  });
  it.only("test", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper")
      .find(".prdocutname")
      .eq(3)
      .click()
      .then((item) => {
        cy.log("selected item is" + item.text());
      });
  });
});
