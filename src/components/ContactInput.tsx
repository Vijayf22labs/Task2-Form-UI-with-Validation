import React from 'react';

interface FormInputProps {
  name: string
  type?: string,
  className?: string,
  placeholder?: string
  field: any
}

const ContactInput: React.FC<FormInputProps> = ({ name, type = 'text', placeholder, field, className }) => {

    return (
        <div className={`space-y-1 ${className}`}>
            <input type={type} name={name} value={field.state.value || ''} onChange={(e) => field.handleChange(e.target.value)} onBlur={field.handleBlur} placeholder={placeholder} className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 outline-none text-gray-900 dark:text-gray-100" />
            {field.state.meta.errors?.length > 0 && (
                <p className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors[0].message || String(field.state.meta.errors[0])}
                </p>
            )}
        </div>
    );
};

export default ContactInput;