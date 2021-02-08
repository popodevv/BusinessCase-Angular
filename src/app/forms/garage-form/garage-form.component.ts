import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstraintViolationList } from 'src/models/constraint-violation-list';
import { Garage } from 'src/models/garage';


@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.scss']
})
export class GarageFormComponent implements OnInit {

  @Input()
  public garage: Garage|null = null;

  @Input()
  public violationList:ConstraintViolationList|null = null;

  @Output()
  public formSubmit = new EventEmitter<Garage>();


  constructor() { }

  ngOnInit(): void {
  }

  public submit(): void {
    if (this.garage !== null) {
      this.formSubmit.emit(this.garage);
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