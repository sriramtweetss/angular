import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { FavoriteComponent } from './favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseServiceService } from './course-service.service';
import { SummaryPipe } from './summary.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import {HttpModule}  from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    NavbarComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  providers: [CourseServiceService,PostService,{provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
