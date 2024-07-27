import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table',
  templateUrl: './app-mat-table.component.html',
  styleUrls: ['./app-mat-table.component.scss']
})
export class AppMatTableComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  tableDataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() displayedColumns: any = null;
  @Input() columnHeaders: any = null;  
  @Input() dataSource: any = null;
  serialNumber: any = 1;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataSource,'lllllllllopppp')
    if (changes['dataSource'] && this.dataSource) {
      this.tableDataSource.data = this.dataSource;
      console.log(this.tableDataSource.data); // Debugging line to ensure data is being set
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
    this.dataSource = this.dataSource.filter((client: any) => client.id !== id);
  }
}
