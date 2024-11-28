describe("Acessar cadastro iniciado e clicar no botão Preencher formulário", () => {
  it("Inserir e-mail já cadastrado", () => {
    cy.visit(
      "https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/"
    ); // Acessa a página da vaga escolhida
    cy.get(
      'a[href="/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/candidatar?n=Analista+de+Testes"]'
    ).click(); // clica no botão "Candidatar-se"

    cy.get('input[id="email-verify"]')
      .click()
      .type("teste.teste13@teste.com.br"); //Preenche o campo e-mail
    cy.contains("button", "avançar").click(); // Clica no botão avançar
    cy.get('input[id="password"]').click().type("123456"); // Digita a senha
    cy.get('input[type="checkbox"]').check(); // seleciona o checkbox
    cy.contains("button", "Começar").click(); // clica no botão começar e envia o candidado para a próxima etapa
    cy.contains("button", "Preencher Formulário").click(); // clica no botão preencher formulário e envia o candidato para a próxima etapa
    cy.contains("button", "Importar Currículo").click(); // clica no botão importar cv e abre uma modal
    cy.get(".modal"); // identifica a modal para verificação das informações do cv
    cy.contains("button", "Continuar").click(); //clica no botão continuar para inserir informações não encontradas

    ////////////////////////
  });
});
