# War General report

Hey, Front-end developer, we'd like you to build a report library for our War Generals!

Every war is documented and its data is stored on our servers. We're in need of a JavaScript library 
which can generate a sortable and searchable table based on that data.

## Task

Take a look at `src/data` directory, there you'll find 3 JSON files containing 100, 1000 and 10000 records from our logs. 

Our generals have beheaded our (now former) librarian and in need of someone who can translate this into data table.

Your goal is to build a library, which can accept any JSON data array and produce an HTML table. 
The table header columns should be clickable to sort the rows (ASC/DESC).
We would love to see some sort of filtering mechanism, whether text search, dropdowns for unique values 
or something else that you'd like to implement. That's up to you.

**The catch is** that some object properties are missing. If the property is in less than 20% of the records, 
it shouldn't be used as a column or there should be a feature where you could toggle the display of that column.

Our Generals are keen on **testing**, so in order to avoid the destiny of the librarian, 
we encourage you to cover the parts of code that you deem mandatory with some type of tests (unit/integration/e2e/take your pick).

You are free to use any boilerplate (including this) for your library. 

## Requirements

Your task will be evaluated on these criteria:

- Implementation correctness of functionality described in task description
- Concentration - only solve the requirements and don't spent more than 3-5 hours
- Clean code - demonstrate your most readable code
- Design patterns - demonstrate your design skills (SOLID, KISS, DRY etc.)
- Testing - demonstrate testing skills by writing automated tests for your solution (creepy love for tests is totally fine)
- We can easily run your application and try it out

### Specification

- You must use vanilla JS for the business logic part of your library.
- You are free to use any framework or tool for DOM manipulation.
- Your library should be able to render a table from any data set, this library should be reusable for different types of objects.
- Table columns should be clickable and should sort the table data.
- There should be a way to define cell formatting (i.e. money, booleans to "Yes"/"No")

## Boilerplate

Run `npm run dev` to start a hot reload server.

## Submitting

Share code on VCS and send a link to jobs@mysterium.network
