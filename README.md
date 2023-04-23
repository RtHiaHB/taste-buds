# Taste Buds web-site

This repo represents the web-site of a fictional restaurant chain called "Taste Buds." It is primarily serves American cuisine in the Raleigh-Durham area.

There are two pieces to this: the back-end and the front-end, each in their own folder.  This uses PostGres, and a PostGres server is required.

## Back-End

We recommend that you get the back-end started first.  After forking and cloning, you should install the following: Express, cors, Sequelize, sequelize-cli, and dotenv.

Once that's done, we recommend you run the migration files and then the seed file to load the locations and the menu.

## Front-End

Once this is downloaded, you need to install react, react-router-dom, react-bootstrap, and bootstrap.

That should get you up and running.

## Future development

Our plan is for there to eventually be a working order page, which is our next step.  Also, a way for users to log in so they can save preferences, etc.

## Contributions
If you would like to contribute to Taste Buds, please follow these steps:

1. Fork this repository to your GitHub account.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Create a pull request to merge your changes into the main branch of this repository.

## Credits
Taste Buds was created by [RtHiaHB](https://github.com/RtHiaHB), [hauprichth](https://github.com/hauprichth), and [KenanTaylor](https://github.com/KenanTaylor).  It was built using React, Node.js, and Sequelize.

## License
Taste Buds is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Changelog
### Features
- Added seeder
- added menu items to the menu
- New Location page added
- Added order->items controller.
- base for order screen
- finished menu items
- Added order items controller...
- Added Location page; needs rework
- added models, migrations, and associations
- added server
- added Homepage
- Added models and migrations.  Need to work on associations next.
- stubbed out models and migrations.  Need to work on associations next.
- Finished sign in/sign up form.
- Added signin page.  Still have to add sign-up portion.
- Expanded the about page to include what was in our notes.
- Added about page and stubbed additional routes.
- Stubbed out basic routes.
- Added navbar.
- Initialize project using Create React App

### Bug fixes
- fixing main. D'Oh!
- moving folders around

## API (back-end) Routes
### /items
*(GET, POST)*

Gets you a list of menu items offered by Taste Buds, and allows you to add new ones.

### /items/:id
*(GET, PUT, DELETE)*

Allows for getting, editing, and deleting individual menu items.

### /locations
*(GET, POST)*

Gets a list of all current locations.

### /locations/:id
*(GET, PUT, DELETE)*

Allows for manipulating existing locations.

### /orders
*(GET, POST)*

Allows for getting a list of all orders in the system, or adding new ones.

### /orders/:id
*(GET, PUT, DELETE)*

Allows for manipulating existing orders.

### /order_items
*(GET, POST)*

Returns all items ordered, and allows for adding new ones. New ones added need both the item_id and order_id.

### /order_items/:id
*(GET, PUT, DELETE)*

Allows for manipulating individual order items. The ```id``` in GET is the order number, and will return all of the items in the order.  In PUT and DELETE, the ```id``` is the order_item number to allow manipulation of specific order items.

### /users
*(GET, POST)*

Gets a list of all users in the database, and creating new users.

### /users/:email
*(GET)*

Allows for searching for a user by email address.

### /users/:id
*(PUT, DELETE)*

Allows for editing and deleting individual users.