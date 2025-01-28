import './assets/logo.png';
import './App.css';
import { ArrowRightIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/16/solid';

//const RadioButtonExample: React.FC = () => {
//   // Step 3: Initialize state with default selected value
//   const [selectedValue, setSelectedValue] = useState<string>('option1');
//
//   // Step 4: Handle change events
//   const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedValue(event.target.value);
//   };

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
         <main>
            <section className='container grid-responsive text-center'>
               <div className='col-span-10'>
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
                  <p className='text-xl mt-5 opacity-60'>
                     Создание меньше 7 минут, одно резюме бесплатно
                  </p>
               </div>
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
                  <p className='mt-2 opacity-60'>Займите свой ник, пока не поздно!</p>
               </div>
               {/* cv hosting snippet
               <h3 className='text-2xl font-semibold'>Топ 10 резюме месяца</h3>
               <div className='col-start-3 col-span-6'>
                  <div className='grid grid-cols-5 gap-4 mt-5'>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                     <a className='avatar' href=''>
                        <img
                           src='https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg'
                        />
                     </a>
                  </div>
                  <button className='mt-5 btn btn-sm'>Смотреть все резюме</button>
               </div>
               */}


            </section>
            <div className='container grid-responsive'>
               <div className="col-span-10 text-center">
                  <p className=' text-2xl font-medium opacity-60'>cv.place – это сайт для хостинга резюме и портфолио. Отправляйте эйчарам собственные ссылки, вместо скучных pdf или даже распечаток... бррр</p>
                  <button className='mt-10 btn btn-accent'>Создать своё резюме</button>
                  <p className='mt-2 opacity-60'>это очень просто</p>
               </div>
               <img className='col-span-10 object-cover aspect-video rounded-2xl h-full' src="https://www.digitalsilk.com/wp-content/uploads/2020/06/website-development-process-hero-image.png" alt="" />
            </div>
            <section className='container grid-responsive'>
               <div className='col-span-10 text-center'>
                  <h2>Выберите план и срок</h2>
                  <div className='tabs-xs tabs-box inline-flex flex-nowrap mt-4'>
                     <input
                        type='radio'
                        name='my_tabs_1'
                        role='tab'
                        className='tab w-1/2'
                        aria-label='Месяц'
                     //checked={selectedValue === 'option1'} // Pre-select option1
                     //onChange={handleRadioChange}
                     ></input>
                     <input
                        type='radio'
                        name='my_tabs_1'
                        role='tab'
                        className='tab w-1/2'
                        aria-label='Полгода -15%'
                     //checked={selectedValue === 'option2'} // Pre-select option2 if needed
                     //onChange={handleRadioChange}
                     >
                     </input>
                  </div>
               </div>
               <div className='card card-lg col-span-5'>
                  <div className='card-body'>
                     <div className='flex justify-between grow'>
                        <h2 className='text-3xl font-medium'>Базовый</h2>
                     </div>
                     <ul className='mt-6 flex flex-col opacity-60 gap-2'>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>High-resolution image generation</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>Customizable style templates</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>Batch processing capabilities</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>AI-driven image enhancements</span>
                        </li>
                     </ul>
                     <div className='flex flex-col gap-2 mt-6 text-center'>
                        <button
                           disabled
                           className='btn btn-block'
                        >
                           это ваш план
                        </button>
                        <p className='opacity-60'>бесплатно навсегда</p>
                     </div>
                  </div>
               </div>
               <div className='card card-lg col-span-5'>
                  <div className='card-body'>
                     <h2 className='text-3xl font-medium'>Спонсор</h2>
                     <div className='flex gap-2'>
                        <label className='input'>
                           <p>{'$'}</p>
                           <input
                              type='price'
                              required
                              placeholder='2.49'
                           />
                        </label>
                        <p className='opacity-60'>Впиши справедливую цену за месяц</p>
                     </div>
                     <ul className='mt-6 flex flex-col opacity-60 gap-2'>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>High-resolution image generation</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>Customizable style templates</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>Batch processing capabilities</span>
                        </li>
                        <li>
                           <CheckIcon className='size-4 inline-block align-middle' />
                           <span>AI-driven image enhancements</span>
                        </li>
                     </ul>
                     <div className='flex flex-col gap-2 mt-6 text-center'>
                        <button className='btn btn-block'>месяц бесплатно</button>
                        <p className='opacity-60'>бесплатно навсегда</p>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
