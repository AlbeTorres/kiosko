import { FieldErrors } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type PhonetextFieldProps = {
  value: any
  onChange(event: any): void
  errors?: string
}

export const PhoneTextField = ({ value, onChange, errors }: PhonetextFieldProps) => {
  return (
    <div className='flex w-full flex-col items-start'>
      <label className='label label-text' htmlFor='phone'>
        {'Teléfono del contácto'}
      </label>
      <PhoneInput
        numberInputProps={{
          className:
            '!w-full !input !border-2 !border-gray-200 focus:!outline-none  bg-transparent font-regular focus:!ring-0',
          id: 'phone',
        }}
        className='w-full'
        defaultCountry='CU'
        value={value}
        onChange={onChange}
      />
      {errors && <p className='mt-1 text-red-10'>{errors}</p>}
    </div>
  )
}
