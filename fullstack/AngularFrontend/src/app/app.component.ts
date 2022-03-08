import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CatalogueService } from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public categories:any;
  public currentCategory:any;

  constructor(private catalogueService:CatalogueService,private router:Router){

  }

  ngOnInit(): void {

    this.getCategories()
  }
  private getCategories(){
    this.catalogueService.getResource("/categories").subscribe(data=>{this.categories=data;
    console.log("data")
    })
  }
  public getProductByCat(c:any){
    this.currentCategory=c;
    this.router.navigateByUrl('/products/'+c.id)
  }
  onSelectedProducts(){
    this.currentCategory=undefined;
    this.router.navigateByUrl('/products/1/0')
  }
  title = 'AngularFrontend';
}
