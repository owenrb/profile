import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.less']
})
export class GlossaryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public code: string) { }

  ngOnInit(): void {
  }

}
