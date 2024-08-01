import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
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
  boltIcon, certificateIcon, barChartIcon, angleIcon, viewCardsIcon, gridChartIcon, organizationIcon, bullseyeIcon, barsIcon, snowflakeIcon, scrollIcon,
);

@Component({
  selector: 'app-mat-table',
  templateUrl: './app-mat-table.component.html',
  styleUrls: ['./app-mat-table.component.scss']
})
export class AppMatTableComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input() displayedColumns: string[] = [];
  @Input() columnHeaders: string[] = [];
  @Input() dataSource: any[] = [];
  serialNumber: number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] && this.dataSource) {
      // Refresh the data source if needed
      this.dataSource = [...this.dataSource];
    }
  }

  addRow() {
    const newId = this.dataSource.length + 1;
    this.dataSource.push({ id: newId, name: `Client ${newId}` });
    this.dataSource = [...this.dataSource];  // Refresh the table data
  }

  updateRow(client: any) {
    // Implement update logic
    client.name = prompt('Update client name', client.name) || client.name;
    this.dataSource = [...this.dataSource];  // Refresh the table data
  }

  deleteRow(id: number) {
    this.dataSource = this.dataSource.filter(client => client.id !== id);
  }
}
