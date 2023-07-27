const NavBar = () => {
    return (
        <nav class="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <a class="flex-shrink-0 text-white font-black text-3xl hover:text-emerald-900" href="#">Zamzon</a>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a class="text-white hover:text-teal-900" href="#">Home</a>
                                <a class="text-white hover:text-teal-900" href="#">About</a>
                                <a class="text-white hover:text-teal-900" href="#">Services</a>
                                <a class="text-white hover:text-teal-900" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <button class="text-gray-500 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg class="hidden h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a class="text-gray-300 hover:text-white" href="#">Home</a>
                    <a class="text-gray-300 hover:text-white" href="#">About</a>
                    <a class="text-gray-300 hover:text-white" href="#">Services</a>
                    <a class="text-gray-300 hover:text-white" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;