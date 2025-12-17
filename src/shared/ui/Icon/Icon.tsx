import { Battery } from '@/assets/icons/Battery';
import { LinkArrow } from '@/assets/icons/LinkArrow';
import { LogoDark } from '@/assets/icons/LogoDrak';
import { LogoLight } from '@/assets/icons/LogoLight';
import { Play } from '@/assets/icons/Play';
import { OnlyLogo } from '@/assets/icons/OnlyLogo';

export type IconType = keyof typeof Icon;

export const Icon = {
  LinkArrow,
  LogoDark,
  LogoLight,
  Play,
  Battery,
  OnlyLogo
};