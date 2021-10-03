import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GLOSSARY, Glossary } from '../data/glossary';




@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.less']
})
export class GlossaryComponent implements OnInit {

  glossary: Glossary[];

  constructor(@Inject(MAT_DIALOG_DATA) public code: string) { 

    this.glossary = GLOSSARY.filter(g => g.code === code);

  }



  ngOnInit(): void {
  }

}
