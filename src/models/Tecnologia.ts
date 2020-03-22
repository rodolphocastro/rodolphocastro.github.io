import { FontAwesomeIcon } from './fontAwesomeIcon'

/**
 * Tecnologia a ser listada no site.
 */
export interface Tecnologia {
  name: string;
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
  techUrl: URL;
  techIcon?: FontAwesomeIcon;
}

// TODO: Adicionar tags para permitir filtros
