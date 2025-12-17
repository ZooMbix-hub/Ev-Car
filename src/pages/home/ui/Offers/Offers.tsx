import { Tag } from '@/shared/ui/Tag';
import { Typography } from '@/shared/ui/Typography';
import s from './Offers.module.css';

export const Offers = () => {
  return (
    <div className={s.offersBlock}>
      <div className={s.title}>
        <Tag>
          {'Versatile Power'}
        </Tag>
        <Typography variant={'h3'}>
          {'Discover Our Multi-functional chargers'}
        </Typography>
      </div>
      <div className={s.listProducts}>
        <div className={s.product}>
          <img src="/images/Offer-1.png" alt="" className={s.offerImage} />
          <div className={s.desc}>
            <Typography variant={'paragraph'}>
              {'Home Smart Charger'}
            </Typography>
            <Typography color={'subtext'}>
              {'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.'}
            </Typography>
            <span className={s.price}>
              <Typography variant={'paragraph'} color={'subtext'}>
                {'$999'}
              </Typography>
              <Typography variant={'paragraph'}>
                {'$599'}
              </Typography>
            </span>
          </div>
        </div>
        <div className={s.product}>
          <img src="/images/Offer-2.png" alt="" className={s.offerImage} />
          <div className={s.desc}>
            <Typography variant={'paragraph'}>
              {'Portable EV Charger'}
            </Typography>
            <Typography color={'subtext'}>
              {'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.'}
            </Typography>
            <span className={s.price}>
              <Typography variant={'paragraph'} color={'subtext'}>
                {'$599'}
              </Typography>
              <Typography variant={'paragraph'}>
                {'$299'}
              </Typography>
            </span>
          </div>
        </div>
        <div className={s.product}>
          <img src="/images/Offer-3.png" alt="" className={s.offerImage} />
          <div className={s.desc}>
            <Typography variant={'paragraph'}>
              {'Ultra-Fast Public Charging Station'}
            </Typography>
            <Typography color={'subtext'}>
              {'A high-power Level 3 DC fast charger for public and commercial locations. Equipped with dual ports.'}
            </Typography>
            <span className={s.price}>
              <Typography variant={'paragraph'} color={'subtext'}>
                {'$20,999'}
              </Typography>
              <Typography variant={'paragraph'}>
                {'$12,999'}
              </Typography>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};