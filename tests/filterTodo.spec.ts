import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/todo.page';

test.beforeEach(async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.navigate('/');
});

test('Show all to-do items', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Pending item');
  await todoPage.addTodoItem('Completed item');
  await todoPage.toggleLastTodoItemCompletion();
  await todoPage.filterAll();
  const visibleItems = await todoPage.getVisibleTodoItems();
  expect(visibleItems).toHaveLength(2);
});

test('Show only pending to-do items', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Pending item');
  await todoPage.addTodoItem('Completed item');
  await todoPage.toggleLastTodoItemCompletion();
  await todoPage.filterPending();
  const visibleItems = await todoPage.getVisibleTodoItems();
  expect(visibleItems).toHaveLength(1);
  expect(visibleItems[0]).toEqual('Pending item');
});

test('Show only completed to-do items', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodoItem('Pending item');
  await todoPage.addTodoItem('Completed item');
  await todoPage.toggleLastTodoItemCompletion();
  await todoPage.filterCompleted();
  const visibleItems = await todoPage.getVisibleTodoItems();
  expect(visibleItems).toHaveLength(1);
  expect(visibleItems[0]).toEqual('Completed item');
});
