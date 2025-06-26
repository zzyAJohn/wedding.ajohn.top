import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'works',
  link: '/works/',
  sidebar: [
    'README.md',
    {
      text: '2025-06',
      prefix: '2025-06', 
      items: [
        '2025-06-21.md',
        '2025-06-07.md',
      ]
    },
    {
      text: '2025-05',
      prefix: '2025-05', 
      items: [
        '2025-05-25.md',
        '2025-05-03.md',
        '2025-05-02.md',
        '2025-05-01.md',
      ]
    },
  ]
})