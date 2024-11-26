describe("Acessar cadastro iniciado e concluí-lo", () => {
  it("Inserir e-mail já cadastrado", () => {
    cy.visit(
      "https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/"
    ); // Acessa a página da vaga escolhida
    cy.get(
      'a[href="/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/candidatar?n=Analista+de+Testes"]'
    ).click(); // clica no botão "Candidatar-se"

    cy.get('input[id="email-verify"]')
      .click()
      .type("teste.teste08@teste.com.br"); //Digita o e-mail
    cy.contains("button", "avançar").click(); // Clica no botão avançar
    cy.get('input[id="password"]').click().type("123456"); // Digita a senha
    cy.get('input[value="login"]').click().wait(2000); // Clica no botão "Login"
    ////////////////////////
    //APRESENTAÇÃO
    cy.contains("h2", "Olá QA,").should("be.visible"); //confirmação do candidato
    cy.get('input[type="checkbox"]').check(); //Marca o checkbox
    cy.contains("button", "Começar").click(); // Clica no botão "Começar"
    /////////////////////////
    //DADOS PESSOAIS: IMPORTAR CURRICULO PDF
  });
});
