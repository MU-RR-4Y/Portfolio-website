import React from 'react'

// work in progress ot be used in loop function on skill component

const SkillEntry = ({image, name}) => {
  return (
    <div className='p-6 shadow-lg bg-[#F4F3EE] shadow-[#004aad] rounded-xl hover:scale-105 ease-in duration-300'>
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className='m-auto'>
            <Image
                src={image}
                alt='/'
                width={64}
                height={64}
                />
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>{name}</h3>
        </div>
    </div>
</div>
  )
}

export default SkillEntry