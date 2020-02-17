import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public details:any;

  constructor( private ad:AddtocartService) { }

  ngOnInit() {
    this.ad.mobdtls.subscribe(data=>this.details=data)
    console.log(this.details);
  }
  
}
