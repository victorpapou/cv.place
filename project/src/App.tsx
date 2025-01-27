import './assets/logo.png';
import './App.css';
import { ArrowRightIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function App() {
   return (
      <>
         <nav className='p-2'>
            <div>
               <label className='swap swap-rotate h-6'>
                  <input
                     type='checkbox'
                     className='theme-controller'
                     value='dark'
                  />
                  <SunIcon className='swap-off h-full w-full' />
                  <MoonIcon className='swap-on fill-current h-full w-full' />
               </label>
            </div>
         </nav>
         <main className='grid grid-cols-10 gap-x-5 gap-y-10 max-w-[660px] m-auto mt-24 text-center'>
            <section className='col-span-10'>
               <h1>
                  Резюме
                  <span className='inline-block align-baseline'>
                     <img
                        src='/src/assets/cvicon.png'
                        className='h-18 ml-3 -mb-1'
                        alt=''
                     />
                  </span>
                  , которое работает,
                  <br /> пока ты отдыхаешь.
               </h1>
               <p className='mt-5'>Создание меньше 7 минут, одно резюме бесплатно</p>
            </section>
            <div className='col-start-3 col-span-6 pt-2'>
               <label className='input input-xl w-full'>
                  <img
                     src='src/assets/logo.png'
                     alt=''
                     className='h-5'
                  />
                  cv.place/
                  <input
                     type='text'
                     className='grow'
                     placeholder='username'
                  />
                  <button className='btn btn-md'>
                     <ArrowRightIcon className='h-4' />
                  </button>
               </label>
               <p>Займите свой ник, пока не поздно!</p>
            </div>
            <section className='col-start-3 col-span-6'>
               <h3 className='text-2xl font-semibold'>Топ 10 резюме месяца</h3>
               <div className='grid grid-cols-5 gap-4 mt-5'>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
                  <a href=''>
                     <img
                        className='avatar'
                        src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                     />
                  </a>
               </div>
               <button className='mt-5 btn btn-sm'>Смотреть все резюме</button>
            </section>
         </main>
      </>
   );
}

export default App;
