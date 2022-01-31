import React from 'react'

import Hq from './Hq'

const Hqs = ({ data }) => {

    const listData = data.map((dataHq) => {

        let description = "This HQ doesn't have a description"
        if(!!dataHq.textObjects.length > 0){
            description = dataHq.textObjects[0].text;
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