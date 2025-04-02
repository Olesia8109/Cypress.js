describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки восст.пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
       
         
 
     })


     it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки восст.пароль
    
       
        cy.get('#forgotEmailButton').click(); // Нажима восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');// Ввел почту для восстановления
        cy.get('#restoreEmailButton').click();// Нажала отправить код
    
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
     
    
         })

 
 it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки восст.пароль

    cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
    cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
    cy.get('#loginButton').click(); // Нажала войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
 

     })


it('Проверка что в  логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки восст.пароль

    cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton').click(); // Нажала войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
 

     })


     it('Ввести неправильный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');// Проверяю цвет кнопки восст.пароль
    
        cy.get('#mail').type('german@356dolnikov.ru'); // Ввела неверный логин 
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажала войти
    
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
     
    
         })


         it('Ввести  логин состоящий из строчных букв и ввести верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Зашли на сайт
        
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввела неверный логин 
            cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
            cy.get('#loginButton').click(); // Нажала войти
        
            cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Крестик есть и он виден пользователю
         
        
             })
    
 })      

         

     
 
