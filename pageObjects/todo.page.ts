import {Locator, Page} from '@playwright/test';

export class TodoPage {
  private readonly taskInput: Locator;
  private readonly taskBox: Locator;
  readonly lastTask: Locator;
  private readonly editMenu: Locator;
  private readonly editOption: Locator;
  private readonly deleteOption: Locator;
  private readonly checkbox: Locator;
  private readonly checked: Locator;
  private readonly clearAllBtn: Locator;
  private readonly tasks: Locator;

  constructor(private page: Page) {
    this.taskInput = page.locator('[data-testId="task-input"]');
    this.taskBox = page.locator('[data-testId="task-box"]');
    this.lastTask = this.taskBox.locator('li:last-child');
    this.editMenu = this.lastTask.locator('.settings i');
    this.editOption = this.lastTask.locator('.task-menu li:first-child');
    this.deleteOption = this.lastTask.locator('.task-menu li:last-child');
    this.checkbox = this.lastTask.locator('input[type="checkbox"]');
    this.checked = this.lastTask.locator('p.checked');
    this.clearAllBtn = page.locator('[data-testid="clear-all-btn"]');
    this.tasks = page.locator('.task');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async addTodoItem(text: string) {
    await this.taskInput.click()
    await this.taskInput.fill(text);
    await this.page.keyboard.press('Enter');
  }

  async getLastTodoItemText() {
    return await this.lastTask.locator('[data-testId="task-text"]').textContent();
  }
  

  async editLastTodoItem(newText: string) {
    await this.editMenu.click();
    await this.editOption.click();
    await this.taskInput.fill(newText);
    await this.page.keyboard.press('Enter');
  }

  async toggleLastTodoItemCompletion() {
    await this.checkbox.click();
  }


  async deleteLastTodoItem() {
    await this.editMenu.click();
    await this.deleteOption.click();
  }

  async clearAll(): Promise<void> {
    await this.clearAllBtn.click();
  }

  async getTodoItemCount(): Promise<number> {
    return await this.tasks.count();
  }
  async filterAll() {
    const allFilter = this.page.locator('#all');
    await allFilter.click();
  }
  
  async filterPending() {
    const pendingFilter = this.page.locator('#pending');
    await pendingFilter.click();
  }
  
  async filterCompleted() {
    const completedFilter = this.page.locator('#completed');
    await completedFilter.click();
  }
  
  async getVisibleTodoItems() {
    return await this.tasks.innerText();
  }
  
}
