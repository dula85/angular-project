import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() activeLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  setActiveLink(link:string){
    this.activeLink.emit(link);
  }

}
