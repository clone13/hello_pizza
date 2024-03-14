import { LocationCard } from '../components';
import { locationCardData } from '../components/LocationCard/LocationCard.data';

import styles from './ContactsPage.module.scss';

function Contacts() {
  return (
    <div className='container'>
      <div className={styles.contacts}>
        {locationCardData.map((card) => (
          <LocationCard
            title={card.title}
            address={card.address}
            timeWork={card.timeWork}
            deliveryTime={card.deliveryTime}
            metroName={card.metroName}
            isMetro={card.isMetro}
            rating={card.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
