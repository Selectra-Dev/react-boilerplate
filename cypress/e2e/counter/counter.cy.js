describe('empty spec', () => {
  it('Should go to the main page', () => {
    cy.visit('http://localhost:3000')
  })

  it('Should render the main page', () => {
    cy.contains('Counter')
  })

  it('Should increase counter', () => {
    cy.contains('+').click()
  })

  it('Should decrease counter', () => {
    cy.contains('-').click()
  })
})
