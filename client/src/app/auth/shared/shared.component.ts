import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent {
  @Output() submitted = new EventEmitter<FormGroup>();
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control?.hasError('email') && control?.touched && control?.dirty;
  }

  get passwordRequired() {
    const control = this.form.get('password');
    return control?.hasError('required') && control?.touched && control?.dirty;
  }
}
