import { Component, OnInit } from "@angular/core";
import { EmployeeserviceService } from "./service/employeeservice.service";
import { employeeModel } from "./model/employeeModel";
import Swal from "sweetalert2";
import { Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Store } from "@ngxs/store";
import { Router } from "@angular/router";
import { AddListItem } from "./actions";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public logged = false;
  public name;
  public idName;
  public IDName;
  public id = true;
  public allEmployee: employeeModel;
  public arrEmployee: employeeModel[] = [];
  constructor(
    public employeeService: EmployeeserviceService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.allEmployee = new employeeModel();
    this.loadAllEmphloyee();
  }
  loadAllEmphloyee() {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.arrEmployee = data;
      // console.log(this.arrEmployee);
    });
  }
  changeText(val) {
    this.name = val;
  }
  onCloseForm() {
    this.logged = !this.logged;
    this.id = true;
  }
  onEdit(id) {
    this.id = false;
    this.logged = true;
    this.employeeService.getOneEmployee(id).subscribe((data) => {
      this.idName = data.name;
      this.IDName = data.id;
      this.store.dispatch(new AddListItem(this.idName));
    });

    // setTimeout(() => {
    //   this.showItemAdded = false;
    // }, 2000);
  }
  onDelete(id) {
    console.log(id);
    Swal.fire({
      title: "Bạn có muốn xóa?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteOneEmployee(id).subscribe((data) => {
          window.setTimeout(window.location.reload.bind(window.location), 1000);
        });
      }
    });
  }
  onSubmit() {
    if (this.id === true) {
      let data = {
        name: this.name,
      };
      this.employeeService.postNewEmployee(data).subscribe((data) => {
        Swal.fire("success", "Thêm mới thành công", "success");
        this.logged = !this.logged;
        window.setTimeout(window.location.reload.bind(window.location), 1000);
      });
    } else {
      let data = {
        name: this.name,
      };
      this.employeeService
        .putOneEmployee(this.IDName, data)
        .subscribe((data) => {
          Swal.fire("success", "cập nhật thành công", "success");
          window.setTimeout(window.location.reload.bind(window.location), 1000);
        });
    }
  }
}
