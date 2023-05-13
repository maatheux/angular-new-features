import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getRouteParams } from 'src/app/helpers/get-route-params';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public id = getRouteParams('id');

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);

  }

}
