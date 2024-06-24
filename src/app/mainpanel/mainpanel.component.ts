import { Component } from '@angular/core';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrl: './mainpanel.component.css'
})
export class MainpanelComponent {
    posts;
    constructor(srv: PostService) {
      this.posts = srv.getUserPosts();
    }
}
