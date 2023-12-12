import Image from 'next/image'
import React from 'react'

const SocialProof = () => {
  return (
<div className='flex flex-wrap gap-2 md:flex-row sm:flex-row items-center justify-between ScoialProof bg-[#FFF] rounded-[0.5rem] max-w-[59.125rem] mx-auto -mt-14 py-[2rem] px-[3.25rem] '>
    <Image src='/sc1.png' alt='proof' width={49.53} height={49.33} quality={100} className='mix-blend-luminosity '/>
    <Image src='/sc2.png' alt='proof' width={49.53} height={49.33} quality={100} className=' ' />
    <Image src='/sc3.png' alt='proof' width={49.53} height={49.33} quality={100} className=' ' />
    <Image src='/sc4.png' alt='proof' width={49.53} height={49.33} quality={100}  className=''/>
</div>
  )
}

export const NfaSocialProof = () => {
  return (
<div className='flex flex-wrap gap-2 md:flex-row sm:flex-row items-center justify-between ScoialProof bg-[#FFF] rounded-[0.5rem] max-w-[59.125rem] mx-auto -mt-14 py-[2rem] px-[3.25rem] '>
    <Image src='/sc1.png' alt='proof' width={49.53} height={49.33} quality={100} className='mix-blend-luminosity '/>
    <Image src='/sc2.png' alt='proof' width={49.53} height={49.33} quality={100} className=' ' />
    <Image src='/sc3.png' alt='proof' width={49.53} height={49.33} quality={100} className=' ' />
    <Image src='/sc4.png' alt='proof' width={49.53} height={49.33} quality={100}  className=''/>
</div>
  )
}


export default SocialProof