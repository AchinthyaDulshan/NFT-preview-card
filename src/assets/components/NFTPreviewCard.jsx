import TopImage from '../images/image-equilibrium.jpg'
import AvatarImage from '../images/image-avatar.png'
import EthereumIcon from '../images/icon-ethereum.svg'
import ClockIcon from '../images/icon-clock.svg'
import ViewIcon from '../images/icon-view.svg'

const NFTPreviewCard = () => {

const NFTPreviewDetails = {
    equilibriumImage:TopImage,
    no: "Equilibrium #3429",
    description:"Our Equilibrium collection promotes balance and calm.",
    ETH:"0.041 ETH",
    remainingTime:"3 days left",
    avatarImage:AvatarImage,
    createdBy:"Jules Wyvern"
}

  return (
    <div className="max-w-80 rounded-xl shadow-xl p-5 bg-dark-blue-2 font-[18px]">
        <div className='relative rounded-lg'>
            <img className='rounded-lg object-cover ' src={NFTPreviewDetails.equilibriumImage} alt={NFTPreviewDetails.no} />
            <div className='absolute inset-0 rounded-lg flex justify-center items-center bg-cyan bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                <img  src={ViewIcon} alt="" />
            </div>
        </div>
        
        <h1 className='font-semibold text-white py-4 text-xl hover:text-cyan transition-all duration-200'>{NFTPreviewDetails.no}</h1>
        <p className=' font-light text-soft-blue'>{NFTPreviewDetails.description}</p>
        <div className='flex justify-between py-4'>
            <div className='flex gap-3 items-center'>
                <img className='w-4 h-4' src={EthereumIcon} alt="EthereumIcon" />
                <span className='text-cyan text-sm'>{NFTPreviewDetails.ETH}</span>
            </div>
            <div className='flex gap-3 items-center'>
                <img className='w-4 h-4' src={ClockIcon} alt="ClockIcon" />
                <span className='text-soft-blue text-sm'>{NFTPreviewDetails.remainingTime}</span>
            </div>
        </div>
        <hr className='h-px border-0 bg-line-blue' />
        <div className='pt-4 flex items-center gap-3'>
            <img className='h-10 w-10 border border-white rounded-full' src={NFTPreviewDetails.avatarImage} alt={NFTPreviewDetails.createdBy} />
            <p className='font-light text-soft-blue text-sm' >Creation of <span className='font-normal text-white hover:text-cyan transition-all duration-200' >{NFTPreviewDetails.createdBy}</span> </p>
        </div>
    </div>
  )
}

export default NFTPreviewCard