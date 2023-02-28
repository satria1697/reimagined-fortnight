import MiModal from './MiModal.vue'
import '../style.css'

describe('<MiModal />', () => {
  it('renders', () => {
    cy.mount(MiModal)
    cy.get('div').should('have.length', 6)
  })

  it('show a text', () => {
    cy.mount(MiModal, {slots: {
      default: `<span>Text</span>`
      }})
    cy.get('span').should('have.length', 1)
  })
})