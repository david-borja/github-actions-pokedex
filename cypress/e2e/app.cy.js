/* global cy */
// lo de arriba es para que se deje de quejar el linter
// pero en realidad es más recomendable utilizar la extensión de cypress
describe('Pokedex', function() {
  it('frontpage can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })
})