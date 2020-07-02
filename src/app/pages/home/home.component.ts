import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private slideIndex = 1;

  
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = "none";
    }
    (x[this.slideIndex-1] as HTMLElement).style.display = "block";
  }

  ngOnInit(): void {
    this.showDivs(this.slideIndex);
  }
}
