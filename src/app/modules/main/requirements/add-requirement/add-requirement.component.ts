import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.scss']
})
export class AddRequirementComponent  {
  addRequirementForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddRequirementComponent>
  ) {
    // this.addRequirementForm = this.fb.group({
    //   reqNumber: ['', Validators.required],
    //   clientName: ['', Validators.required],
    //   recruiter: ['', Validators.required]
    // });

    this.addRequirementForm = this.fb.group({
      reqNumber: [''],
      clientName: ['ALL CLIENTS'],
      recruiter: ['--Select Recruiter--'],
      reqDate: [''],
      group: ['Select Group Name'],
      brNo: [''],
      requirement: [''],
      managerName: ['Select Manager'],
      srNo: [''],
      noOfPositions: [''],
      lead: ['--Select Lead--'],
      typeOfSot: ['SELECT'],
      workLocation: [''],
      teamLead: ['--Select Team Lead--'],
      rehash: ['NO'],
      customerName: [''],
      easy: [false],
      medium: [false],
      difficult: [false],
      veryDifficult: [false],
    });
  }

  onSubmit() {
    if (this.addRequirementForm.valid) {
      // Pass the form data back to the parent component
      this.dialogRef.close(this.addRequirementForm.value);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}