import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getAllPosts();
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts);
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);

    this.saveAllPost();
    // Plus nécessaire car firebase.database().ref('/blog').on() observe les données dans firebase
    // this.emitPostSubject();
  }

  deletePost(id: number) {
    this.posts.splice(id, 1);

    this.saveAllPost();
    // Plus nécessaire car firebase.database().ref('/blog').on() observe les données dans firebase
    // this.emitPostSubject();
  }

  increaseLikes(id: number) {
    this.posts[id].increaseLikes();

    this.saveAllPost();

    // Plus nécessaire car firebase.database().ref('/blog').on() observe les données dans firebase
    // this.emitPostSubject();
  }

  decreaseLikes(id: number) {
    this.posts[id].decreaseLikes();

    this.saveAllPost();

    // Plus nécessaire car firebase.database().ref('/blog').on() observe les données dans firebase
    // this.emitPostSubject();
  }

  getAllPosts() {
    firebase.database().ref('/blog').on('value', (data: firebase.database.DataSnapshot) => {
      if (data.val()) {

        this.posts = [];

        data.val().forEach(post => {
          this.posts.push(new Post(
            post.title,
            post.content,
            post.loveIts,
            post.creationDate
          ));
        })
      }
      this.emitPostSubject();
    });
  }

  saveAllPost() {
    console.log(this.posts);
    firebase.database().ref('/blog').set(this.posts);
  }
}
