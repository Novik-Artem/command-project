import { IEmployeesService } from "../layerInterfaces";
class EmployeesService implements IEmployeesService {
  getCharacters = async () => {
    const result = {
      value: [
        { id: 1, firstName: "Ivan", lastName: "Nefedov" },
        { id: 2, firstName: "Nikita", lastName: "Zalubov" },
        { id: 3, firstName: "Andrew", lastName: "Taranow" },
        { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
        { id: 5, firstName: "Artem", lastName: "Haliman" },
      ],
      error: undefined,
    };
    if (result.error) return { error: result.error };
    return { value: result.value };
  };
}
export default new EmployeesService();
