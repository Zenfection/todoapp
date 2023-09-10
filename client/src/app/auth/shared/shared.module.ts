import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SharedComponent],
})
export class SharedModule {}
