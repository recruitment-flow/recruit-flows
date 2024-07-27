// requirements.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddRequirementComponent } from './add-requirement/add-requirement.component';
import { NewclientgenerationService } from 'src/app/newclientgeneration/newclientgeneration.service';
import { Requirement, requirements } from './requirements.component.service';
import { 
  ClarityIcons, vmIcon, homeIcon, folderIcon, userIcon, flameIcon, boltIcon, certificateIcon, barChartIcon, angleIcon,
  viewCardsIcon,
  gridChartIcon,
  organizationIcon,
  bullseyeIcon,
  barsIcon,
  snowflakeIcon,
  scrollIcon
} from '@cds/core/icon';
ClarityIcons.addIcons(
  vmIcon, homeIcon, folderIcon, userIcon, flameIcon, 
  boltIcon, certificateIcon, barChartIcon, angleIcon, viewCardsIcon, gridChartIcon, organizationIcon, bullseyeIcon, barsIcon, snowflakeIcon, scrollIcon
);

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit{
  requirements: Requirement[] = [];

  isModalOpen = false;
  loading: boolean;
  showGrid = true;

  constructor(public dialog: MatDialog,private clientService: NewclientgenerationService) {    
  }
  ngOnInit(): void {
    this.getRequirements();
    this.showGrid = true;
  }
  getRequirements(): void {
    this.loading = true;
    // this.requirements = [];
    this.requirements = requirements;
    console.log(this.requirements, 'Static Data');
    this.loading = false;
    // this.clientService.getReq().subscribe({
    //   next: res => {
    //     this.requirements = res.data; // Assign the response to a component variable        
    //    console.log(this.requirements,'Reqqqqqqqqqqq')
    //   },
    //   error: error => {
    //     console.error('Error fetching client data:', error);
    //   }
    // });
  }
  closeModal() {
    this.isModalOpen = false;
  }
  
  openAddRequirementModal(): void {
    const dialogRef = this.dialog.open(AddRequirementComponent, {
      width: '55%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Add the new requirement to the list
        // this.requirements.push(result);
      }
    });
  }

 
}
