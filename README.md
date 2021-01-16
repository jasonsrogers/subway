# Subway office order

This project is a stand alone demo simulating a app allowing multiple users form a same office to order sandwiches form their local shop.

# Installation

- open terminal
- navigate to `/subway`
- run `yarn` or `npm install`
- run `yarn start`

App should open in default browser at `http://localhost:3000`

# Tech stack

- React as main framework
- Reach router for navigation
- Final Form for forms
- React bootstrap for basic components
- Styled Components
- Redux for state management
- ** Testing Library **

# Notes:

There is no back end, therefore to maintain the state of the application, we are using local storage to save the state of the redux store to create persistance (this would not be needed if we were loading from back end)

There are 2 users pre configured (Sandwich Admin and Frodo Baggins)
As we do not have a proper login in admin, we can switch users from the navbar before navigating to Order page

# Road map

- review UX
  - add mock login page
  - add order confirmation modal/toast
  - move open/close order
  - create purchase order flow (maybe not one block form)?
