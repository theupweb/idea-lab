import React from 'react'
import Card from '../Card/Card';
import cardsData from './cardsData';

function Ideas() {
    return (
        <div className="border-2 border-transparent min-h-screen" style={{backgroundColor: "#CBDBDF"}}>
            {
                cardsData.map(card => (
                    <Card
                        profession={card.profession}
                        content={card.content}
                        tags={card.tags}
                        imgURL={card.imgURL}
                        creator={card.creator}
                        at={card.at}
                    />
                ))
            }
        </div>
    )
}

export default Ideas
