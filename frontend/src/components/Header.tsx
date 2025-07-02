import { Menu, Moon, Sun } from 'lucide-react'

interface HeaderProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
    return (
        <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                <div className="md:flex hidden items-center">
                    <div className="text-xl font-bold text-gray-600 dark:text-gray-100">
                    LOGO
                    </div>
                </div>

                <div className="flex md:hidden items-center">
                    <div className="text-xl font-bold text-gray-600 dark:text-gray-100">
                        <Menu className='size-7' />
                    </div>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1">Company</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1">Services</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1">FinTech Solutions</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1">Products</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1">Portfolio</a>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 pb-1 border-b-2 border-b-green-500">Contact us</a>
                </div>
                
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                </div>
            </nav>
        </header>
    )
}

export default Header