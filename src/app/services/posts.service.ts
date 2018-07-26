import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from '../models/post.model';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPostSubject();
  }

  deletePost(id: number) {
    this.posts.splice(id, 1);
    this.emitPostSubject();
  }

  increaseLikes(id: number) {
    this.posts[id].increaseLikes();
    this.emitPostSubject();
  }

  decreaseLikes(id: number) {
    this.posts[id].decreaseLikes();
    this.emitPostSubject();
  }

}
