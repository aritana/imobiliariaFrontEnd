import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../../../components/Header'
import PropertieDetailsHeader from '../../../components/Header/DetailsPropertie'
import DetailPropertie from '../../../components/propertie/expanded/Details'
import ExpandedPropertieMenu from '../../../components/propertie/expanded/Menu'
import { PropertieInterface } from '../../../interfaces/propertie'
import { getPropertieById } from '../../../services/api'

const ExpandedPropertie = (props: RouteComponentProps) => {
    const [propertie, setPropertie] = useState<PropertieInterface>(undefined!)
    const [service, setService] = useState<'edit' | 'details' | 'visit'>('details')

    useEffect(() => {
        async function findPropertie() {
            const { id }: any = props.match.params

            setPropertie(await getPropertieById(id))
        }

        findPropertie()
    }, [props.match.params, service])



    function getSelectedComponent() {
        switch (service) {
            case 'edit':
                return (
                    <div></div>
                )
            case 'details':
                return (
                    <DetailPropertie
                        history={props.history as any}
                        propertie={propertie}
                    />
                )
            case 'visit':
                return (
                    <div></div>
                )
            default:
                return (
                    <div />
                )
        }
    }


    return (
        <div className='container'>
            <Header
                Component={PropertieDetailsHeader}
                componentProps={{ history: props.history }}
            />
            <div className='details-container'>

                <ExpandedPropertieMenu
                    setService={setService}
                    service={service}
                />
                <div className='selected-service'>
                    {
                        getSelectedComponent()
                    }
                </div>
            </div>
        </div>
    )
}

export default ExpandedPropertie