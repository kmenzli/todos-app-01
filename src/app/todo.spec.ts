import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should create an instance with value', () => {
    let t = new Todo({
      id: 20,
      title: 'Achat',
      complete: true
    });
    expect (t.id).toEqual(20);
    expect (t.complete).toEqual(true);
  });
});
