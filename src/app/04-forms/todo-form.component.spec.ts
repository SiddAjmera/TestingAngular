import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {

    component = new TodoFormComponent(new FormBuilder());

  });

  it('should initialize the form with two controls on it', () => {

    expect(component.form.contains('name')).toBeDefined();
    expect(component.form.contains('email')).toBeDefined();

  });

  it('should validate the name control', () => {

    let control = component.form.get('name');

    control.setValue(null);

    expect(control.valid).toBeFalsy();

  });
  
});