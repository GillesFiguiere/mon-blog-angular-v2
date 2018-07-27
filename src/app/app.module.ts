import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddNewPostComponent } from './add-new-post/add-new-post.component';
import { ListAllPostsComponent } from './list-all-posts/list-all-posts.component';

import { PostsService } from './services/posts.service';

const routes: Routes = [
  { path: 'add-new-post', component: AddNewPostComponent },
  { path: 'list-all-posts', component: ListAllPostsComponent },
  { path: '', redirectTo: '/list-all-posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/list-all-posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddNewPostComponent,
    ListAllPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
