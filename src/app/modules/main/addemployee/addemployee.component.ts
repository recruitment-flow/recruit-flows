import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddEmployeeComponent {
  addEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addEmployeeForm = this.fb.group({
      status: ['', Validators.required],
      islead: [false],
      assignItself: [false],
      firstName: ['', Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      fatherName: [''],
      officeName: [''],
      basicSalary: [0, Validators.required],
      branch: [''],
      department: [''],
      designation: [''],
      balanceLoan: [0],
      address1: [''],
      address2: [''],
      address3: [''],
      address4: [''],
      dateOfJoin: [''],
      dateOfBirth: [''],
      generalEmailId: ['', [Validators.required, Validators.email]],
      pf: [''],
      mobileNumber: [''],
      accountNumber: [''],
      panNumber: [''],
      esic: [''],
      employeeId: [''],
      managerName: [''],
      subManager: [''],
      userName: [''],
      password: [''],
      emergencyContact: [''],
      role: ['']
    });
  }

  onSubmit() {
    if (this.addEmployeeForm.valid) {
      console.log('Form Submitted', this.addEmployeeForm.value);
    }
  }
}
