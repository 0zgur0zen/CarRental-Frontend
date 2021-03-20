import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cardetail } from "src/app/models/cardetail";
import { Carimage } from "src/app/models/carimage";
import { CardetailService } from "src/app/services/cardetail.service";
import { CarimageService } from "src/app/services/carimage.service";

@Component({
  selector: "app-cardetail",
  templateUrl: "./cardetail.component.html",
  styleUrls: ["./cardetail.component.css"],
})
export class CardetailComponent implements OnInit {
  cardetails: Cardetail[] = [];
  carimage:Carimage[]=[];
  dataLoaded = false;
  
    constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private carimageService:CarimageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["brandid"]) {
        this.getAllCarsByBrandId(params["brandid"]);
      } else if (params["colorid"]) {
        this.getAllCarsByColorId(params["colorid"]);
      } else {
        this.getCarDetail();
      }
    });
  }

  getCarDetail() {
    this.cardetailService.getCarDetail().subscribe((response) => {
      this.cardetails = response.data;

      this.dataLoaded = true;
    });
  }

  getAllCarsByBrandId(Id: number) {
    this.cardetailService.getAllCarsByBrandId(Id).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getAllCarsByColorId(Id: number) {
    this.cardetailService.getAllCarsByColorId(Id).subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(Id:number){
    this.carimageService.getCarImages(Id).subscribe(response=>{
      this.carimage=response.data;
    });
  }
}
