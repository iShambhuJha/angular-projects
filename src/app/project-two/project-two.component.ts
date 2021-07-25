import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TabledataService } from "../tabledata.service";

@Component({
  selector: "app-project-two",
  templateUrl: "./project-two.component.html",
  styleUrls: ["./project-two.component.css"],
})
export class ProjectTwoComponent implements OnInit {
  users: any;
  userData = [];
  private total = 0;
  private value;
  displayedColumns: string[] = [
    "id",
    "employee_name",
    "employee_age",
    "employee_salary",
    "profile_image",
  ];
  constructor(private _TabledataService: TabledataService) {}

  ngOnInit(): void {
    this.getUser();
  }
  //Fetching all data and binding it to the grid
  public getUser() {
    this._TabledataService.getUserDetails().subscribe((data: any) => {
      this.userData = data["data"];
      this.users = new MatTableDataSource(data["data"]);
      this.getTotalSal();
    });
  }
  //Adding all the values of employee salary column
  public getTotalSal() {
    return this.userData
      .map((t) => t.employee_salary)
      .reduce((acc, value) => acc + value, 0);
  }
}
