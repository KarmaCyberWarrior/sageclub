import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-white'>
      <div className='fixed w-full bg-slate-900 h-full bg-opacity-60'>
        <h1 className='text-center text-5xl mt-28 font-semibold'>Sage Tek Club</h1>
        
        <p className='text-center mt-20 text-xl'>Welcome to, SageTek opening.<br></br> Join us in building and growing as cyber elites.<br></br>Apply below to one of our two paths,<br></br>The way of the warrior and the way of the creator.</p>

        <div className='mt-20 w-full flex justify-center text-lg font-semibold'>
          <button className='w-[15rem] h-12 rounded-md bg-white text-slate-900 hover:bg-slate-700 hover:text-white group'><p className='group-hover:animate-bounce'>Cyber Warrior- Hacker</p></button>

          <button className='w-[15rem] h-12 rounded-md bg-white text-slate-900 ml-20 hover:bg-slate-700 hover:text-white group'><p className='group-hover:animate-bounce'>Cyber Creator- Developer</p></button>
        </div>
        
      </div>
    </main>
  )
}
