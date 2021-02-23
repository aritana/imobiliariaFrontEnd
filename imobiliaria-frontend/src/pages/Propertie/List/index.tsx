import React from 'react'
import Header from '../../../components/Header'
import HeaderListProperties from '../../../components/Header/ListProperties'

const ListPropertie = (props: { history: string[] }) => {
    return (
        <div className='container'>
            <Header Component={HeaderListProperties} componentProps={{ history: props.history }} />
        </div>
    )
}

export default ListPropertie