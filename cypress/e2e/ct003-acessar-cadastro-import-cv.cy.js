describe("Acessar cadastro iniciado e clicar no botão importar CV", () => {
  it("Inserir e-mail já cadastrado", () => {
    cy.visit(
      "https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/"
    ); // Acessa a página da vaga escolhida
    cy.get(
      'a[href="/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/candidatar?n=Analista+de+Testes"]'
    ).click(); // clica no botão "Candidatar-se"

    cy.get('input[id="email-verify"]').click().type("Digitar o e-mail"); //Digita o e-mail
    cy.contains("button", "avançar").click(); // Clica no botão avançar
    cy.get('input[id="password"]').click().type("123456"); // Digita a senha
    cy.get('input[value="login"]').click().wait(2000); // Clica no botão "Login"
    ////////////////////////
    //APRESENTAÇÃO
    cy.contains("h2", "Olá QA,").should("be.visible"); //confirmação do nome do candidato
    cy.get('input[type="checkbox"]').check(); //Marca o checkbox
    cy.contains("button", "Começar").click(); // Clica no botão "Começar"
    /////////////////////////
    //DADOS PESSOAIS: IMPORTAR CURRICULO PDF
    cy.contains("button", "Importar currículo PDF").click();
    cy.get(".modal");
    cy.contains("button", "Cancelar").click();
    cy.contains("button", "Importar currículo PDF").click();
    cy.contains("button", "Continuar").click();

    cy.get('input[id="cv-file"]').selectFile("cypress/fixtures/cv.1.pdf", {
      force: true,
    });
  });
});
