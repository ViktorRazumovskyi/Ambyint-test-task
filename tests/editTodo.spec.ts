import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';

test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.navigate('/');
  await todoPage.addTodoItem('Item to edit');
});

test('Edit a to-do item with valid text', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.editLastTodoItem('Edited item');
  const editedItemText = await todoPage.getLastTodoItemText();
  expect(editedItemText).toEqual('Edited item');
});

test('Edit a to-do item with special characters', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.editLastTodoItem('!@#$%^&*()');
  const editedItemText = await todoPage.getLastTodoItemText();
  expect(editedItemText).toEqual('!@#$%^&*()');
});
