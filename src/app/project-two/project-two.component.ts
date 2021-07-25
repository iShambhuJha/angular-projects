import { SelectionModel } from "@angular/cdk/collections";
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
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [
    "select",
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
  public getTotalsubset() {
    // console.log(this.selection,'this.selections')
    return this.selectedColumns
      .map((t) => t.employee_salary)
      .reduce((acc, value) => acc + value, 0);
  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {

    const numSelected = this.selection.selected.length;
    const numRows = this.users.data.length;
    return numSelected === numRows;
  }
selectedColumns=[];
  isChanged(event,row){
    console.log(event,'event')
    console.log(row,'row')

    if(event.checked){
      this.selectedColumns.push(row);
    }else{
      const index = this.selectedColumns.indexOf(row);
      if (index > -1) {
        this.selectedColumns.splice(index, 1);
      }
    }
    console.log(this.selectedColumns,'selectedColumns')
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.users.data.forEach(row => this.selection.select(row));
  }
}

