import { Check } from 'lucide-react';


const Newsletter = () => {
    return (
        <div className="space-y-3">
            <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-6">Would you like to join our newsletter?</h3>
            <div className="flex space-x-2">
                <input type="email" name="newsletter" placeholder="Email" className="w-full px-4 py-2 border-b border-gray-400 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 outline-none text-gray-900 dark:text-gray-100" />
                <button title="Subscribe" type="button" className="px-4 py-2 bg-green-700 text-white">
                    <Check className='size-4' />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;