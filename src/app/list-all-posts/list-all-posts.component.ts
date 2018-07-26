import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-list-all-posts',
  templateUrl: './list-all-posts.component.html',
  styleUrls: ['./list-all-posts.component.scss']
})
export class ListAllPostsComponent implements OnInit {

  postsSubscription: Subscription;
  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => { 
        this.posts = posts; 
      });
    
    this.postsService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

  onLike(id: number) {
    this.postsService.increaseLikes(id);
  }

  onDislike(id: number) {
    this.postsService.decreaseLikes(id);
  }

  onDelete(id: number) {
    this.postsService.deletePost(id);
  }

}
