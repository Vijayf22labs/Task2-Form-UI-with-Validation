import React from 'react';
import { offices, quickInquiries } from '../constants/officeData';

const OfficeLDetails: React.FC = () => {
  
    return (
        <div className="space-y-16">
            <div>
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-6">Offices</h3>
                <div className="space-y-5">
                    {offices.map((office, index) => (
                        <div key={index}>
                            <div className="font-normal text-gray-600 dark:text-gray-100">
                                {office.country}
                            </div>
                            <div className="text-base text-gray-600 dark:text-gray-400">
                                {office.address}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-6">For Quick Inquiries</h3>
                <div className="space-y-2">
                    {quickInquiries.map((inquiry, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <img src={inquiry.img} alt="UK Flag" className="w-5 h-4" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {inquiry.phone}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfficeLDetails;