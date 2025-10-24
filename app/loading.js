"use client"
import React from 'react'
import { DNA } from 'react-loader-spinner'

const loading = () => {
    return (
        <div className='bg-gray-50 flex justify-center items-center h-[100vh] w-[100%]'>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default loading