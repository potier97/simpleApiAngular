import { Component } from '@angular/core';
import { HttpCrudTechCampService } from './service/http-crud-tech-camp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorldAngular';

  constructor(private httpCrudTechCampService: HttpCrudTechCampService){}

  getAllPost() {
    this.httpCrudTechCampService.getAllPost()
    .subscribe(posts => { 
      console.log(posts)
    }) 
  }

  getPostById() {
    const idPost: number = 3
    this.httpCrudTechCampService.getPostById(idPost)
    .subscribe(posts => { 
      console.log(posts)
    }) 
  }

  addPost() {
    const newpost = { 
      userId: '11',
      id: '1',
      tittle: 'New Post',
      body: 'Lorem ipsum dolor fem',
    };
    this.httpCrudTechCampService.addPost(newpost)
    .subscribe(posts => { 
      console.log(posts)
    }) 
  }

  updatePost() {
    const thispost: Object = { 
      userId: '1',
      id: '3',
      tittle: 'Lorem Ipsum',
      body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum',
    };
    this.httpCrudTechCampService.updatePost(thispost)
    .subscribe(posts => { 
      console.log(posts)
    }) 
  }

  deletePost() {
    const idPost: number = 3
    this.httpCrudTechCampService.deletePost(idPost)
    .subscribe(posts => { 
      console.log(posts)
    }) 
  } 

}
