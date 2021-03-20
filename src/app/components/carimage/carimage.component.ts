import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Cardetail } from "src/app/models/cardetail";
import { Carimage } from "src/app/models/carimage";
import { CardetailService } from "src/app/services/cardetail.service";
import { CarimageService } from "src/app/services/carimage.service";

@Component({
  selector: "app-carimage",
  templateUrl: "./carimage.component.html",
  styleUrls: ["./carimage.component.css"],
})
export class CarimageComponent implements OnInit {
  carimages: Carimage[] = [];
  cardetails: Cardetail[]=[];
  imagePath = "https://localhost:44322";

  constructor(
    private carImageService: CarimageService,
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carid"]) {
        this.getAllCarsByBrandId(params["carId"]),
        this.getCarImages(params["carid"])
      }
    });
  }

  getCarImages(Id: number) {
    this.carImageService.getCarImages(Id).subscribe((response) => {
      this.carimages = response.data;
    });
  }

  getAllCarsByBrandId(Id: number) {
    this.cardetailService.getAllCarsByBrandId(Id).subscribe((response) => {
      this.cardetails = response.data;
      
    });
  }

  getImagePath(image:string){
    return this.imagePath + image;
   }
}
