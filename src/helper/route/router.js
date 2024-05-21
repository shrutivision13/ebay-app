'use client';
import { IconUser, IconSettings, IconHome2, IconNotes } from '@/helper/imports/Imports';

export let route = [
  {
    id: 0,
    name: "Dashboard", path: "/dashboard", icon: <IconHome2 />
  },
  {
    id: 1,
    name: "Products", path: "/products", icon: <IconNotes />
  },
  {
    id: 2,
    name: "User", path: "/user", icon: <IconUser />
  },
  {
    id: 3,
    name: "Settings", path: "/settings", icon: <IconSettings />
  }
];
