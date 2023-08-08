import { UseFormRegister } from 'react-hook-form'

type SelectProps = JSX.IntrinsicElements['select'] & {
  placeholder: string
  items: string[]
  label?: string
  error?: string
  disabled?: boolean
  register: UseFormRegister<any>
  name: string
}

export const Select = ({
  placeholder,
  items,
  label,
  error,
  disabled,
  register,
  name,
  ...props
}: SelectProps) => {
  return (
    <div>
      <label className='label block '>
        <span className='label-text'>{label}</span>
      </label>
      <select
        {...register(name)}
        className='select select-bordered w-full max-w-xs'
        disabled={disabled}
        {...props}
      >
        {items.map((i, index) => (
          <option value={i} key={index}>
            {i}
          </option>
        ))}
      </select>
      {error && <p className='mt-1 text-base text-red-10'>{`Campo ${name} requerido`}</p>}
    </div>
  )
}
