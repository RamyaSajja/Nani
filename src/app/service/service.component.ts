import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public mobiles = [];
  public errormsg;
  public result1: any;
  constructor(private dt: DataserviceService, private _ac:AddtocartService) { }

  ngOnInit() {
    this.result1 = this.dt.getMobiles().subscribe(result => this.mobiles = result,
      error => this.errormsg = error);

    this._ac.mobdtls.subscribe(data => this.mobiles = data);
  }
  pushMethod() {
    this.mobiles.push(this.result1);
  }
  newDetails()
  {
    this._ac.mobileDetails(this.mobiles);
  }

  
}
