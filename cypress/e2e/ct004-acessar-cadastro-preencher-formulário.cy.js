describe("Acessar cadastro iniciado, clicar no botão Preencher formulário e seguir com o processo até o final.", () => {
  it("Inserir e-mail já cadastrado", () => {
    // Localizando a vaga desejada no site
    cy.visit(
      "https://dotgroup.enlizt.me/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/"
    ); // Acessa a página da vaga escolhida
    cy.get(
      'a[href="/vagas/21c140d0-84cd-11ef-b4a9-a97485d18d3f/candidatar?n=Analista+de+Testes"]'
    ).click(); // clica no botão "Candidatar-se"
    // Fazendo login do candidado
    cy.get('input[id="email-verify"]').click().type("teste.16@teste.com.br"); //Preenche o campo e-mail
    cy.contains("button", "avançar").click(); // Clica no botão avançar
    cy.get('input[id="password"]').click().type("123456"); // Digita a senha
    cy.get('input[value="login"]').click();
    // Passando pela aba "apresentação"
    cy.get('input[type="checkbox"]').check(); // seleciona o checkbox
    cy.contains("button", "Começar").click(); // clica no botão começar e envia o candidado para a próxima etapa

    // Aba Dads Pessoais | Iniciando atravé do botão "Preencher Formulário"
    cy.contains("button", "Preencher Formulário").click(); // clica no botão preencher formulário e envia o candidato para a próxima etapa
    cy.contains("button", "Importar currículo PDF").click(); // clica no botão importar cv e abre uma modal de instruções do arquiivo
    cy.get(".modal"); // identifica a modal
    cy.contains("button", "Continuar").click(); //clica no botão continuar da modal e direciona o candidato a buscar o arquivo em seu computdaro
    cy.get('input[id="cv-file"]').selectFile("cypress/fixtures/cv.pdf", {
      force: true,
    });
    //Modal de informações incompletas
    cy.get(".modal");
    cy.contains("button", "Continuar").click();

    //ETAPA DE INSERÇÃO DAS INFORMAÇÕES NÃO ENCONTRADAS NO CV | DADOS PESSOAIS
    cy.get(".data-list-form active");
    cy.get('input[id="fix-title"]').click().type("TesteTeste");
    cy.get('textarea[id="fix-description"]')
      .click()
      .type("testestestestestesteste");
    cy.get("select")
      .select("Tecnologia")
      .should("have.value", "f8e5cd4e-997c-11e8-9fe3-029ed1301c15");
    cy.contains("button", "Continuar").click();
    //Modal de confirmação
    cy.get(".modal");
    cy.contains("button", "Fechar").click();
    cy.contains("button", "Continuar").click();

    // Carta de apresentação
    cy.contains("button", "Enviar arquivo").click(); //clica no botão "Enviar arquivo"
    cy.get('input[id="cv-file"]').selectFile("cypress/fixtures/carta.pdf", {
      force: true,
    }); //Faz o upload do arquivo
    cy.contains("button", "Continuar").click();

    // Questionário 1/2
    cy.contains("button", "Continuar").click();
    // Qual a sua pretensão salarial no CLT?
    cy.get('input[type="number"]').click().type(3000);
    cy.contains("button", "Continuar").click();
    // Você possui algum vínculo de parentesco ou é companheiro(a) afetivo(a) de alguém que trabalha no DOT? Se sim, informe o nome completo!
    cy.get("textarea").click().type("testestestestesteste");
    cy.contains("button", "Continuar").click();
    //O que você espera encontrar no DOT?
    cy.get("textarea").click().type("testestestestesteste");
    cy.contains("button", "Continuar").click();
    //Compartilhe com a gente o link do seu portfólio! =)
    cy.get("textarea").click().type("testestestestesteste");
    cy.contains("button", "Continuar").click();
    //Você ja trabalhou no modelo híbrido (alguns dias da semana no escritório e outros em homeoffice) ou 100% home office? Se sim, nos conte qual modelo você mais se identifica e descreva para gente como foi essa experiência.
    cy.get("textarea").click().type("testestestestesteste");
    cy.contains("button", "Continuar").click();
    //Somos uma empresa anywhere office!! E para ...
    cy.get('input[value="0"]').click();
    cy.contains("button", "Continuar").click();
    //Questionário 2/2
    cy.contains("button", "Continuar").click();
    // Você tem mais de 2 anos de experiência com técnicas e tipos de testes de software (testes funcionais, testes de regressão e não-funcionais)?
    cy.get('input[value="0"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5, como você avalia sua vivência em metodologias ágeis?
    cy.get('input[value="5"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5, como você avalia o seu conhecimento em padrões Web?
    cy.get('input[value="5"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5, como você avalia o seu conhecimento em banco de dados?
    cy.get('input[value="3"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5, como você avalia o seu conhecimento em Postman?
    cy.get('input[value="3"]').click();
    cy.contains("button", "Continuar").click();
    //Você possui conhecimento em Testes Automatizados?
    cy.get('input[value="1"]').click();
    cy.contains("button", "Continuar").click();
    //Você já aplicou testes mobile?
    cy.get('input[value="2"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5, como você avalia o seu conhecimento em Cypress?
    cy.get('input[value="5"]').click();
    cy.contains("button", "Continuar").click();
    //De 0 a 5 como você avalia o seu conhecimento em API Clients, como Postman e Insomnia?
    cy.get('input[value="3"]').click();
    cy.contains("button", "Continuar").click();
    // Gravação
    cy.contains("button", "Continuar").click();
    // Iniciar gravação
    cy.contains("button", "Gravar vídeo").click();
    cy.get(".data-list-form-content"); //modal
    cy.contains("button", "Gravar").click(); //modal
    cy.contains("button", "Parar").click(); // para gração
    cy.contains("button", "Enviar").click(); //Envia o vídeo
    // Avaliação da experiência
    cy.get(".msg info final"); // localiza a div pela classe
    cy.get("#rating").find("10").click(); // clica na nota pela lista
    cy.get("textarea")
      .click()
      .type("O processo foi excelente!!! Muito obrigado pela oportunidade!");
    cy.contains("button", "Continuar").click();
    cy.contains("button", "Acompanhar candidatura").click();
  });
});
