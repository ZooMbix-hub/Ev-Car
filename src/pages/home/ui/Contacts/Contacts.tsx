import { Typography } from '@/shared/ui/Typography';
import { Button } from '@/shared/ui/Button';
import { TextField } from '@/shared/ui/TextField';
import s from './Contacts.module.css';

export const Contacts = () => {
  return (
    <div className={s.contactsBlock}>
      <div className={s.container}>
        <Typography variant={'h5'}>
          {'Reserve Your EV Today!'}
        </Typography>
        <form className={s.contactsForm}>
          <div className={s.nameFields}>
            <TextField
              label={'First Name'}
              placeholder={'John'}
            />
            <TextField
              label={'Last Name'}
              placeholder={'Doe'}
            />
          </div>
          <TextField
            label={'Email ID'}
            placeholder={'Field email goes here'}
          />
          <TextField
            label={'Message'}
            placeholder={'Message'}
          />
          <Button size={'large'}>
            {'Book Now'}
          </Button>
        </form>
      </div>
      <img src="/images/Contacts-1.png" alt="" className={s.contactsImage} />
    </div>
  );
};