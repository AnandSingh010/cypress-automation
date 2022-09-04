/// <reference types="Cypress" />



describe('handleing alerts',()=>{
    it('',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').should('contain.text','POPUP & ALERTS').click()
        cy.get('#button1').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eq('I am an alert box!')
        } )
    })
    it('validate java script alert box',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').should('contain.text','POPUP & ALERTS').click()
        cy.get('#button4').click()
        cy.on('window:alert',(str)=>{
           return true;
        } )
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
    it('validate java script alert box click on cancel',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').should('contain.text','POPUP & ALERTS').click()
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
           return false;
        } )
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })
    it.only('validate java script alert box click on cancel using stub',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').should('contain.text','POPUP & ALERTS').click()
        const stub = cy.stub()
        cy.on('window:confirm',stub)
        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;
        })
    })

})