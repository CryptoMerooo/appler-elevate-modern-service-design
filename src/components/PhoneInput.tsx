import { IMaskInput } from "react-imask";
import { forwardRef } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, className, placeholder = "+7 (___) ___-__-__", required }, ref) => {
    return (
      <IMaskInput
        mask="+7 (000) 000-00-00"
        value={value}
        unmask={false}
        onAccept={(value) => onChange(value)}
        placeholder={placeholder}
        required={required}
        className={className}
        inputRef={ref}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;

export const validatePhone = (phone: string): boolean => {
  // Проверяем полный формат +7 (XXX) XXX-XX-XX
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length === 11 && cleanPhone.startsWith("7");
};

export const getPhoneError = (phone: string): string | null => {
  if (!phone || phone === "+7 (") return "Введите номер телефона";
  if (!validatePhone(phone)) return "Введите корректный номер телефона";
  return null;
};
