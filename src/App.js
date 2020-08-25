// Node modules
import React, { useState } from 'react'

// Components
import Navbar from './components/Navbar'

// Data
import initialData from './initialData'

function App () {

    const [ product, setProduct ] = useState('irgendwas')
    const [ targetGroup, setTargetGroup ] = useState('irgendwen')
    const [ salesChannel, setSalesChannel ] = useState('irgendeine Plattform')

    const [ lastIdea, setLastIdea ] = useState('')


    const getRandomFromArray = (array) => {
        const randomInt = Math.floor(Math.random() * 1000) % array.length
        console.log('randomInt:', randomInt)
        return array[randomInt]
    }

    const runGenerator = () => {
        setProduct(getRandomFromArray(initialData.products).name.de)
        setTargetGroup(getRandomFromArray(initialData.targetGroups).name.de)
        setSalesChannel(getRandomFromArray(initialData.salesChannels).name.de)
    }

    const addProduct = (product) => {

    }

    return (
        <div>
            <Navbar/>
            <div className="container ">
                <div className="row  justify-content-center mb-5" style={ { marginTop: 100 } }>
                    Wir verkaufen
                    <span className={ 'highlight' }>{ product }</span>
                    an
                    <span className={ 'highlight' }>{ targetGroup }</span>
                    über
                    <span className={ 'highlight' }>{ salesChannel }.</span>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary" onClick={ runGenerator }>Und ab!</button>
                </div>

                <hr/>

                <div className="card mt-5">
                    <div className="card-header">Hinzufügen</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Produkt"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Hinzufügen</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Zielgruppe"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Hinzufügen</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Plattform"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Hinzufügen</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5">
                    <div className="card-header">log</div>
                    <div className="card-body">...</div>
                </div>
            </div>
        </div>
    )
}

export default App
