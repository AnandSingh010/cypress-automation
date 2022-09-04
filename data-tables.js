/// <reference types ="cypress" />

describe("validate data tables", () => {
  it("validate data tables", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#data-table").invoke("removeAttr", "target").click();
    var userdetails = [];
    let numb = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userdetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userdetails.length; i++) {
          // cy.log(userdetails[i])
          if (Number(userdetails[i])) {
            numb += Number(userdetails[i]);
          }
        }
        cy.log(numb);
        expect(numb).to.be.eq(322);
      });
  });

  it.only("validate user name with age", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#data-table").invoke("removeAttr", "target").click();
    cy.get("#thumbnail-1 td:nth-child(2)").each(($ele, index, $list) => {
      const text = $ele.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userage = age.text();
            expect(userage).to.eq("80");
          });
      }
    });
  });
});
