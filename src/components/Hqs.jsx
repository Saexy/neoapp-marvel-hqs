//Importação dos componentes usados
import React from 'react'

import Hq from './Hq'

const Hqs = ({ inputSearch, data}) => {

    //10% da quantidade total de Hqs retornadas pela api
    const rareQuantity = data.length * 0.1
    //Número de Hqs aleatórias raras já inseridas
    let randomRareQuantity = 0

    //Função para listagem das Hqs
    const listData = data.filter(dataHq => dataHq.series.name.toLowerCase().includes(inputSearch.toLowerCase())).map((dataHq) => {

        //Caso a Hq não tenha descrição nativa da API, ela naturalmente será setada com o valor abaixo
        let description = 'This HQ doesnt have a description'
        if(!!dataHq.textObjects.length > 0){
            description = dataHq.textObjects[0].text.replaceAll('<br>', '\n')
        }

        //Distribuindo a raridade aleatóriamente de acordo com a porcentagem permitida
        let rarity = 'Comum'
        let randomRarityPrice = 2.99

        let randomNumber = Math.floor(Math.random() * (3 - 1)) + 1

        if(randomRareQuantity < rareQuantity){
            if(randomNumber == 1){
                rarity = 'Raro'
                randomRarityPrice = 4.99
                randomRareQuantity++;
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