/// <reference types="cypress" />
describe("variables Expl", () => {
  it("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    const a = cy
      .get("a[href*='product/category&path']")
      .contains("Hair Care")
      .click();
    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("product");
    cy.get("@product").its("length").should("be.gt", 4);
    cy.get("@product").should("include", "Seaweed Conditioner");
  });
  it("expl about the alias conecpts", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").should("have.length", 16).as("ele");
    cy.get("@ele")
      .find(".productcart")
      .invoke("attr", "title")
      .should("contain", "Add to Cart");
  });
  it.only("expl", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("ele");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("ele2");
    var itemTotal = 0;

    cy.get("@ele").then(($item) => {
      var total = 0;
      var ele = $item.split("$");
      var i;
      for (i = 0; i < ele.length; i++) {
        cy.log(ele[i]);
        total += Number(ele[i]);
      }
      itemTotal += total;
      cy.log(total);
    });
    cy.get("@ele2")
      .then(($item2) => {
        var total2 = 0;
        var ele2 = $item2.split("$");
        var i;
        for (i = 0; i < ele2.length; i++) {
          cy.log(ele2[i]);
          total2 += Number(ele2[i]);
        }
        itemTotal += total2;
        cy.log(total2);
      })
      .then(() => {
        cy.log("total amount is :" + itemTotal);
        expect(itemTotal).to.eq(648.5);
      });
  });
});
