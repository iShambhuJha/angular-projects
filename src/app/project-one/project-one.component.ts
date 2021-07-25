import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "app-project-one",
  templateUrl: "./project-one.component.html",
  styleUrls: ["./project-one.component.css"],
})
export class ProjectOneComponent implements OnInit {
  inputForm: FormGroup;
  firstValue;
  secondValue;
  constructor(private formBuilder: FormBuilder) {
    this.inputNumbersForm();
  }

  ngOnInit(): void {
    //Subscribing first input box changed value with a debounce time of 1 second
    this.inputForm
      .get("firstInputValue")
      .valueChanges.pipe(debounceTime(1000))
      .subscribe((dataValue) => {
        this.firstValue = dataValue;
        this.onNumChange();
      });
    //Subscribing second input box changed value with a debounce time of 1 second
    this.inputForm
      .get("secondInputValue")
      .valueChanges.pipe(debounceTime(1000))
      .subscribe((dataValue) => {
        this.secondValue = dataValue;
        this.onNumChange();
      });
  }
  inputNumbersForm() {
    this.inputForm = this.formBuilder.group({
      firstInputValue: ["", [Validators.required]],
      secondInputValue: ["", [Validators.required]],
      result: [{ value: "", disabled: true }],
    });
  }
  // Dividing the two numbers
  public onNumChange() {
    if (
      this.inputForm.controls["firstInputValue"].value &&
      this.inputForm.controls["secondInputValue"].value
    ) {
      let result =
        Number(this.inputForm.controls["firstInputValue"].value) /
        Number(this.inputForm.controls["secondInputValue"].value);
      this.inputForm.controls["result"].setValue(result);
    } else {
      this.inputForm.controls["result"].setValue(null);
    }
  }
}
