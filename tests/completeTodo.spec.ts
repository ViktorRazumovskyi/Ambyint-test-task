import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';



test.beforeEach(async ({ page }) => {
 
  const todoPage = new TodoPage(page);
  await todoPage.navigate('/');
});
// tests are failing not time to fix
test('3.1. Mark a pending to-do item as completed', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Item to complete');
  await todoPage.toggleLastTodoItemCompletion();
  const lastTodoItemText = await todoPage.getLastTodoItemText();
  expect(lastTodoItemText).toContain('Item to complete');
  const lastTodoItem = await todoPage.lastTask;
  expect(await lastTodoItem.getAttribute('class')).toContain('checked');
});

test('3.2. Mark a completed to-do item as pending', async ({ page }) => {
   const todoPage = new TodoPage(page);  

  await todoPage.addTodoItem('Item to mark as pending');
  await todoPage.toggleLastTodoItemCompletion();
  await todoPage.toggleLastTodoItemCompletion();
  const lastTodoItemText = await todoPage.getLastTodoItemText();


  expect(lastTodoItemText).toContain('Item to mark as pending');
  const lastTodoItem = await page.locator('[data-testid="last-todo-item"] p');
  const lastTodoItemClass = await lastTodoItem.getAttribute('class');
  expect(lastTodoItemClass).not.toContain('checked');
});
