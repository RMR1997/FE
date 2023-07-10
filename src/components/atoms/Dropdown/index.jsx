import React, { useState } from 'react'
import Icons from '../icons'

export default function Dropdown({
    setInputBarang,
    inputBarang,
    setInputCategory,
    inputCategory,
    setInputOwnership,
    inputOwnership,
    setInputLocation,
    inputLocation
}) {
    const [dropdown, setDropdown] = useState(false)
    const [collapse, setCollapse] = useState(false)
    return (
        <>
            <button onClick={() => {
                setDropdown(!dropdown)
                setCollapse(!collapse)
            }} className='bg-red-500 w-full border rounded-lg py-1 px-3'>
                <div className='flex justify-between items-center w-full'>
                    <h1>Input</h1>
                    <div className={collapse ? 'rotate-180' : 'rotate-0'}>
                        <Icons.Rectangle />
                    </div>
                </div>
            </button>
            {
                dropdown && (
                    <>
                        <button onClick={() => {
                            setInputBarang(true)
                        }}>Input Barang</button>

                        <button onClick={() => {
                            setInputCategory(true)
                        }}>Input Category</button>

                        <button onClick={() => {
                            setInputOwnership(true)
                        }}>Input Ownership</button>

                        <button onClick={() => {
                            setInputLocation(true)
                        }}>Input Location</button>
                    </>
                )
            }
        </>
    )
}
