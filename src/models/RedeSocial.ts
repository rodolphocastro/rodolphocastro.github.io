import { FontAwesomeIcon } from './FontAwesomeIcon';

/**
 * Descreve as propriedades para uma rede social a ser exibida.
 */
export interface RedeSocial {
  name: string;
  username: string;
  profileUrl: URL;
  redeIcon?: FontAwesomeIcon;
}
