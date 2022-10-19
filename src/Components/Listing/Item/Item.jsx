import React from 'react';

export const Item = ({url, currency_code, price, title, quantity, MainImage, state}) => {

    let lvlQuant = "";
    if (quantity <= 10) lvlQuant = "low";
    else if (quantity <= 20) lvlQuant = "medium";
    else  lvlQuant = "high";

    return (
        <>
            {state !== "removed"?
                <div className="item">
                    <div className="item-image">
                        <a href={url}>
                            <img src= {MainImage && MainImage.url_570xN} alt="img"/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{title && title.length > 50? title.slice(0, 50) + '…' : title}</p>
                        <p className="item-price">{currency_code} {Number(price)}</p>
                        <p className={`item-quantity level-${lvlQuant}`}>{quantity} left</p>
                    </div>
                </div>
                : null
            }
        </>
    )
}
