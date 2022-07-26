import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
      <a
          href={props.path}
          className="cards_item_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
              path={props.path}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text black' >{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;