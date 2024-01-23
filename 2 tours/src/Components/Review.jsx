import React, { useState } from 'react'

const Review = ({data, remove}) => {
    const [readmore, setReadMore] = useState(true);

    return(
    <div>
        <h3>{data.name}</h3>
        <img src={data.image} alt="" width={'100px'} height={'100px'} />
        <p>
            {
                readmore ? `${data.info.slice(0,200)}...` : data.info
            }
            <button onClick={() => setReadMore(!readmore)}>
                {
                    readmore ? 'Read More' : 'Read Less'
                }
            </button>
        </p>

        <button onClick={() => remove(data)}>
            Not interested
        </button>
    </div>
    )
}

export default Review


