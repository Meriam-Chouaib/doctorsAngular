import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  array = [
    {
    "i":"1",
    "img":"https://thumbs.dreamstime.com/z/doctor-medical-background-24834402.jpg"},
    {
      "i": "2",
      "img": "https://www.healthcarefinancenews.com/sites/healthcarefinancenews.com/files/elderly_patient_crop_16.jpg"
    },
    // {
    //   "i": "3",
    //   "img": "https://media.istockphoto.com/photos/online-doctor-telemedicine-future-technology-trend-patient-consult-picture-id1296963883?k=20&m=1296963883&s=612x612&w=0&h=VJ6dpDTl74fQHN4l0zYQ7jP82n16WpiLtiBoTQuDMKU="
    // },
    {
      "i": "4",
      "img": "https://i-studentglobal.com/wp-content/uploads/2019/01/shutterstock_1101100952.jpg"
    },];
}
