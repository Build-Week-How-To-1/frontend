describe("Testing HowToForm inputs", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3002/howto-form");
  });

  it("Title input", () => {
    cy.get("#title").type("Cool Title").should("have.value", "Cool Title");
  });

  it("Introduction input", () => {
    cy.get("#introduction")
      .type("Cool Intro")
      .should("have.value", "Cool Intro");
  });

  it("Steps input", () => {
    cy.get("#steps").type("Cool Steps").should("have.value", "Cool Steps");
  });

  it("Tips input", () => {
    cy.get("#tips").type("Cool Tips").should("have.value", "Cool Tips");
  });
});
