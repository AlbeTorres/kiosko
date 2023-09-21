import { FieldErrors } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type PhonetextFieldProps = {
  value: any
  onChange(event: any): void
  errors?: string
  required?: boolean
  label: string
  placeholder: string
}

export const PhoneTextField = ({
  value,
  onChange,
  errors,
  required,
  label,
  placeholder,
}: PhonetextFieldProps) => {
  return (
    <div className='flex w-full flex-col items-start'>
      <label className='label label-text' htmlFor='phone'>
        {label}
        {required && <span className='text-red-500 ml-1 '>*</span>}
      </label>
      <PhoneInput
        placeholder={placeholder}
        numberInputProps={{
          className:
            '!w-full !input !h-10 !border-2 !border-gray-200 focus:!outline-none  bg-transparent font-regular focus:!ring-0',
          id: 'phone',
        }}
        className='w-full'
        defaultCountry='CU'
        countries={['CU']}
        value={value}
        onChange={onChange}
      />
      {errors && <p className='mt-1 text-red-500'>{errors}</p>}
    </div>
  )
}
