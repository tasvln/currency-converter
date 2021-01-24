import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Converter from './components/Coverter'
import Header from './components/Header'

export default function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    axios.get(`https://api.exchangeratesapi.io/latest`)
      .then(res => {
        return res.data
      })
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios.get(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => {
          return res.data
        })
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  const handleToAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div>
      <Header />
      <div className="mx-20 my-5 flex">
        <div className="w-1/3 w-fu bg-white justify-center align-center p-4 rounded-lg mx-auto">
          <div>
            <span className="bg-gray-50 text-gray-600 text-sm font-semibold px-4 py-1 rounded-full">From</span>
            <Converter 
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              Currency={e => setFromCurrency(e.target.value)}
              onChangeAmount={handleFromAmountChange}
              amount={fromAmount}
            />
          </div>
          <div className="mt-6">
            <span className="bg-gray-50 text-gray-600 text-sm font-semibold px-4 py-1 rounded-full">To</span>
            <Converter 
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              Currency={e => setToCurrency(e.target.value)}
              onChangeAmount={handleToAmountChange}
              amount={toAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

