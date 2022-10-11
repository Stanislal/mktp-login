import {mergeDefaultConfig} from '@oracle-cx-commerce/react-widgets/config';
import * as pt_BR from './locales/pt-BR';

export default {
  name: 'MktpLogin',
  decription: 'Description of widget MktpLogin',
  author: 'henrique.conceicao',
  fetchers: [],
  actions: [],
  resources: {
    'pt-BR': pt_BR
  },
  config: mergeDefaultConfig()
};
