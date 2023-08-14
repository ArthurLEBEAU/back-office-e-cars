import { Form, Select, Input, Radio, DatePicker } from "antd";
// import moment from "moment";
import { useState } from "react";
// import AText from "./Text";

interface InputProps {
  className?: string;
  initialValue?: any;
  onClick?: any;
  showCount?: boolean;
  placeholder?: string;
  label?: string;
  name?: any;
  stateForm?: string | number | undefined;
  style?: object;
  rules?: any;
  size?: "large" | "middle" | "small";
  error?: any;
  addonBefore?: any;
  addonAfter?: any;
  onChange?: any;
  visibilityToggle?: boolean;
}

// interface UploadFileProps {
//   count: any;
// }
// interface SearchInputProps {
//   action?: any;
//   placeholder?: string;
// }
// interface CheckBoxProps {
//   checked?: boolean;
// }
interface TextInputProps {
  initialValue?: any;
  maxLength?: number;
  rules?: any;
  stateForm?: string | number | undefined;
  type: string;
}

interface SelectInputComponentProps {
  disableSelect?: boolean;
  loading?: boolean;
  valueOption: any;
  optionFilterProp?: string;
  filterOption?: boolean;
  filterSort?: boolean;
  showArrow?: boolean;
  showSearch?: boolean;
}
interface DatePickerProps {
  format?: string;
  help?: string;
  activeHelp?: boolean;
}
interface RadioProps {
  options: { label: string; value: string }[];
}
export function ATInput({
  initialValue,
  onClick,
  error,
  label,
  name,
  rules,
  maxLength,
  size,
  stateForm,
  placeholder,
  className,
  type,
  onChange,
  style,
  addonAfter,
  addonBefore,
  showCount,
}: InputProps & TextInputProps) {
  return (
    <Form.Item
      label={label}
      preserve={false}
      name={name}
      shouldUpdate
      validateStatus={error && error?.length > 0 ? "error" : undefined}
      help={error && error.length > 0 ? error[0].message : null}
      initialValue={stateForm !== undefined ? initialValue : undefined}
      rules={stateForm !== undefined ? undefined : rules}
    >
      <Input
        style={style}
        onClick={onClick}
        size={size}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        showCount={showCount}
        addonAfter={addonAfter}
        addonBefore={addonBefore}
      />
    </Form.Item>
  );
}

export function ATArea({ label, initialValue, name, error }: InputProps) {
  return (
    <Form.Item
      label={label}
      initialValue={initialValue}
      preserve={false}
      shouldUpdate
      name={name}
      validateStatus={error && error?.length > 0 ? "error" : undefined}
      help={error && error.length > 0 ? error[0].message : null}
    >
      <Input.TextArea
        showCount
        maxLength={255}
        autoSize={{ minRows: 3, maxRows: 5 }}
        minLength={2}
      />
    </Form.Item>
  );
}

export function ASInput({
  initialValue,
  label,
  rules,
  loading,
  name,
  placeholder,
  style,
  disableSelect,
  valueOption,
  optionFilterProp,
  filterOption,
  filterSort,
  showSearch,
  stateForm,
  onClick,
  error,
  size,
  className,
  onChange,
}: SelectInputComponentProps & InputProps) {
  const { Option } = Select;
  const filterOptionActive = filterOption
    ? (input: any, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    : false;

  const filterSortActive = filterSort
    ? (optionA: any, optionB: any) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
    : undefined;
  return (
    <Form.Item
      label={label}
      name={name}
      initialValue={stateForm ? initialValue : null}
      rules={!stateForm ? rules : undefined}
      validateStatus={error && error?.length > 0 ? "error" : undefined}
      help={error && error.length > 0 ? error[0].message : null}
    >
      <Select
        placeholder={placeholder}
        loading={loading}
        style={style}
        showSearch={showSearch}
        size={size}
        disabled={disableSelect}
        showArrow={true}
        optionFilterProp={optionFilterProp}
        onChange={onChange}
        className={className}
        filterOption={filterOptionActive}
        filterSort={filterSortActive}
      >
        {valueOption.map((item: any, index: any) => (
          <Option value={item.id} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export function ARadio({
  initialValue,
  label,
  rules,
  name,
  options,
  stateForm,
  error,
  // onChange,
}: InputProps & RadioProps) {
  const [checked, setChecked]: any = useState();

  console.log(checked, "cheked");
  return (
    <Form.Item
      label={label}
      name={name}
      initialValue={stateForm ? initialValue : null}
      rules={!stateForm ? rules : undefined}
      validateStatus={error && error?.length > 0 ? "error" : undefined}
      help={error && error.length > 0 ? error[0].message : null}
    >
      <Radio.Group
        onChange={(e) => {
          setChecked(e.target.value);
        }}
      >
        {options.map((item: any, index: any) => (
          <Radio
            className={`${
              item.value === checked
                ? "bg-green-100 "
                : "bg-gray-100"
            } text-gray-700 rounded p-5 flex-row-reverse`}
            value={item.value}
            key={index}
          >
            <span className={item.value === checked ? "font-bold text-green-500" : ""}>
              {item.label}
            </span>
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
}

export function ADatePicker({
  label,
  // format,
  onChange,
  activeHelp,
  // initialValue,
  name,
  stateForm,
  rules,
}: DatePickerProps & InputProps) {
  return stateForm !== undefined ? (
    <Form.Item
      label={label}
      name={name}
      // initialValue={moment(initialValue, format)}
      validateStatus={activeHelp ? "error" : ""}
      help={
        activeHelp === true
          ? "La date de fin de partenariat doit être supérieur à la date de début"
          : ""
      }
    >
      <DatePicker
        style={{ width: "100%" }}
        format={"DD-MM-YYYY"}
        onChange={onChange}
      />
    </Form.Item>
  ) : (
    <Form.Item
      label={label}
      name={name}
      rules={activeHelp ? [{ required: false }] : rules}
      validateStatus={activeHelp ? "error" : ""}
      help={
        activeHelp === true
          ? "La date de fin de partenariat doit être supérieur à la date de début"
          : ""
      }
    >
      <DatePicker
        style={{ width: "100%" }}
        placeholder={"JJ-MM-AAAA"}
        format={"DD-MM-YYYY"}
        // showTime={{defaultValue: moment('00:00', 'HH:mm')}}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export const APInput = ({
  label,
  name,
  placeholder,
  visibilityToggle,
  rules,
}: InputProps) => {
  return (
    <Form.Item label={label} rules={rules} name={name}>
      <Input.Password
        visibilityToggle={visibilityToggle}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};
