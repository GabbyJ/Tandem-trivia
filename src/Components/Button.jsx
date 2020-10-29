import React from 'react'

export default function Button({ answer, className }) {
    return (
        <button className= {`${className}`}>{answer}</button>
    )
}
