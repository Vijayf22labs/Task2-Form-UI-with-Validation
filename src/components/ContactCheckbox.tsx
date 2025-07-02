import React from 'react';

interface FormCheckboxProps {
  label: string;
  name: string;
  field: any;
  required?: boolean;
}

const ContactCheckbox: React.FC<FormCheckboxProps> = ({ label, field, name, required = false }) => {
  const hasError = field.state.meta.errors?.length > 0;

  return (
    <div className="flex flex-col gap-1 md:ml-2">
      <div className="flex items-start space-x-2">
        <input
          name={name}
          title="checkbox"
          type="checkbox"
          checked={field.state.value || false}
          onChange={(e) => field.handleChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
        />
        <label className="text-sm text-gray-700 dark:text-gray-300">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>

      {hasError && (
        <p className="text-sm text-red-500 ml-6">
          {field.state.meta.errors[0]?.message || String(field.state.meta.errors[0])}
        </p>
      )}
    </div>
  );
};

export default ContactCheckbox;
