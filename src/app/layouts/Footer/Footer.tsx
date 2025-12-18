import { Typography } from '@/shared/ui/Typography';
import s from './Footer.module.css';
import { Icon } from '@/shared/ui/Icon';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.contentContainer}>
        <div className={s.contacts}>
          <Icon.LogoLight />
          <ul className={s.nav}>
            <li className={s.navItem}>
              <Typography color={'bg-1'}>
                {'Company'}
              </Typography>
              <div className={s.links}>
                <Typography color={'wh-trans-1'}>
                  {'Features'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Pricing'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'About Us'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Contact'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Pricing'}
                </Typography>
              </div>
            </li>
            <li className={s.navItem}>
              <Typography color={'bg-1'}>
                {'Resource'}
              </Typography>
              <div className={s.links}>
                <Typography color={'wh-trans-1'}>
                  {'Blog'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Customer Stories'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Information'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Legal'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Payments'}
                </Typography>
              </div>
            </li>
            <li className={s.navItem}>
              <Typography color={'bg-1'}>
                {'Career'}
              </Typography>
              <div className={s.links}>
                <Typography color={'wh-trans-1'}>
                  {'Jobs'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Hiring'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'News'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Tips & Tricks'}
                </Typography>
              </div>
            </li>
            <li className={s.navItem}>
              <Typography color={'bg-1'}>
                {'Help'}
              </Typography>
              <div className={s.links}>
                <Typography color={'wh-trans-1'}>
                  {'FAQs'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Help Center'}
                </Typography>
                <Typography color={'wh-trans-1'}>
                  {'Support'}
                </Typography>
              </div>
            </li>
          </ul>
        </div>
        <div className={s.law}>
          <Typography color={'bg-1'}>
            {'© 2025'}
          </Typography>
          <Typography color={'bg-1'}>
            {'Term of Service'}
          </Typography>
          <Typography color={'bg-1'}>
            {'Privacy Policy'}
          </Typography>
        </div>
      </div>
    </footer>
  );
};