import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {IsAdminGuard} from './login/is-admin.guard';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
      RouterModule.forChild([
        {path: '', component: LoginComponent}
      ])
  ],
  declarations: [LoginComponent],
  providers: [IsAdminGuard],
  exports: [LoginComponent]
})
export class LoginModule { }
