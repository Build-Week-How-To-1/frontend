describe('form test', () => {
    it('test that the form works', () => {
        cy.visit('/register')

        cy.get('button#submit')
        .should('be.disabled')
        
        const email = "aperez9423@gmail.com";
        cy.get('#email')
        .type(email)
        .should('have.value', email)

        const password = "12345678";
        cy.get('#password')
        .type(password)
        .should('have.value', password)

        cy.get('button#submit')
        .should('not.be.disabled')
    })
})
