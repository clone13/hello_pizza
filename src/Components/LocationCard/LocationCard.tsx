import styles from './LocationCard.module.scss';

import { Rating } from '../index';

interface CardProps {
  title: string;
  address: string;
  timeWork: string;
  metroName?: string;
  isMetro?: boolean;
  deliveryTime: number;
  rating: number;
}

const LocationCard: React.FC<CardProps> = ({
  title,
  address,
  timeWork,
  metroName,
  isMetro,
  deliveryTime,
  rating,
}: CardProps) => {
  return (
    <div className={styles.location_card}>
      <div className={styles.location_header}>
        <a href='#'>
          <span className={styles.location_header__title}>{title}</span>
        </a>

        <div className={styles.location_card__rating_box}>
          <Rating deliveryTime={deliveryTime} rating={rating} />
        </div>

        <div>
          {isMetro && (
            <>
              <img
                className={styles.location_header__metro_img}
                src='/public/icons/metro.svg'
                alt=''
              />
              <p className={styles.location_header__text}>{metroName}</p>
            </>
          )}

          <p className={styles.location_headaer__text}>{address}</p>
          <div className={styles.location_header__text}>
            <p>Доставка и самовывоз</p>
            <p className={styles.location_header__time}>{timeWork}</p>
          </div>
          <div className={styles.location_header__text}>
            <p>Ресторан</p>
            <p className={styles.location_header__time}>{timeWork}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
