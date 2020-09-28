import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  profile = {
    username: 'Dong',
    email: 'dao.xuan.dong.212@gmail.com',
    facebook: 'facebook.com',
    twitter: 'twitter.com',
    website: 'daoxuandong.com',
    tel: '0964224490'
  };
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(profileForm) {
    console.log(profileForm);
    // throw new Error('Something went wrong');
  }
}
