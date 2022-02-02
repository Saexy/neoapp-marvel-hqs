import React from 'react'

import Hq from './Hq'

const Hqs = ({ inputSearch, data}) => {

    const rareSize = data.length * 0.1
    let randomRareSize = 0

    const listData = data.filter(dataHq => dataHq.series.name.toLowerCase().includes(inputSearch.toLowerCase())).map((dataHq) => {

        let description = "This HQ doesn't have a description"
        if(!!dataHq.textObjects.length > 0){
            description = dataHq.textObjects[0].text.replaceAll('<br>', '\n')
        }

        let rarity = 'Comum'
        let randomRarityPrice = 2.99

        let randomNumber = Math.floor(Math.random() * (3 - 1)) + 1

        if(randomRareSize < rareSize){
            if(randomNumber == 1){
                rarity = 'Raro'
                randomRarityPrice = 4.99
                randomRareSize++;
            }
        }

        return (<Hq image={dataHq.thumbnail.path + '/portrait_incredible.' + dataHq.thumbnail.extension} title={dataHq.series.name} description={description} price={randomRarityPrice} rarity={rarity}/>)
    })

    return (
        <>
        {listData}
        </>
    )
}
 
export default Hqs