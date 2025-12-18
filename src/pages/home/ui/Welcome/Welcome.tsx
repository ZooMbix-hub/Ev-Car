import { Typography } from '@/shared/ui/Typography';
import s from './Welcome.module.css';

export const Welcome = () => {
  return (
    <div className={s.welcomeBlock}>
      <div className={s.title}>
        <Typography variant={'h1'} weight={'semiBold'}>
          {'SMOOTH'}
        </Typography>
        <img src="/Ev-Car/images/Car.webp" alt="" className={s.carImage} />
        <Typography variant={'h1'} weight={'semiBold'} color={'bg-3'}>
          {'EV CARS'}
        </Typography>
      </div>
      <div className={s.statistics}>
        <div className={s.item}>
          <Typography variant={'h2'} weight={'semiBold'}>
            {'14M'}
          </Typography>
          <Typography variant={'paragraph'} color={'subtext'}>
            {'Battery Cost Reduction'}
          </Typography>
        </div>
        <div className={s.item}>
          <Typography variant={'h2'} weight={'semiBold'}>
            {'89%'}
          </Typography>
          <Typography variant={'paragraph'} color={'subtext'}>
            {'Battery Cost Reduction'}
          </Typography>
        </div>
        <div className={s.item}>
          <Typography variant={'h2'} weight={'semiBold'}>
            {'1.2M'}
          </Typography>
          <Typography variant={'paragraph'} color={'subtext'}>
            {'Charging infrastructure  Expansion'}
          </Typography>
        </div>
      </div>
    </div>
  );
};