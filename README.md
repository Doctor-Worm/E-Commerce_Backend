# E-Commerce_Backend

## **Goal:**
### *For a manager at an internet retail company to have a back end for their e-commerce website that uses the latest technologies so they can compete with other e-commerce companies.*

___

<br>

## Application Details
- Uses a funcitonal Express.js API
- Must add your database name, MySQL username, & MySQL password to an environment variable file
- Enter schema file into your MySQL, and then use 'npm run seed' to seed the database
- Use Insomnia to test API GET routes for 'categories', 'products', or 'tags' to see their data
- Use Insomnia to test API POST, PUT, and DELETE routes to successfully create, update, or delete data in the database

___

<br>

## Challenges Faced
- It was difficult figuring out how the 'through-table' functionallity and syntax was in sequelize to make sure the database data was connected correctly.
    - I had to make sure that it was set up like:

            Parent.belongsToMany(Child, {
            through: 'through table',
            as: 'name',
            foreignKey: 'parent_id'
            });
<br>

## *Links to GitHub repository & a walkthrough video:*

- **[Link to the GitHub Repository](https://github.com/Doctor-Worm/E-Commerce_Backend)**

- **[Walkthrough Video](https://drive.google.com/file/d/1jDTxjLOko7w2QpqGZUY6f8PRBuf-YbK_/view)**