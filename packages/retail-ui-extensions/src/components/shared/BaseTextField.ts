export interface BaseTextFieldProps {
  title?: string;
  subtitle?: string;
  value?: string;
  hint?: string;
  isValid?: boolean;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
}
