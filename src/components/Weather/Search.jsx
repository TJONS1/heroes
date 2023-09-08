import React from 'react'

const Search = () => {
    return (
        <div className='weather-search-wrapper'>
            <div className='weather-title'>
                <h4>Weather App</h4>
            </div>
            <div className='weather-search'>

                <div>
                    <input type="text" placeholder='Enter city name' />
                </div>
                <div>
                    <span>or</span>
                </div>
                <div>
                    <button>Get Device Location</button>
                </div>
            </div>

        </div>
    )
}

export default Search