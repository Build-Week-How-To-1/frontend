describe("Testing LoginForm inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3002/login");
  });

  it("Email input", () => {
    cy.get("#email")
      .type("tyso88@gmail.com")
      .should("have.value", "tyso88@gmail.com");
  });

  it("Password input", () => {
    cy.get("#password").type("asdfasdfa").should("have.value", "asdfasdfa");
  });
});
