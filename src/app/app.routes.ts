import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { FormComponent } from './form/form.component';

    export const routes: Routes =[
        { path: '', component: FormComponent},
        {path: 'resultPage', component: ResultPageComponent}
    ];

  