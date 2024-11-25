describe("Encontrar uma vaga", () => {
  it("Acessar o site da empresa Dot Digital Group e encontrar uma vaga", () => {
    cy.visit("https://dotgroup.com.br/");
    cy.contains("a", "Vagas").should("be.visible").click(); // Clica no menu "Vaga"

    cy.get("#popmake-30986").within(() => {
      cy.get("button.pum-close").click();
    }); // Fecha a modal

    cy.get(
      'a[href="https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f"]'
    ).click(); //clica na vaga escolhida
  });
});
