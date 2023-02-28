import App from './App.vue'
import './style.css'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(App)
    cy.get('span').should('have.text', 'Submit')
  })

  it('write text', () => {
    cy.mount(App)
    cy.get('input').type('text')
    cy.get('input').should('have.value', 'text')
    cy.get('button').click()
    cy.get('[data-cy="textModal"]').should('have.text', 'text')
    cy.get('[data-cy="miButtonModal"]').should('have.text', 'Close')
    cy.get('[data-cy="miButtonModal"]').click();
    cy.get('input').should('have.length', 1)
    cy.get('button').should("have.length", 1)
  })
})