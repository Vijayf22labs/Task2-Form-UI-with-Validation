import React from 'react'
import { Upload } from 'lucide-react'

interface ContactFileUploadProps {
  name: string
  field: any
  label?: string
}

const ContactFileUpload: React.FC<ContactFileUploadProps> = ({ name, field, label = 'Upload Additional file' }) => {

  const file = field.state.value as File | undefined
  const hasError = field.state.meta.errors?.length > 0

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    field.handleChange(file)
  }

  return (
    <div className="flex flex-col gap-2 w-full col-span-1 sm:col-span-2">
      <label htmlFor={name} className={`flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-md cursor-pointer transition ${hasError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700`}>
        <div className="flex gap-x-4 items-center justify-center">
          {!file && <Upload className="w-5 h-5" />}
          <span className="text-sm">{file?.name || label}</span>
        </div>
        <input id={name} name={name} type="file" accept='image/*' className="hidden" onChange={handleFileChange} />
      </label>
      <p className="text-xs text-gray-500 dark:text-gray-400">Attach file. File size of your documents should not exceed 10MB.</p>
      {hasError && (
        <p className="text-sm text-red-500">
          {field.state.meta.errors[0]?.message || String(field.state.meta.errors[0])}
        </p>
      )}
    </div>
  )
}

export default ContactFileUpload
