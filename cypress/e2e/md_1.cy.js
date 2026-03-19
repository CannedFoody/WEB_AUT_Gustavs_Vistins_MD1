//  Im commenting mostly for myself, cause this is a completely new thing that I want to learn and figure out.

describe("Homework 1", () => {
  it('Should load the website and click the Grid button', () => {
    cy.visit('https://demoqa.com/selectable')
    // Finds the "Grid" button on the site with the id demo-tab-grid
    cy.get('#demo-tab-grid').click()
  })

  it('Should click the grid buttons in order(2, 4, 6, 8) and check if the correct values are selected', () => {
    // I wanted to put the button pushing and checks in seperate it calls, but that would require me to visit the site and click the grid button again and I found that to be a bit redundant.
    cy.visit('https://demoqa.com/selectable')

    cy.get('#demo-tab-grid').click()

    // Define the values that SHOULD be clicked.
    // I tried to make an array with all 9 numbers and loop through them but I found out online that it's more effective to just use the correct values.
    const required_values = ['Two', 'Four', 'Six', 'Eight']

    // Loops through all of the li elements in the gridContainer div and checks if their text value is contained in the array above.
    cy.get('#gridContainer li').each(($el, $index) => {
      if(required_values.includes($el.text())){
        // https://stackoverflow.com/questions/77173627/iterate-through-a-table-and-check-each-td-element-at-a-specific-index
        // To be honest I have no clue what .wrap does, but this person on stackoverflow said it is needed so I kept it and it works.
        cy.wrap($el).click()
      }
    })
    
    // Now this is my own brain child, it felt so satisfying to figure out how the website checks if the grid li element is active.
    cy.get('#gridContainer li').each(($el) => {
      if(required_values.includes($el.text())){
        cy.wrap($el).should('have.class', 'active')
      }
      else{
        cy.wrap($el).should('not.have.class', 'active')
      }
    })
  })
})