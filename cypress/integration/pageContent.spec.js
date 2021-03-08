const data = require("../fixtures/data.json")
const locators = require("../fixtures/locators.json")

describe('Page content', () => {
    
    before (() => {
        cy.visit ('/instructions')
    })

    it('First page content', () => {
        cy.get(locators.instructionPage.instructionP).should('contain', data.instParaph.pageFirstText)
        cy.get(locators.instructionPage.instructionBtn).eq(1).click()
    })

    it('Second page content', () => {
        cy.get(locators.instructionPage.instructionP).should('contain', data.instParaph.pageSecondText)
        cy.get(locators.instructionPage.instructionBtn).eq(1).click()
    })

    it('Third page content', () => {
        cy.get(locators.instructionPage.instructionP).should('contain', data.instParaph.pageThirdText)
        cy.get(locators.instructionPage.instructionBtn).eq(1).click()
    })

    it('Fourth page content', () => {
        cy.get(locators.instructionPage.instructionP).should('contain', data.instParaph.pageFourthText)
        cy.get(locators.instructionPage.instructionBtn).eq(1).click()
    })

    it('Fifth page content', () => {
        cy.get(locators.instructionPage.instructionP).should('contain', data.instParaph.pageFifthText)
        cy.get(locators.instructionPage.instructionBtn).eq(1).click()
    })

    it('Dropdown choose grade', () => {
        cy.get(":nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container").type('6{enter}')
    })

    it('Dropdown choose how well', () => {
        cy.get(":nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container").type('2{enter}')
    })

    it('Enter email', () => {
        cy.get('input[type="email"]').type(data.email.email)
        //cy.url().should('eq','https://check.lexplore.com/read/check?mode=parent&grade=6&selfEstimate=2&email=test1234%40test.com')
        cy.get(locators.emailBtn).click()
    })
       
    it('Random words page 1', () => {
        cy.get('button[class="btn hover:shadow-lg active:shadow-inner  p-1 text-lg bg-transparent border-transparent hover:text-gray-800"]').eq(Math.floor(Math.random() * 72)).click()       
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordStartBtn).click()
        cy.get(locators.randomWords.wordEndBtn).click()
    })

    it('Random words page 2', () => {
        cy.get('button[class="btn hover:shadow-lg active:shadow-inner  p-1 text-lg bg-transparent border-transparent hover:text-gray-800"]').eq(Math.floor(Math.random() * 72)).click()       
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordBtn).eq(Math.floor(Math.random() * 72)).click()
        cy.get(locators.randomWords.wordStartBtn).click()
        cy.get(locators.randomWords.wordEndBtn).click()
    })

    it('Question section', () => { 
        cy.get(':nth-child(1) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').type('2{enter}')
        cy.get(':nth-child(2) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').type('2{enter}')
        cy.get(':nth-child(3) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').type('2{enter}')
        cy.get(':nth-child(4) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container').type('1{enter}')
        cy.get('.btn').click()
    })

})
