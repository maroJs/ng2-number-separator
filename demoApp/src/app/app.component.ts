import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: any;
  separator: string = '';
  showForm: any = false;
  min: any;
  max: any;
  length: any;
  title: any;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {

    this.loginForm = this.fb.group({
      'title': [''],
    });

  }

  validate() {
    console.log('min: ' + this.min + ' max:'+ this.max +' length: '+ this.length + ' sep: ' + this.separator  )
    this.separator = this.separator ? this.separator : ' ';
    this.showForm = true;
  }

  reset() {
    this.showForm = false;
    this.title= ''
  }
}
