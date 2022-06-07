import React from 'react';

function CardPequeno (props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.primeiraInfo }</h4>
                <p>{ props.segundaInfo }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
