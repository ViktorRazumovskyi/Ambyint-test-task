import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';
test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.navigate('/');
});

test('Delete a pending to-do item', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Item to delete');
  await todoPage.deleteLastTodoItem();
  const deletedItemText = await todoPage.getLastTodoItemText();
  expect(deletedItemText).toBeUndefined();
});

test('Delete a completed to-do item', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Item to complete and delete');
  await todoPage.toggleLastTodoItemCompletion();
  await todoPage.deleteLastTodoItem();
  const deletedItemText = await todoPage.getLastTodoItemText();
  expect(deletedItemText).toBeUndefined();
});
