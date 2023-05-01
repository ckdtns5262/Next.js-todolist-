import { CgProfile } from 'react-icons/cg'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import { AiOutlineRight } from 'react-icons/ai'
import { CiCircleMore } from 'react-icons/ci'
import Toggle from '../component/button/Toggle'

export default function Setting() {

    return (
        <div className='settings'>
            <div className='space-y-7 text-[14px] p-2 '>
                <div className=''>
                    <span className='flex'>
                        <CgProfile className='ml-4 i' />
                        Profile
                    </span>
                    <div className='mt-1 ml-0 border border-b-[#58a8ca] w-full'></div>
                    <ul className='space-y-8  text-[12px] mt-2'>
                        <li className='flex justify-between'>Edit Profile <AiOutlineRight className='m-0 text-[20px]'/></li>
                        <li className='flex justify-between'>Change password<AiOutlineRight className='m-0 text-[20px]'/></li>
                        <li className='flex justify-between'>privacy<AiOutlineRight className='m-0 text-[20px]'/></li>
                    </ul>
                </div>
                <div className=''>
                    <span className='flex'>
                        <RiNotificationBadgeLine className='ml-4 i' />
                        Notification
                    </span>
                    <div className='mt-1 ml-0 border border-b-[#58a8ca] w-full'></div>
                    <ul className='space-y-8  text-[12px] mt-2'>
                    <li className='flex justify-between'>Notification<Toggle/></li>
                    <li className='flex justify-between'>Tasks notification<AiOutlineRight className='m-0 text-[20px]'/></li>
                    </ul>
                </div>
                <div className=''>
                    <span className='flex'>
                        <CiCircleMore className='ml-4 i' />
                        More
                    </span>
                    <div className='mt-1 ml-0 border border-b-[#58a8ca] w-full'></div>
                    <ul className='space-y-8  text-[12px] mt-2'>
                    <li className='flex justify-between'>Language <AiOutlineRight className='m-0 text-[20px]'/></li>
                    <li className='flex justify-between'>Country <AiOutlineRight className='m-0 text-[20px]'/></li>
                    </ul>
                </div>
            </div>

        </div>




    )
}