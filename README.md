Test Plan:

1. Add a new to-do item.
    1.1. Add a to-do item with valid text.
    1.2. Add a to-do item with only whitespace.
    1.3. Add a to-do item with special characters.
2. Edit an existing to-do item.
    2.1. Edit a to-do item with valid text.
    2.2. Edit a to-do item with only whitespace.
    2.3. Edit a to-do item with special characters.
3. Mark a to-do item as completed.
    3.1. Mark a pending to-do item as completed.
    3.2. Mark a completed to-do item as pending.
4. Delete a to-do item.
    4.1. Delete a pending to-do item.
    4.2. Delete a completed to-do item.
5. Filter to-do items.
    5.1. Show all to-do items.
    5.2. Show only pending to-do items.
    5.3. Show only completed to-do items.
6. Clear all to-do items.
    6.1. Clear all to-do items when there are no items.
    6.2. Clear all to-do items when there are pending items.
    6.3. Clear all to-do items when there are completed items.
    6.4. Clear all to-do items when there are both pending and completed items.



# Getting Started

### Use Technologies:
 - Node.js
 - Playwright
 - Typescript

use node v.18 or above
## before running tests:
1. run `npm install` - install  the dependencies
2. run `npm run start-frontend` - start the server with index.html on localhost:3000


## tests running scripts
1. run `npm run e2e-tests-all` - run all e2e tests in headless mode

for other scrips see docs: https://playwright.dev/docs/running-tests


## Reporter
Use  HTML Reporter https://playwright.dev/docs/test-reporters#html-reporter

if at least one fail test exist reporter will be generated automatically

For generating a reporter use script `npm run generate-reporter`



# Additional note:
Since it's just a test task and limited in time, half test are failing since I spent more time on creating
a tests structure itself. Also, I added data-testids for few elements it's a best practice to relay on data-test-id attributes





