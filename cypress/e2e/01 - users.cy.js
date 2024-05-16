import { faker } from "@faker-js/faker";

describe("Users tests", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  let user = null;
  let postMessage = "Cadastro realizado com sucesso";
  let putMessage = "Registro alterado com sucesso";
  let deleteMessage = "Registro excluído com sucesso";

  it("POST - SUCCESSFUL", () => {
    try {
      cy.logger("Testing to create user successfully");

      cy.request({
        method: "POST",
        url: "/usuarios",
        failOnStatusCode: true,
        headers: {
          ...Cypress.env("options"),
        },
        body: {
          nome: faker.person.fullName({ sex: "female" }),
          email: faker.internet.email(),
          password: faker.internet.password(),
          administrador: "true",
        },
      }).then((response) => {
        cy.logger(`Response=${JSON.stringify(response.body)}`);

        const data = response.body;

        user = data;

        expect(response).to.have.property("status", 201);
        expect(data).to.not.be.null;
        expect(data).to.have.property("message", postMessage);
      });
    } catch (error) {
      cy.logger(`Failed to register User`, error);
      throw Error(error.message);
    }
  });

  it("GET - SUCCESSFUL BASED ON POST", () => {
    try {
      cy.logger(`Testing search for user ${user._id}`);

      cy.request({
        method: "GET",
        url: `/usuarios/${user._id}`,
        failOnStatusCode: true,
        headers: {
          ...Cypress.env("options"),
        },
      }).then((response) => {
        cy.logger(`Response=${JSON.stringify(response.body)}`);

        const data = response.body;

        expect(response).to.have.property("status", 200);
        expect(data).to.not.be.null;
        expect(data).to.have.property("_id", user._id);
      });
    } catch (error) {
      cy.logger(`Failed to search for User ${user._id}`, error);
      throw Error(error.message);
    }
  });

  it("LIST - SUCCESSFUL BASED ON POST", () => {
    try {
      cy.logger("Testing list Users");

      cy.request({
        method: "GET",
        url: "/usuarios",
        failOnStatusCode: true,
        headers: {
          ...Cypress.env("options"),
        },
      }).then((response) => {
        cy.logger(`Response=${JSON.stringify(response.body)}`);

        const data = response.body;
        const model = data.usuarios.filter((x) => x._id === user._id)[0];

        expect(response).to.have.property("status", 200);
        expect(data).to.not.be.null;
        expect(model).to.not.be.null;
        expect(model).to.have.property("_id", user._id);
      });
    } catch (error) {
      cy.logger("Failed to list Users", error);
      throw Error(error.message);
    }
  });

  it("PUT - SUCCESSFUL", () => {
    try {
      cy.logger("Testing to update user successfully");

      cy.request({
        method: "PUT",
        url: `/usuarios/${user._id}`,
        failOnStatusCode: true,
        headers: {
          ...Cypress.env("options"),
        },
        body: {
          nome: faker.person.fullName({ sex: "female" }),
          email: faker.internet.email(),
          password: faker.internet.password(),
          administrador: "true",
        },
      }).then((response) => {
        cy.logger(`Response=${JSON.stringify(response.body)}`);

        const data = response.body;

        expect(response).to.have.property("status", 200);
        expect(data).to.not.be.null;
        expect(data).to.have.property("message", putMessage);
      });
    } catch (error) {
      cy.logger(`Failed to update User`, error);
      throw Error(error.message);
    }
  });

  it("DELETE - SUCCESSFUL", () => {
    try {
      cy.logger(`Testing to delete user ${user._id}`);

      cy.request({
        method: "DELETE",
        url: `/usuarios/${user._id}`,
        failOnStatusCode: true,
        headers: {
          ...Cypress.env("options"),
        },
      }).then((response) => {
        cy.logger(`Response=${JSON.stringify(response.body)}`);

        const data = response.body;

        expect(response).to.have.property("status", 200);
        expect(data).to.have.property("message", deleteMessage);
      });
    } catch (error) {
      cy.logger(`Failed to delete for User ${user._id}`, error);
      throw Error(error.message);
    }
  });
});
