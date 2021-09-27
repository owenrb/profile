import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GlossaryComponent } from '../glossary/glossary.component';

@Component({
  selector: 'app-guiding-principles',
  templateUrl: './guiding-principles.component.html',
  styleUrls: ['./guiding-principles.component.less']
})
export class GuidingPrinciplesComponent implements OnInit {

  showFiller = false;
  
  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  onClick(topic: string) {

    this.dialog.open(GlossaryComponent, {
      data: topic
    });

    return false;
  }

}
