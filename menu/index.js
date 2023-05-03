import { IconAdjustments, IconChevronRight, IconForms, IconHome, IconLanguage, IconLayoutBoard, IconNotes, IconSitemap } from "@tabler/icons-react";

export default [
  {
    key: 'dashboard',
    title: 'Dashboard',
    link: '/admin/dashboard',
    icon: <IconHome stroke={1.8} size={25} />,
    chevron: <IconChevronRight stroke={1.8} size={22} />,
  },
  {
    key: 'articles',
    title: 'Articles',
    link: '/admin/articles',
    icon: <IconNotes stroke={1.8} size={25} />,
    chevron: <IconChevronRight stroke={1.8} size={22} />,
  },
  {
    key: 'categories',
    title: 'Categories',
    link: '/admin/categories',
    icon: <IconSitemap stroke={1.8} size={25} />,
    chevron: <IconChevronRight stroke={1.8} size={22} />,
  },
]