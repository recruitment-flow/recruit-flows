import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { NewclientgenerationService } from '../newclientgeneration.service';

@Component({
  selector: 'app-create-master-data',
  templateUrl: './create-master-data.component.html',
  styleUrls: ['./create-master-data.component.scss']
})
export class CreateMasterDataComponent {
  addRegistrationForm: FormGroup;
title: any;
clientList:any;
groupList:any;
  constructor(
    private fb: FormBuilder,
    private newclientService: NewclientgenerationService,
    public dialogRef: MatDialogRef<CreateMasterDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
   
  ) {
    this.addRegistrationForm = this.createForm(this.data);
    const storedClientList = localStorage.getItem('clientList');
    if(storedClientList){
      this.clientList = JSON.parse(storedClientList);
    }
    const storedGroupList = localStorage.getItem('groupList');
    if(storedGroupList){
      this.groupList = JSON.parse(storedGroupList);
      console.log(this.groupList)
    }
  }
  modalOpen: boolean = true;
  createForm(data: any): FormGroup{

    let formGroup: FormGroup;

    if (data === 'clients') {
      this.title = 'Client Information';
      formGroup = this.fb.group({
        clientName: ['']
      });
    } else if (data === 'groups') {
      this.title = 'Group Information';
      formGroup = this.fb.group({
        groupName: ['']
      });
    }else if (data === 'managers') {
      this.title = 'Manager Information';
      formGroup = this.fb.group({
        clientName: [''],
        groupName: [''],
        managerName: ['']
      });
    }else if (data === 'lead') {
      this.title = 'Lead Information';
      formGroup = this.fb.group({
        clientName: [''],
        groupName: [''],
        managerName: [''],
        leadName:['']
      });
    }else  if (data === 'recruiter') {
      this.title = 'Recruiter Information';
      formGroup = this.fb.group({
        clientName: [''],
        groupName: [''],
        managerName: [''],
        leadName:[''],
        recruiter: ['']
      });
    }else {
      // Default form group or handle other cases
      formGroup = this.fb.group({});
    }

    return formGroup;
  }
  setPayload() {
    const obj: any = {};
    const formData = this.addRegistrationForm.value;
    if (this.data === 'clients'){
      if (formData && formData.clientName && formData.clientName.length) {
        obj.client_name = formData.clientName;
      } else {
        obj.client_name = [];
      }
      obj.status= true;
      obj.manager= null;
    }else if (this.data === 'groups'){
      if (formData && formData.groupName && formData.groupName.length) {
        obj.group_name = formData.groupName;
      } else {
        obj.group_name = [];
      }
      obj.status= true;
      obj.manager= null;
    } if (this.data === 'managers'){//this.clientForm.value.clientName
      if (formData && formData.clientName && formData.clientName.length) {
        obj.client_name = formData.clientName;
      } else {
        obj.client_name = [];
      }
      if (formData && formData.groupName && formData.groupName.length) {
        obj.group_name = formData.groupName;
      } else {
        obj.group_name = [];
      }
      if (formData && formData.managerName && formData.managerName.length) {
        obj.name = formData.managerName;
      } else {
        obj.name = [];
      }
      obj.status= true;
      obj.phone= null;
      obj.email= null;
    }
      return obj;
  }
  onSubmit() {
    if (this.addRegistrationForm.valid) {
      const payload = this.setPayload();
      this.newclientService.insertActivityList(payload,this.data).subscribe(res => {
        this.closeModal();
      });
      // Pass the form data back to the parent component
      this.dialogRef.close(this.addRegistrationForm.value);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }
}
