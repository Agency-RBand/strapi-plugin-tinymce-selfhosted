import type { Core } from '@strapi/strapi';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.customFields.register({
      name: 'wysiwyg-value',    // имя поля
      plugin: 'wysiwyg-custom-field', // идентификатор плагина (pluginId)
      type: 'text',
      inputSize: {
        default: 12,      // 100% ширины
        isResizable: true // разрешить изменение ширины в UI
      },
    });
};

export default register;
