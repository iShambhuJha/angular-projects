import { HttpClientModule } from "@angular/common/http";
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";

import { ProjectTwoComponent } from "./project-two.component";

describe("ProjectTwoComponent", () => {
  let component: ProjectTwoComponent;
  let fixture: ComponentFixture<ProjectTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTwoComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("Should show the columns we expect", fakeAsync(() => {
    tick(5000);
    const ourDomTableUnderTest = document.querySelector("#testTable");
    const tableHeaders = Array.from(
      ourDomTableUnderTest.getElementsByClassName("mat-haeder-cell")
    );
    const headerClasses = [
      "mat-column-id",
      "mat-column-employee_name",
      "mat-column-employee_age",
      "mat-column-employee_salary",
      "mat-column-profile_image",
    ];
    tableHeaders.forEach((header) => {
      expect(
        headerClasses.some((item) => header.classList.contains(item))
      ).toBeTruthy();
    });
  }));
});
