import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { clearSession } from '../../../services/auth'

const HeaderListProperties = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => {
                        clearSession()

                        props.history.push('/')
                    }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Sair</p>
                </button>
            </div>
            <div className='group-header'>
                <Link
                    className='button'
                    to='/propertie/create'
                >
                    Cadastrar novo imóvel
                    </Link>
            </div>

        </div>
    )
}

export default HeaderListProperties