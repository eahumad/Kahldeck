// src/i18next.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface Resources {
    translation: {
      welcome: string;

      layout_list: {
        search_bar: {
          search: string;
          placeholder: string;
        };
        create_layout: string;
      };

      layout_view: {
        title: string;
        options: {
          matrix: {
            cols: string;
            rows: string;
          };
          position: {
            portrait: string;
            landscape: string;
          };
          delete: string;
        };
      };
    };
  }
}
