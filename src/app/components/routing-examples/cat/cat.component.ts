import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    
  }

  onLoadSmallCat() {
    this.router.navigate(['small-cat'], {relativeTo: this.activatedRoute});
  }

}
