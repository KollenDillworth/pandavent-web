import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element): void {

    var elmnt = document.getElementById(element);
    elmnt.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
