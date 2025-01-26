import './assets/logo.png';
import './App.css';

function App() {
   return (
      <>
         <h1 className='h1'>Резюме 📄, которое работает, пока ты отдыхаешь</h1>
         <p>Создание меньше 7 минут, одно резюме бесплатно</p>
         <div className='flex flex-none flex-col justify-center gap-8'>
            <button className='btn btn-xs'>Xsmall</button>
            <button className='btn btn-sm'>Small</button>
            <button className='btn'>Medium</button>
            <button className='btn btn-lg'>Large</button>
            <button className='btn btn-xl'>Xlarge</button>
         </div>
         <div>
            <div className='dropdown mb-72'>
               <div
                  tabIndex={0}
                  role='button'
                  className='btn m-1'
               >
                  Theme
                  <svg
                     width='12px'
                     height='12px'
                     className='inline-block h-2 w-2 fill-current opacity-60'
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 2048 2048'
                  >
                     <path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className='dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl'
               >
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Default'
                        value='default'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Retro'
                        value='retro'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Cyberpunk'
                        value='cyberpunk'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Light'
                        value='light'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Valentine'
                        value='valentine'
                     />
                  </li>
                  <li>
                     <input
                        type='radio'
                        name='theme-dropdown'
                        className='theme-controller w-full btn btn-sm btn-block btn-ghost justify-start'
                        aria-label='Aqua'
                        value='aqua'
                     />
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default App;
