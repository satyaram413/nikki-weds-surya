import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nik-sur',
  templateUrl: './nik-sur.component.html',
  styleUrls: ['./nik-sur.component.scss'],
})
export class NikSurComponent implements OnInit {
  imagesArray = [];
  ngOnInit(): void {
    // $('.swinger').swinger();
    this.imagesArray.push();
  }
  hoverData(data: any) {
    (document.querySelectorAll('img') as any as Array<HTMLElement>).forEach(
      (ele, index) => {
        if (data !== index) {
          ele.style.zIndex = '1';
        } else {
          ele.style.zIndex = '2';
        }
      }
    );
  }
}
