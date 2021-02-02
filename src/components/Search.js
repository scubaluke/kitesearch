import React, { useState } from 'react'

export default function Search(props) {
    const [term, setTerm] = useState('')

   const onFormSubmit = (e) => {
        e.preventDefault()

        props.onSubmit(term)

    }

    return (
        <div>
          <h1>Kite Surf Search</h1>
            <form onSubmit={onFormSubmit} action="">
                <label htmlFor="search">Search for kite gear</label>
                <input 
                    onChange={(e) => setTerm(e.target.value)} 
                    value={term}
                    type="text" 
                    name="" 
                    id=""
                    />

            </form>
        </div>
    )
}
