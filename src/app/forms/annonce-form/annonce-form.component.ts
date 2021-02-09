
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annonce } from 'src/models/annonce';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';


@Component({
  selector: 'app-annonce-form',
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent implements OnInit {

  @Input()
  public annonce: Annonce|null = null;

  @Input()
  public violationList: ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Annonce>();


  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.annonce !== null) {
      this.formSubmit.emit(this.annonce);
    }
  }

  public retrieveErrors(fieldName: string): Array<string> {
    const arr: Array<string> = [];

    if (this.violationList !== null) {
      for (const err of this.violationList.violations) {
        if (err.propertyPath === fieldName) {
          arr.push(err.message);
        }
      }
    }

    return arr;
  }
}