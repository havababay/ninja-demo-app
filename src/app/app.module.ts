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
import { ShowListComponent } from './show-list/show-list.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowDetailsCleanComponent } from './show-details-clean/show-details-clean.component';
import { ShowDetailsCleanPersentationComponent } from './show-details-clean-persentation/show-details-clean-persentation.component';
import { CandidateSelectorComponent } from './candidate-selector/candidate-selector.component';


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
      { path: 'shows', component: ShowListComponent },
      { path: 'show/:showId', component: ShowDetailsComponent },
      { path: 'show-clean/:showId', component: ShowDetailsCleanComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CandidateListComponent,
    CandidateDetailsComponent,
    ShowListComponent,
    ShowDetailsComponent,
    ShowDetailsCleanComponent,  
    ShowDetailsCleanPersentationComponent,
    CandidateSelectorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
