import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  value ='';
  //rout:String;
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  validarUsuario(value){
    console.log(value);
    
    if (value == 123456) {
      return this.router.navigate(['/admin']);
    }else{
      return this.router.navigate(['/user']);
    }
  }
}
