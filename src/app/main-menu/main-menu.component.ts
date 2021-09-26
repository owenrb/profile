import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onTabChanged(tab: number) {

    switch (tab) {
      case 1:
        this.router.navigate(['principles']);
        break;
      case 2:
        this.router.navigate(['skills']);
        break;
      case 3:
        this.router.navigate(['experiences']);
        break;
      case 4:
        this.router.navigate(['disciplines']);
        break;
      default:
        this.router.navigate(['aboutMe'])
    }

  }

}
