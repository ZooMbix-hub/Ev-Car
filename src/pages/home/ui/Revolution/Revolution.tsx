import { Tag } from '@/shared/ui/Tag';
import { Typography } from '@/shared/ui/Typography';
import { Icon } from '@/shared/ui/Icon';
import s from './Revolution.module.css';

export const Revolution = () => {
  return (
    <div className={s.revolutionBlock}>
      <div className={s.blockTitle}>
        <Tag theme={'dark'}>
          {'Versatile Power'}
        </Tag>
        <Typography variant={'h3'} color={'bg-1'}>
          {'Revolutionizing EV Mobility'}
        </Typography>
      </div>
      <div className={s.showcase}>
        <div className={s.first}>
          <div className={s.info}>
            <Typography variant={'h4'} color={'bg-1'}>
              {'What\nPeople Say'}
            </Typography>
            <Typography color={'secondary'}>
              {'Sold to over 20M'}
            </Typography>
          </div>
          <Icon.OnlyLogo />
        </div>
        <div className={s.second}>
          <div className={s.companyLogo}>
            <Icon.OnlyLogo />
            <Typography color={'bg-1'}>
              {'EV Voltedge'}
            </Typography>
          </div>
          <Typography variant={'h2'} color={'bg-1'}>
            {'Electric Mobility'}
          </Typography>
        </div>
        <div className={s.three}>
          <div className={s.site}>
            <Typography color={'bg-1'}>
              {'evvoltage.com'}
            </Typography>
          </div>
          <div className={s.count}>
            <Typography variant={'h2'} weight={'semiBold'}>
              {'500+'}
            </Typography>
            <Typography variant={'paragraph'}>
              {'Miles Per Charge'}
            </Typography>
          </div>
        </div>
        <div className={s.four}>
          <img src="/images/Revolution-3.png" alt="" />
        </div>
        <div className={s.five}>
          <Icon.Battery />
          <Typography color={'bg-1'}>
            {'Empowering Sustainable Mobility Through Innovation'}
          </Typography>
        </div>
      </div>
    </div>
  );
};