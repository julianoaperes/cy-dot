describe("Cadastrar um candidato", () => {
  it("Efetuar cadastro", () => {
    cy.visit(
      "https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/"
    ); // Acessa a página da vaga escolhida
    cy.get(
      'a[href="/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/candidatar?n=Analista+de+Testes"]'
    ).click(); // clica no botão "Candidatar-se"

    cy.get('input[id="email-verify"]').click().type("DIGITAR E-MAIL"); //Digita o e-mail
    cy.contains("button", "avançar").click(); // Clica no botão avançar
    cy.get('input[type="tel"]').click().type("14912233445"); // Digita o número do celular
    cy.get('input[id="firstName"]').click().type("QA"); // Digita o primeiro nome
    cy.get('input[id="lastName"]').click().type("Tester"); // Digita o sobrenome
    cy.get('input[id="newpassword"]').click().type("123456"); // Digita a senha
    cy.get('input[id="accept-tos"]').click(); // Marca o checkbox
    cy.get('input[id="register-button"]').click(); // Clica no botão registrar
  });
});
