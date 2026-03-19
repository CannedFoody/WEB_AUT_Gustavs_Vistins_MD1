import { BasePage } from "./base_page";

// A page object script for all the (in my opinion) necessary data retrievals.

export class GridPage extends BasePage {
    static get url(){
        // The website function that makes it more readable? Not sure why this is a thing but ill figure it out later, all the tutorials and the lector had this so I imagine it's important.
        return "https://demoqa.com/selectable";
    }

    static get grid_button(){
        //  Retrieves the grid button from the homepage.
        return cy.get("#demo-tab-grid");
    }

    static get correct_button_values(){
        // Define the values that SHOULD be clicked.
        // I tried to make an array with all 9 numbers and loop through them but I found out online that it's more effective to just use the correct values.
        return ['Two', 'Four', 'Six', 'Eight'];
    }
    
    static get grid_container_li_elements(){
        // All of the li elements in the grid div that we should be looking for.
        return cy.get("#gridContainer li");
    }

}