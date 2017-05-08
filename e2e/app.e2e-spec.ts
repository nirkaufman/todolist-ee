import { TodolistEePage } from './app.po';

describe('todolist-ee App', () => {
  let page: TodolistEePage;

  beforeEach(() => {
    page = new TodolistEePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('td works!');
  });
});
