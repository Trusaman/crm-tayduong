import type { ExpenseTemplate } from "./columns"

export const mockData: ExpenseTemplate[] = [
  {
    customer_code: "CUST001",
    unit_name: "Unit A",
    medicine_name: "Medicine X",
    active_ingredient: "Ingredient A",
    unit: "Tablet",
    price_including_vat: 10.99,
    doctor: "Dr. Smith",
    doctor_recipient_code: "DOC001",
    doctor_recipient_name: "John Smith",
    pharmacy_department: "Pharmacy A",
    pharmacy_recipient_code: "PHARM001",
    pharmacy_recipient_name: "Pharmacy Team A",
    health_department: "Health Dept A",
    health_recipient_code: "HEALTH001",
    health_recipient_name: "Health Team A",
    employee_bonus: 5.0,
    employee_bonus_recipient_code: "EMP001",
    employee_bonus_recipient_name: "Employee A",
    manager_bonus: 10.0,
    manager_bonus_recipient_code: "MNG001",
    manager_bonus_recipient_name: "Manager A",
    total_promotion: 15.0,
    final_price: 95.99,
    confirmation: true,
  },
  // Add more mock data entries here...
]

