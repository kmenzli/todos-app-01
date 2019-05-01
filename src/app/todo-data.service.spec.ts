import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });

  it('Create new Todo', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo({
      id: 1,
      title: 'Achat chaussures',
      complete: false
    });
    expect(service.getAllTodos().length).toEqual(1);
  });
  it('Update  Todo', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo({
      id: 1,
      title: 'Achat chaussures',
      complete: false
    });
    service.addTodo({
      id: 2,
      title: 'Achat jean',
      complete: false
    });

    service.updateTodoById (2, {title: 'Achat jean 2'});


    expect(service.getTodoById(2).title).not.toEqual('Achat jean 3');
  });
});

describe('TMy Service', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TodoDataService]
  }));  
  it('Supprimer  Todo', inject([TodoDataService], (service: TodoDataService) => {
    //const service: TodoDataService = TestBed.get(TodoDataService);
    service.addTodo({
      id: 1,
      title: 'Achat chaussures',
      complete: false
    });
    service.addTodo({
      id: 2,
      title: 'Achat jean',
      complete: false
    });

    service.deleteTodoById(2);


    expect(service.getAllTodos().length).toEqual(1);
  }));
});
