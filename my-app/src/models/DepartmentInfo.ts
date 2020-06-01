export interface Department {
  id: string;
  name: string;
  employeeDetails: EmployeeDetails[];
}

export interface EmployeeDetails {
  id: number;
  name: string;
  city: string;
  departmentId: string;
}
