import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import to use routes within application
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CommunityComponent} from './community/community.component';
import { NewsComponent } from './news/news.component';
import { BoardCommentComponent } from './board-comment/board-comment.component';
import { StaffComponent } from './staff/staff.component';
import { NgbdCarouselBasicComponent } from './ngbd-carousel-basic/ngbd-carousel-basic.component';
import { NgBdDropdownBasicComponent } from './ng-bd-dropdown-basic/ng-bd-dropdown-basic.component';
import { StudentsComponent } from './students/students.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ShopComponent } from './shop/shop.component';
import { NgbDropdownCondensedComponent } from './ngb-dropdown-condensed/ngb-dropdown-condensed.component';
import { SchoolComponent, ContactComponent } from './school/school.component';
import { AccordionBasicComponent } from './accordion-basic/accordion-basic.component';
import { NgbdModalContent, NgbdModalComponent } from './message-board-modal/message-board-modal.component';
//bootstrap NG
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Calendar } from './school-calendar/school-calendar.component';
import { NgbdDatepickerComponent } from './ngbd-datepicker/ngbd-datepicker.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';
//constant to house all routes
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path : 'community', component: CommunityComponent},
  {path : 'news', component: NewsComponent},
  {path : 'staff', component: StaffComponent},
  {path : 'students', component: StudentsComponent},
  {path : 'school', component: SchoolComponent},
  {path : 'calendar', component: Calendar},
  {path : 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavigationComponent,
    AboutComponent,
    HomeComponent,
    CommunityComponent,
    NewsComponent,
    BoardCommentComponent,
    StaffComponent,
    NgbdCarouselBasicComponent,
    NgBdDropdownBasicComponent,
    StudentsComponent,
    CardViewComponent,
    ShopComponent,
    NgbDropdownCondensedComponent,
    SchoolComponent,
    ContactComponent,
    AccordionBasicComponent,
    NgbdModalContent,
    NgbdModalComponent,
    NgbdDatepickerComponent,
    Calendar,
    FooterComponent,
    ApplicationModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
