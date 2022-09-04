/// <reference types ="cypress" />
import "cypress-iframe";

describe("handling iframe and modals", () => {
  it("handling iframe", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");

    cy.get("#iframe").invoke("removeAttr", "target").click();

    cy.frameLoaded("#button-find-out-more").click();
  });
  it("check css", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions h1")
      .should("include.text", "ACTIONS")
      .and("have.css", "color")
      .then(cy.log);
  });
  it("check css", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.window().then((win) => {
      cy.stub(win).get("#actions").click();
    });
  });
  it.only("check css", () => {
    cy.visit("https://webdriveruniversity.com/");
    // cy.window().then(win => {
    //     cy.stub(win,'open').as('open')
    // })
    // cy.get('#actions').click()
    // cy.get('@open').should('have.been.calledOnce')

    // cy.get('#actions').should($a => {
    //     expect($a.attr('href'), 'href').to.equal('Actions/index.html')
    //     // expect($a.attr('target'), 'target').to.equal('_blank')
    //     $a.attr('target', '_self')
    //   }).click()
    // //   cy.location('').should('equal', 'Actions/index.html')
    // })

    cy.get("#actions").then(
      ("click",
      (e) => {
        e.add();
        window.open("Actions/index.html");
      })
    );
    cy.window().then((win) => {
      cy.stub(win, "open").as("open");
    });
    cy.get("#actions").click();
    cy.get("@open").should(
      "have.been.calledOnceWithExactly",
      "Actions/index.html"
    );
  });

  // cy.window().then(win => {
  //     cy.stub(win, 'open').callsFake((url, target) => {
  //       expect(target).to.be.undefined
  //       // call the original `win.open` method
  //       // but pass the `_self` argument
  //       return win.open.wrappedMethod.call(win, url, '_self')
  //     }).as('open')
  //   })
  //   cy.get('#actions').click()
  //   cy.get('@open').should('have.been.calledOnceWithExactly', 'Actions/index.html')
});

// })
