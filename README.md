# 📝 TinyMCE Self-Hosted for Strapi

> Local (self-hosted) integration of the **TinyMCE** editor into the **Strapi** admin panel.  
> Works completely offline — no connection to Tiny Cloud and no API keys required.

Tested on Strapi version: 5.30.0

---

## 🚀 Overview

This component adds a full-featured **WYSIWYG editor** based on **TinyMCE**  
to the Strapi admin panel.  
All editor files — plugins, themes, icons, and styles — are loaded **locally**.

✅ Fully autonomous (no external servers required)  
✅ Includes all free TinyMCE plugins  
✅ Integrates with the Strapi Design System  
✅ Extensible and customizable interface

---

## ⚙️ Installation and Setup

1. Create a folder for the custom field: src/admin/plugins/wysiwyg-custom-field

2. Clone the repository:

```bash
git clone https://github.com/Agency-RBand/strapi-plugin-tinymce-selfhosted.git
```

3. Add the plugin to your Strapi configuration:

```typescript
export default ({ env }) => ({
    ...
    'wysiwyg-custom-field': {
        enabled: true,
        resolve: './src/plugins/wysiwyg-custom-field'
    },
    ...
});
```

4. Build the plugin:

```bash
npm install @tinymce/tinymce-react
cd src/plugins/wysiwyg-custom-field
npm run build
```

---

# 📝 TinyMCE Self-Hosted for Strapi

> Локальная (self-hosted) интеграция редактора **TinyMCE** в админ-панель **Strapi**.  
> Работает полностью офлайн — без подключения к Tiny Cloud и без API-ключей.

Протестировано на версии Strapi: 5.30.0 

---

## 🚀 Обзор

Этот компонент добавляет полноценный **WYSIWYG-редактор** на основе **TinyMCE**  
в административную панель Strapi.  
Все файлы редактора — плагины, темы, иконки и стили — загружаются **локально**.

✅ Полностью автономный (без внешних серверов)  
✅ Включает все бесплатные плагины TinyMCE  
✅ Интегрируется в Strapi Design System  
✅ Расширяемый и настраиваемый интерфейс

---

## ⚙️ Установка и подключение

1. Создайте папку для кастомного поля: src/admin/plugins/wysiwyg-custom-field

2. Клонируем репозиторий:

```bash
git clone https://github.com/Agency-RBand/strapi-plugin-tinymce-selfhosted.git
```

3. Подключаем плагин к Strapi конфигурации:

```typescript
export default ({ env }) => ({
    ...
    'wysiwyg-custom-field': {
        enabled: true,
        resolve: './src/plugins/wysiwyg-custom-field'
    },
    ...
});
```

4. Запускаем сборку плагина 

```bash
npm install @tinymce/tinymce-react
cd src/plugins/wysiwyg-custom-field
npm run build
```