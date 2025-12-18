import { Tag } from '@/shared/ui/Tag';
import { Typography } from '@/shared/ui/Typography';
import s from './Ecology.module.css';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

export const Ecology = () => {
  return (
    <div className={s.ecologyBlock}>
      <Tag>
        {'Our Story'}
      </Tag>
      <div className={s.title}>
        <Typography variant={'h3'}>
          {'Powering a Greener Future,\nOne Drive at a Time'}
        </Typography>
        <Typography color={'subtext'}>
          {'We are here to support your journey towards sustainable driving. Explore cutting-edge EV technology, a growing charging network, and exclusive resources designed to enhance your electric vehicle experience.'}
        </Typography>
      </div>
      <div className={s.cardsFeatures}>
        <div className={s.cardFirst}>
          <div className={s.player}>
            <img src="/Ev-Car/images/Ecology-1.webp" alt="" />
            <div className={s.playerButton}>
              <Icon.Play />
            </div>
          </div>
          <div className={s.cardInfo}>
            <Typography variant={'h5'}>
              {'Join a Connected Charging Network'}
            </Typography>
            <Typography color={'subtext'}>
              {'Be part of a growing network of EV drivers who share a passion for sustainability and innovation.'}
            </Typography>
          </div>
        </div>
        <div className={s.cardSecond}>
          <div className={s.blurBlock}>
            <div className={s.cardInfo}>
              <Typography variant={'h5'} color={'bg-1'}>
                {'EVs for Everyone'}
              </Typography>
              <Typography color={'bg-1'}>
                {'From eco-conscious drivers to performance enthusiasts, we believe electric vehicles should be accessible and exciting for all.'}
              </Typography>
            </div>
            <Button theme={'dark'}>
              {'Our Story'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};