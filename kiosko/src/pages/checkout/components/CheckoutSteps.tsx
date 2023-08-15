import cn from '../../../util/cn'

type CheckoutStepsProps = {
  step: number
  onChange?(current: number): void
}

const STEPS = [
  { step: 1, section: 'Información de contácto' },
  { step: 2, section: 'Método de entrega' },
  { step: 3, section: 'Método de pago' },
]

export const CheckoutSteps = ({ step }: CheckoutStepsProps) => (
  <div className='flex items-center space-x-5 md:space-x-0 h-fit'>
    {STEPS.map(s => (
      <div key={s.step} className='flex items-center'>
        <div className='flex flex-col gap-y-2 items-center'>
          <div
            className={cn(
              'h-10 w-10 rounded-full border border-primary flex items-center justify-center shadow-md cursor-pointer hover:bg-primary-focus hover:text-white font-semibold  ',
              s.step <= step ? 'bg-primary text-white' : 'bg-white text-primary',
            )}
          >
            <p>{s.step}</p>
          </div>
          <p className='w-44 text-center hidden md:block'>{s.section}</p>
        </div>
        {s.step < 3 && <div className='h-[1px] bg-gray-400 md:w-24 lg:w-40 hidden md:block'></div>}
      </div>
    ))}
  </div>
)
