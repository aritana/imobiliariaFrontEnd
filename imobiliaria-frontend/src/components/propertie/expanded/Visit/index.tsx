import React, { useState } from 'react'
import { PropertieInterface } from '../../../../interfaces/propertie'

interface OwnProps {
    propertie: PropertieInterface
    history: string[]
}

const Visit = (props: OwnProps) => {
    const [hora, setHora] = useState('')
    const [data, setData] = useState('')

    return (
        <div className='visit-propertie-container'>
            <div className='visit-propertie-content'>
                <div className='visit-propertie-data'>
                    <div className='visit-propertie-field'>
                        <strong>Data:</strong>
                        <input type='date' value={data} onChange={(e) => setData(e.target.value)} placeholder='Data' />
                    </div>
                    <div className='visit-propertie-field'>

                        <strong>Horario:</strong>
                        <input type='time' value={hora} onChange={(e) => {
                            if (['00', '30'].includes(e.target.value.substr(3, 2))) setHora(e.target.value)
                        }} step='1800' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visit