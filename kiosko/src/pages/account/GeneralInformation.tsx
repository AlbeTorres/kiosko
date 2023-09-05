import AccountLayout from './components/AccountLayout'
import img2 from '../../assets/1.jpg'

const GeneralInformation = () => {
  return (
    <AccountLayout title={'Información general'} current='general'>
      <div>
        <img src={img2} alt='' />
      </div>
    </AccountLayout>
  )
}

export default GeneralInformation
