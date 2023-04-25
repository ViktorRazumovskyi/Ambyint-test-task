import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';

test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.navigate('/'); 
});

// One spec is failing, no time to fix
test('Add a to-do item with valid text', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Valid item');
  const newItemText = await todoPage.getLastTodoItemText();
  expect(newItemText).toEqual('Valid item');
});

test('Add a to-do item with only whitespace', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('   ');
  const newItemText = await todoPage.getLastTodoItemText();
  expect(newItemText).toBe('');
});

test('Add a to-do item with special characters', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('!@#$%^&*()');
  const newItemText = await todoPage.getLastTodoItemText();
  expect(newItemText).toEqual('!@#$%^&*()');
});
