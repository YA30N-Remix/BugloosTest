import { FormGroup } from '@angular/forms'; 
import { Component, Input, OnInit } from '@angular/core';
import { ElementsBase } from '../services/elements';

@Component({
  selector: 'app-elementgenerator',
  templateUrl: './elementgenerator.component.html',
  styleUrls: ['./elementgenerator.component.css']
})
export class ElementGeneratorComponent implements OnInit {
  title:string='BugloosTest ElementGenerator';

  @Input()
  input!: ElementsBase;
  @Input() form!: FormGroup;

  payLoad = ' ';

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.input.fieldname].valid; }

}