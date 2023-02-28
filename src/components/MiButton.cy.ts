import MiButton from './MiButton.vue'
import '../style.css'

describe('<MiButton />', () => {
  it('renders', () => {
    cy.mount(MiButton, {props: {
      title: "submit",
      }})
    cy.get('span').should('have.text', 'submit')
  })

  it('secondary', () => {
    cy.mount(MiButton, {props: {
        title: "submit",
        buttonType: "secondary"
      }})
    cy.get('span').should('have.text', 'submit')
    cy.get('button').should('have.class', 'bg-red-800')
  })

  it('disabled', () => {
    cy.mount(MiButton, {props: {
        title: "submit",
        isDisabled: true,
      }})
    cy.get('span').should('have.text', 'submit')
    cy.get('button').should('be.disabled')
  })
})