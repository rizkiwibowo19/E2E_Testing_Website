describe('Responsive testing', () => {
    const viewport = [
        {width: 1024, height: 600}, //DESKTOP
        {width: 1024, height: 1366}, //IPAD
        {width: 414, height: 896}, //MOBILE
    ]
        it('Responsive Testing', () => {
            viewport.forEach((views) => {
            cy.viewport(views.width, views.height),
            cy.visit('/')
            })
        });
      });
      