import React from 'react'

import Hq from './Hq'

const Hqs = ({ inputSearch, data}) => {

    const listData = data.filter(dataHq => dataHq.series.name.toLowerCase().includes(inputSearch.toLowerCase())).map((dataHq) => {

        let description = "This HQ doesn't have a description"
        if(!!dataHq.textObjects.length > 0){
            description = dataHq.textObjects[0].text.replaceAll('<br>', '\n')
        }

        return (<Hq image={dataHq.thumbnail.path + '/portrait_incredible.' + dataHq.thumbnail.extension} title={dataHq.series.name} description={description}/>)
    })

    return (
        <>
        {listData}
        </>
    )
}
 
export default Hqs