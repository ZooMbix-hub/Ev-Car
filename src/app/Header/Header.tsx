import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <Icon.LogoDark />
      <ul className={s.nav}>
        <li>
          <Typography>{'Home'}</Typography>
        </li>
        <li>
          <Typography>{'Products'}</Typography>
        </li>
        <li>
          <Typography>{'Features'}</Typography>
        </li>
        <li>
          <Typography>{'Gear Shop'}</Typography>
        </li>
      </ul>
      <Button size={'large'} theme={'dark'} rightIcon={<Icon.LinkArrow />}>
        {'Order Now'}
      </Button>
    </header>
  );
};