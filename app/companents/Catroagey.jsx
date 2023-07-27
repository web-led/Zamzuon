import Link from "next/link";

const Catrogey = () => {
    return (
        <div class="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-4">
            <div class="flex lg:hidden">
                <button class="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
                    </svg>
                </button>
            </div>
            <ul class="flex lg:flex-row flex-col lg:ml-6 lg:space-x-6 lg:space-y-0 space-x-3 space-y-2 overflow-x-scroll scrollbar-hide">
                <Link href='/'>
                <li class="px-2 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white bg-white hover:bg-gray-100">All</li>
                </Link>
                <Link href='/elctronics'>
                <li class="px-2 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:text-teal-900 hover:bg-gray-100">men's clothing</li>
                </Link>
                <Link href='/jewelery'>
                <li class="px-2 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:text-teal-900 hover:bg-gray-100">jewelery</li>
                </Link>
                <Link href='/electronics'>
                <li class="px-2 py-1 rounded-md text-sm font-medium bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white hover:text-teal-900 hover:bg-gray-100">electronics</li>
                </Link>
            </ul>
        </div>
    )
}
export default Catrogey;