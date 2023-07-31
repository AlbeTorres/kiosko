import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type PhonetextFieldProps = {
  value: any
  onChange(event: any): void
}

export const PhoneTextField = ({ value, onChange }: PhonetextFieldProps) => {
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
    </div>
  )
}
