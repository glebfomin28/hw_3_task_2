import React from 'react';
import {Item} from "./Item/Item";

export const Listing = ({items}) => {
    return (
        <div className="item-list">
            {items.map(el =>
                <Item
                    key={el.listing_id}
                    url={el.url}
                    MainImage={el.MainImage}
                    title={el.title}
                    currency_code={el.currency_code}
                    price={el.price}
                    quantity={el.quantity}
                    state={el.state}
                />
            )}
        </div>
    )
}
