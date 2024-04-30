import Image from '../assets/_54c811ec-5d2b-4c89-8e0e-144c739ff3ea.jpeg'
export function UserComponent() {
    return <div className='rounded-lg p-4 m-4 shadow-lg bg-gray-50'>
        <div className='flex items-center gap-4'>
            <img className='w-32 h-32 rounded-full' src={Image} alt="" />
            <div>
                <ul>
                    <li className='text-gray-600 flex items-center gap-2'><p className='text-xl text-gray-700'>First name:</p>DOE</li>
                    <li className='text-gray-600 flex items-center gap-2'><p className='text-xl text-gray-700'>Last name:</p>John</li>
                    <li className='text-gray-600 flex items-center gap-2'><p className='text-xl text-gray-700'>Age:</p>19</li>
                    <li className='text-gray-600 flex items-center gap-2'><p className='text-xl text-gray-700'>Sex:</p>Male</li>
                    <li className='text-gray-600 flex items-center gap-2'><p className='text-xl text-gray-700'>Profession:</p>Doctor</li>
                </ul>
            </div>
        </div>
        <p>
            <span className='text-xl text-green-500'>About: </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ducimus eius commodi explicabo cumque assumenda sunt consequuntur rem, tenetur debitis laborum ratione. Aliquam vel consequuntur eos porro quidem labore voluptatibus?
        </p>
        <ul className="max-w-md space-y-1 text-gray-600 list-inside">
            <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                At least 10 characters
            </li>
            <li className="flex items-center">
                <svg className="w-3.5 h-3.5 me-2 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                At least one lowercase character
            </li>
        </ul>
    </div>
}