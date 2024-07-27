import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CreateMasterDataComponent } from './create-master-data/create-master-data.component';
import { MatDialog } from '@angular/material/dialog';
import { NewclientgenerationService } from './newclientgeneration.service';


@Component({
  selector: 'app-newclientgeneration',
  templateUrl: './newclientgeneration.component.html',
  styleUrls: ['./newclientgeneration.component.scss']
})
export class NewclientgenerationComponent implements OnInit {
  clients: any[]= [];
  isModalOpen = false;
  clientColumns: string[] = ['S.No', 'Name','Actions'];
  clientHeaders: string[] = ['sno', 'name', 'actions'];
  clientSource: any[] = [];
  showClientData=false;
  groupColumns: string[] = ['S.No', 'Name', 'Actions'];
  groupHeaders: string[] = ['sno', 'name', 'actions'];
  groupSource: any[] = [];
  showGroupData=false;
  managerColumns: string[] = ['S.No', 'Client Name', 'Group Name', 'Manager Name', 'Actions'];
  managerHeaders: string[] = ['sno', 'clientName','groupName','managerName', 'actions'];
  managerSource: any[] = [];  
  showManagerData=false;
  leadColumns: string[] = ['S.No', 'Client Name', 'Group Name', 'Manager Name','Lead Name', 'Actions'];
  leadHeaders: string[] = ['sno', 'clientName','groupName','managerName','leadName', 'actions'];
  leadSource: any[] = []; 
  showLeadData=false; 
  recruiterColumns: string[] = ['S.No', 'Client Name', 'Group Name', 'Manager Name','Lead Name','Recruiter Name', 'Actions'];
  recruiterHeaders: string[] = ['sno', 'clientName','groupName','managerName','leadName','recruiterName', 'actions'];
  recruiterSource: any[] = [];
  showrecruiterData=false;
  constructor(public dialog: MatDialog,private clientService: NewclientgenerationService,
    private changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.getClients();
    this.getGroups();
    this.getManager();
    // this.getLeadRecruiter();
  }
  showTableData(type:any){
    if(type=='clients'){
      this.showClientData = true;
    }else if(type=='groups'){
      this.showGroupData = true;
    }else if(type=='managers'){
      this.showManagerData = true;
    }else if(type=='leads'){
      this.showLeadData = true;
    }else if(type=='recruiters'){
      this.showrecruiterData = true;
    }
  }
  getClients(): void {
    this.clientSource = [];
    this.clientService.getClient().subscribe({
      next: res => {
        this.clients = res.data; // Assign the response to a component variable        
        const transformedData = this.clients.map(client => ({
          sno: client.id, // Increment sno based on current length of clientSource
          name: client.attributes.client_name
        }));
        this.clientSource.push(...transformedData);
        localStorage.setItem('clientList',JSON.stringify(this.clientSource));
        console.log(this.clientSource,'pppppppppp')
        this.changeDetectorRef.detectChanges();
      },
      error: error => {
        console.error('Error fetching client data:', error);
      }
    });
  }
  getGroups(): void {
    this.groupSource = [];
    this.clientService.getGroup().subscribe({
      next: res => {
        this.clients = res.data; // Assign the response to a component variable        
        const transformedData = this.clients.map(client => ({
          sno: client.id, // Increment sno based on current length of clientSource
          name: client.attributes.group_name
        }));
        this.groupSource.push(...transformedData);
        localStorage.setItem('groupList',JSON.stringify(this.groupSource));
        this.changeDetectorRef.detectChanges();
      },
      error: error => {
        console.error('Error fetching client data:', error);
      }
    });
  }
  getManager(): void {
    this.managerSource = [];
    this.clientService.getManager().subscribe({
      next: res => {
        this.clients = res.data; // Assign the response to a component variable        
        const transformedData = this.clients.map(cl => ({
          sno: cl.id, // Increment sno based on current length of clientSource
          clientName: cl.attributes?.client?.data?.attributes?.client_name,
          groupName: cl.attributes?.group?.data?.attributes?.group_name,
          managerName: cl.attributes.name
        }));
        this.managerSource.push(...transformedData);
        this.changeDetectorRef.detectChanges();
      },
      error: error => {
        console.error('Error fetching client data:', error);
      }
    });
  }
  getLeadRecruiter(): void {
    this.clientService.getLeadRecruiter().subscribe({
      next: res => {
        this.clients = res.data; // Assign the response to a component variable        
        const transformedData = this.clients.map(client => ({
          sno: client.id, // Increment sno based on current length of clientSource
          clientName: null,
          groupName: null,
          managerName: null,
          leadName:client.attributes.name
        }));
        this.leadSource.push(...transformedData);
        this.changeDetectorRef.detectChanges();
      },
      error: error => {
        console.error('Error fetching client data:', error);
      }
    });
  }
  // getRecruiter(): void {
  //   this.clientService.getRecruiter().subscribe({
  //     next: res => {
  //       this.clients = res.data; // Assign the response to a component variable        
  //       const transformedData = this.clients.map(client => ({
  //         sno: client.id, // Increment sno based on current length of clientSource
  //         clientName: null,
  //         groupName: null,
  //         managerName: null,
  //         leadName: null,
  //         recruiterName: client.attributes.name
  //       }));
  //       this.recruiterSource.push(...transformedData);
  //       this.changeDetectorRef.detectChanges();
  //     },
  //     error: error => {
  //       console.error('Error fetching client data:', error);
  //     }
  //   });
  // }
  closeModal() {
    this.isModalOpen = false;    
  }
  
  openAddClientModal(type: any): void {    
    const dialogRef = this.dialog.open(CreateMasterDataComponent, {
      width: '55%',
      data: type
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getClients();
        this.getGroups();
        this.getManager();
        // Add the new requirement to the list
        // this.requirements.push(result);
      }
    });
  }

  
}
