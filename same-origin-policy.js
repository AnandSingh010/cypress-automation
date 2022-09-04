/// <reference types ="cypress" />

describe("cypress same origin policy", () => {
  it("superdomains", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.visit("https://www.automationteststore.com/");
  });
  it("subdomains", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".info_links_footer > li:nth-of-type(5) > a").click();
  });
});
