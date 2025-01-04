/* global cy */
describe('Health Check', () => {
  it('should return OK', () => {
    cy.request('/api/health').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq('ok')
    })
  })
})
