import { Offers } from '../Offers';
import { Welcome } from '../Welcome';
import { Ecology } from '../Ecology';
import { Revolution } from '../Revolution';
import { Contacts } from '../Contacts';

export const HomePage = () => {
  return (
    <>
      <Welcome />
      <Offers />
      <Ecology />
      <Revolution />
      <Contacts />
    </>
  );
};