import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProjectOneComponent } from "./project-one.component";

describe("ProjectTwoComponent", () => {
  let component: ProjectOneComponent;
  let fixture: ComponentFixture<ProjectOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectOneComponent],
      imports:[FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should have 3 form controls", () => {
    const inputForm =
      fixture.debugElement.nativeElement.querySelector("#inputForm");
    const formElement = inputForm.querySelectorAll("input");
    expect(formElement.length).toEqual(3);
  });
  it('Should check validation of first input box', ()=>{
    let firstInput=component.inputForm.controls['firstInputValue'];
    expect(firstInput.valid).toBeFalsy();
    firstInput.setValue("");
    expect(firstInput.hasError('required')).toBeTruthy();
  });
  it('Should check validation of second input box', ()=>{
    let secondInput=component.inputForm.controls['secondInputValue'];
    expect(secondInput.valid).toBeFalsy();
    secondInput.setValue("");
    expect(secondInput.hasError('required')).toBeTruthy();
  });
  it('should check final result only if both the values are given', fakeAsync(()=>{
    let firstInput=component.inputForm.controls['firstInputValue'];
    let secondInput=component.inputForm.controls['secondInputValue'];
    const hostElement=fixture.nativeElement;
    let result:HTMLInputElement=hostElement.querySelector('#result');
    firstInput.setValue("24");
    secondInput.setValue("12");
    tick(2000);
    expect(component.inputForm.controls['result'].value).toEqual(2)
  }));
});
