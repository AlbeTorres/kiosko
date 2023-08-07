type SelectProps = JSX.IntrinsicElements['select'] & {
  placeholder: string
  items: string[]
  label?: string
  error?: string
  disabled?: boolean
}

export const Select = ({ placeholder, items, label, error, disabled, ...props }: SelectProps) => {
  return (
    <div>
      <label className='label block '>
        <span className='label-text'>{label}</span>
      </label>
      <select className='select select-bordered w-full max-w-xs' disabled={disabled} {...props}>
        <option disabled selected>
          {placeholder}
        </option>
        {items.map((i, index) => (
          <option key={index}>{i}</option>
        ))}
      </select>
      {error && <p className='mt-1 text-base text-red-10'>{}</p>}
    </div>
  )
}
