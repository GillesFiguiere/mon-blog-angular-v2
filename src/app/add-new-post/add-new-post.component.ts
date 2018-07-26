import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ["What is Lorem Ipsum?", Validators.required],
      content: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" +
        "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was " +
        "popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop " +
        "publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Validators.required]
    });
  }

  onSubmit() {
    const formValue = this.postForm.value;

    const newPost = new Post(
      formValue['title'],
      formValue['content']
    );

    this.postsService.addNewPost(newPost);
    this.router.navigate(['/list-all-posts']);
  }
}
