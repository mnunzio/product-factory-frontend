describe('Edit Capability task', () => {
    before(() => {
        cy.visit('/')
        cy.get('.ant-row').eq(1).find('button').click()
        cy.url().should('include', '/switch-test-user')
        })
    it('Test Edit Capability of Task', () => {
            cy.get('form').find('button').first().should('have.text', 'Sign in')
            cy.get('form').find('span').eq(1).click()
            cy.get('.ant-select-item-option').eq(1).click()
            cy.get('.ant-select-item-option').eq(1).should('not.have.text', 'Select')
            const button = cy.get('form').find('button').first()
            button.contains('Sign in')
            button.click()
            cy.get('.ant-message-notice-content').should('have.text', 'User was successfully log in')
            cy.get('.ant-tabs-tab-btn').eq(1).click()
            cy.get('.ant-card-body').contains('AuthMachine').click()
            cy.get('.rst__toolbarButton').find('button').eq(1).click()
            cy.get('.ant-modal-body').find('.ant-input').first().clear().type('test')  // First input field
            cy.get('.ant-modal-body').find('.ant-input').first().should('not.have.text', ' ')
            cy.get('.rdw-editor-main').find('.DraftEditor-root').clear().type('Hello here we are testing')
            cy.get('.rdw-editor-main').should('not.have.text', ' ')
            cy.get('.ant-modal-body').find('.ant-input').eq(1).clear().type('www.wwe.com')
            cy.get('.ant-modal-body').find('.ant-input').eq(1).should('not.have.text', ' ')
            cy.get('.ant-modal-content').find('.ant-modal-body').find('button').click()
            cy.wait(2000)
            cy.get('.ant-modal-body').eq(1).find('.ant-input').clear().type('www.url.com')
            cy.get('.ant-modal-content').eq(1).find('button').eq(2).click()
            cy.get('.ant-message-notice-content').should('have.text', 'Initiative is created successfully!')
            cy.get('.ant-modal-footer').first().find('button').eq(1).click()
            cy.get('.ant-message-notice-content').should('have.text', 'Capability is updated successfully!')

    })
})