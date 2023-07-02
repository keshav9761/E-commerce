
import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Cart from './Cart/Cart'
export default function CheckOut() {
    const addresses = [
        {
            name: "jone",
            street: "govindpuram H No-233",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            pincode: "10756",
            phone: "976163XXX",
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            name: "prag",
            street: "govindpuram H No-233",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            pincode: "10756",
            phone: "976163XXX",
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

        },
        {
            name: "prag",
            street: "govindpuram H No-233",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            pincode: "10756",
            phone: "976163XXX",
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

        }, {
            name: "prag",
            street: "govindpuram H No-233",
            city: "Ghaziabad",
            state: "Uttar Pradesh",
            pincode: "10756",
            phone: "976163XXX",
            imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

        }
    ]
    return (<>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-5'>
                <div className='lg:col-span-3'>
                    <form className='bg-white shadow mx-5 my-5 p-3'>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-3xl font-semibold leading-7 text-gray-900">Personal Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Address
                                </button>
                            </div>
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-xl font-semibold leading-7 text-gray-900">Address</h2>
                                <p className="my-1 text-sm leading-6 text-gray-600">
                                    Choose for Existing addresses
                                </p>
                                <ul role="list">
                                    {addresses.map((person) => (
                                        <li key={person.phone} className="flex justify-between gap-x-6 mt-1 py-5 px-4 border-solid border-2 border-gray-200">
                                            <div className="flex gap-x-4">
                                                <input
                                                    name="address"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.street}</p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                                <p className="text-sm leading-6 text-gray-900">{person.city}</p>
                                                <p className="text-sm leading-6 text-gray-500">pin:&nbsp;{person.pincode}</p>
                                                <p className="text-sm leading-6 text-gray-500">ph:&nbsp;{person.phone}</p>
                                                {/* {person.lastSeen ? (
                                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                                        Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                                    </p>
                                                ) : (
                                                    <div className="mt-1 flex items-center gap-x-1.5">
                                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                                        </div>
                                                        <p className="text-xs leading-5 text-gray-500">Online</p>
                                                    </div>
                                                )} */}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-10 space-y-10">

                                    <fieldset>
                                        <legend className="text-xl font-semibold leading-6 text-gray-900">Payment Method </legend>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">Choose One</p>
                                        <div className="mt-6 space-y-6">
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    name="payment-method"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Cash
                                                </label>
                                            </div>
                                            <div className="flex items-center gap-x-3">
                                                <input
                                                    name="payment-method"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Card
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='lg:col-span-2'>
                    <div className='bg-white shadow mx-5 my-5 p-3'>
                        <Cart />

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
