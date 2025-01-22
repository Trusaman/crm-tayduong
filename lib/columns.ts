export type ExpenseTemplate = {
  customer_code: string
  unit_name: string
  medicine_name: string
  active_ingredient: string
  unit: string
  price_including_vat: number
  doctor: string
  doctor_recipient_code: string
  doctor_recipient_name: string
  pharmacy_department: string
  pharmacy_recipient_code: string
  pharmacy_recipient_name: string
  health_department: string
  health_recipient_code: string
  health_recipient_name: string
  employee_bonus: number
  employee_bonus_recipient_code: string
  employee_bonus_recipient_name: string
  manager_bonus: number
  manager_bonus_recipient_code: string
  manager_bonus_recipient_name: string
  total_promotion: number
  final_price: number
  confirmation: boolean
}

export const columns = [
  { key: "customer_code", label: "Customer Code" },
  { key: "unit_name", label: "Unit Name" },
  { key: "medicine_name", label: "Medicine Name" },
  { key: "active_ingredient", label: "Active Ingredient" },
  { key: "unit", label: "Unit" },
  { key: "price_including_vat", label: "Price (inc. VAT)" },
  { key: "doctor", label: "Doctor" },
  { key: "doctor_recipient_code", label: "Doctor Recipient Code" },
  { key: "doctor_recipient_name", label: "Doctor Recipient Name" },
  { key: "pharmacy_department", label: "Pharmacy Department" },
  { key: "pharmacy_recipient_code", label: "Pharmacy Recipient Code" },
  { key: "pharmacy_recipient_name", label: "Pharmacy Recipient Name" },
  { key: "health_department", label: "Health Department" },
  { key: "health_recipient_code", label: "Health Recipient Code" },
  { key: "health_recipient_name", label: "Health Recipient Name" },
  { key: "employee_bonus", label: "Employee Bonus" },
  { key: "employee_bonus_recipient_code", label: "Employee Bonus Recipient Code" },
  { key: "employee_bonus_recipient_name", label: "Employee Bonus Recipient Name" },
  { key: "manager_bonus", label: "Manager Bonus" },
  { key: "manager_bonus_recipient_code", label: "Manager Bonus Recipient Code" },
  { key: "manager_bonus_recipient_name", label: "Manager Bonus Recipient Name" },
  { key: "total_promotion", label: "Total Promotion" },
  { key: "final_price", label: "Final Price" },
  { key: "confirmation", label: "Confirmation" },
] as const

