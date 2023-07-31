import cn from '../../../util/cn'

type CheckoutStepsProps = {
  step: number
  onChange(current: number): void
}

const STEPS = [1, 2, 3]

export const CheckoutSteps = ({ step, onChange }: CheckoutStepsProps) => (
  <div className='flex items-center space-x-5 h-fit'>
    {STEPS.map(s => (
      <div
        onClick={() => onChange(s)}
        key={s}
        className={cn(
          'h-10 w-10 rounded-full border border-primary flex items-center justify-center shadow-md cursor-pointer hover:bg-primary-focus hover:text-white font-semibold  ',
          s <= step ? 'bg-primary text-white' : 'bg-white text-primary',
        )}
      >
        <p>{s}</p>
      </div>
    ))}
  </div>
)
