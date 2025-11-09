import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';

// Импортируем модели
import 'tinymce/models/dom/model';

// Важно: импортируем CSS
import 'tinymce/skins/ui/oxide/skin.css';
import 'tinymce/skins/content/default/content.css';

// Все бесплатные плагины
import 'tinymce/plugins/accordion';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
// import 'tinymce/plugins/fontselect';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// Проблемные плагины (добавляйте по одному для тестирования)
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';

// Импортируем языковые файлы (если нужно)
import 'tinymce/plugins/help/js/i18n/keynav/en';

import {
  Field,
  Flex,
} from '@strapi/design-system';

interface WYSIWYGFieldProps {
  name: string;
  value?: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const WYSIWYGField = ({ name, value, onChange }: WYSIWYGFieldProps) => {

    const handleEditorChange = (data: string) => {
        onChange({ target: { name, value: data  } });
    };

  return (
    <Field.Root
      name={name}
      id={name}
    >
      <Flex spacing={1} alignItems="normal" style={{ flexDirection: 'column' }}>
        <Field.Label>{name}</Field.Label>
        <Editor
            licenseKey="gpl"
            init={{
                height: 600,
                menubar: true,
                plugins: [
                    'accordion', 'anchor', 'autolink', 'autosave',
                    'charmap', 'code', 'codesample', 'directionality', 'emoticons',
                    'fullscreen', 'help', 'image', 'importcss', 'insertdatetime',
                    'link', 'lists', 'advlist', 'media', 'nonbreaking', 'pagebreak',
                    'preview', 'quickbars', 'save', 'searchreplace', 'table',
                    'visualblocks', 'visualchars', 'wordcount', 'emoticons'
                ],
                toolbar:
                    'undo redo | blocks fontfamily fontsize | fullscreen code | bold italic forecolor backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                    'accordion anchor link image media table codesample | ' +
                    'charmap emoticons preview help',
                contextmenu:
			        'link image image_picture responsivefilemanager inserttable | tableprops cell row column deletetable',
                quickbars_selection_toolbar:
			        'bold italic | quicklink h2 h3 h4 h5 h6 blockquote quickimage',
                    // Настройки для formatselect (выпадающий список форматов)
                block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6; Preformatted=pre; Blockquote=blockquote',
                // Настройки для выбора размера шрифта
                font_size_formats: '0.5rem 0.675rem 0.75rem 0.875rem 1rem 1.125rem 1.25rem 1.5rem 1.75rem 2rem 2.25rem 3rem',
                // Настройки для Enter и Shift+Enter
                // br_in_pre: false, // Отключаем автоматические <br> в <pre>
                // Настройки поведения клавиши Enter
                forced_root_block: 'div',
                // forced_root_block_attrs: {
                //     class: 'tinymce-root-block'
                // },
                // Разрешаем использовать <br> для переносов
                // br_in_pre: true,
                // Настройки для специфических плагинов
                emoticons_database: 'emojis',
                // Отключаем загрузку с сервера
                content_css: false,
                skin: false,
                // Указываем относительные пути (если нужно)
                relative_urls: false,
                remove_script_host: false,
                convert_urls: true,
                // Дополнительные настройки для предотвращения загрузки ресурсов
                external_plugins: {},
                // Отключаем загрузку лицензионного менеджера
            }}
            value={value}
            onEditorChange={handleEditorChange}
        />
      </Flex>
    </Field.Root>
  );
};

export default WYSIWYGField;