import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs'
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { GuidingPrinciplesComponent } from './guiding-principles/guiding-principles.component';
import { SpecializationsComponent } from './specializations/specializations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertsEduComponent } from './certs-edu/certs-edu.component'
import { RouterModule } from '@angular/router';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainMenuComponent,
    GuidingPrinciplesComponent,
    SpecializationsComponent,
    ExperiencesComponent,
    CertsEduComponent,
    DesignPatternsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: 'aboutMe', component: AboutMeComponent },
      { path: 'principles', component: GuidingPrinciplesComponent },
      { path: 'skills', component: SpecializationsComponent },
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'disciplines', component: CertsEduComponent },
      { path: '', redirectTo: '/aboutMe', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
