import MiInput from './MiInput.vue'
import '../style.css'

describe('<MiInput />', () => {
  it('renders', () => {
    cy.mount(MiInput)
    cy.get('input').should('be.enabled')
  })

  it('type text', () => {
    cy.mount(MiInput)
    cy.get('input').type('text')
    cy.get('input').should('have.value', 'text')
  })

  it('disabled', () => {
    cy.mount(MiInput, {props: {
        isDisabled: true
      }})
    cy.get('input').should('be.disabled')
  })
})