import React from 'react'

export default function Converter(props) {
    const {
        currencyOptions,
        selectedCurrency,
        Currency,
        Amount,
        amount
    } = props

    return (
        <div className="mt-4 flex">
            <input type="number" className="bg-gray-50 py-2 px-4 w-full rounded-lg mr-4" value={amount} onChange={Amount} />
            <div className="relative flex">
                <select className="bg-gray-50 py-2 pl-3 pr-6 appearance-none rounded-lg" value={selectedCurrency} onChange={Currency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <div className="ml-3 absolute inset-y-0 right-0 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}