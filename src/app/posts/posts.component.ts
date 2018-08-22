import { Component, OnInit } from '@angular/core';
import {appError} from '../common/app-error';
import {notFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts ;
 
  constructor(private service : PostService) { 
  
  }

  updatePost(post){
    this.service.update(post).subscribe(response=>{
      console.log(response)
    })
  }

  createPost(val: HTMLInputElement){
    let post ={title: val.value};
    this.posts.splice(0,0,post);
    val.value='';
this.service.create(post).subscribe(response=>{
  post['id'] = response;
  
},
(error : appError)=>{
this.posts.splice(0,1);

   if(error instanceof BadInput){

   }
else throw error;
   
 })
  }
deletePost(post){
  this.service.delete(post).subscribe(response=>{
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    
  },
  (error : appError)=>{
    this.posts.push(post)
    if(error instanceof notFoundError){
      alert('Already deleted')
    }else throw error;
 })
}
  ngOnInit() {
this.service.getAll().subscribe(posts=>{
  console.log(posts)
      this.posts = posts
 },
 error=>{
   alert('Unexpected error occured')
   console.log(error)
 })    
  }

}