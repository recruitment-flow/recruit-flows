import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {

  reportsData: any[] = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.loadReportsData();
  }

  loadReportsData(): void {
    this.reportsService.getReportsData().subscribe(
      (data) => {
        this.reportsData = data;
      },
      (error) => {
        console.error('Error fetching reports data: ', error);
      }
    );
  }
}
