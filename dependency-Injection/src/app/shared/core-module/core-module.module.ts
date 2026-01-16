import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FooterComponent,
    FormsModule
  ]
})
export class CoreModuleModule { }
