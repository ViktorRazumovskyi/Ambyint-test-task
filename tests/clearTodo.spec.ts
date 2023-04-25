import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';

test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.navigate('/');
});


test('Clear all to-do items when there arepending items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.addTodoItem('Pending item');
    await todoPage.clearAll();
    const itemCount = await todoPage.getTodoItemCount();
    expect(itemCount).toEqual(0);
});
    
test('Clear all to-do items when there are completed items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.addTodoItem('Completed item');
    await todoPage.toggleLastTodoItemCompletion();
    await todoPage.clearAll();
    const itemCount = await todoPage.getTodoItemCount();
    expect(itemCount).toEqual(0);
});
    
test('Clear all to-do items when there are both pending and completed items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.addTodoItem('Pending item');
    await todoPage.addTodoItem('Completed item');
    await todoPage.toggleLastTodoItemCompletion();
    await todoPage.clearAll();
    const itemCount = await todoPage.getTodoItemCount();
    expect(itemCount).toEqual(0);
});