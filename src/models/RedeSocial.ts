/**
 * Descreve as propriedades para uma rede social a ser exibida.
 */
export interface RedeSocial {
  name: string;
  username: string;
  profileUrl: URL;
  redeIcon?: FontAwesomeIcon;
}

/**
 * Descreve as propriedades para um ícone do FortAwesome.
 */
export interface FontAwesomeIcon {
  faType: 'fas' | 'fab';
  faIcon: string;
}
