import EmployeesService from "./employeesService";
import { IEmployeesService } from "./layerInterfaces";
class UseCases {
  EmployeesService: IEmployeesService;
  constructor() {
    this.EmployeesService = EmployeesService;
  }
}
export default new UseCases();
