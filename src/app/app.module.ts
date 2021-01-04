import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from './material.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CandidateListComponent },
      { path: 'candidates', component: CandidateListComponent },
      { path: 'candidate/:candidateId', component: CandidateDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
