import type { CollectionConfig } from 'payload'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { isAdminField } from '@/access/isAdmin'
import { isAdminOrStaff } from '@/access/isAdminOrStaff'
import { isManagerOrSelf } from '@/access/isManagerOrSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {

    depth: 0,
  },
  access:{
    read: isManagerOrSelf('organisations'),
  },
  fields: [
    {
      name:'username',
      label:'Username',
      type:'text',
    },
    {
      name: 'roles',
      label:'Roles',
      type:'select',
      required:true,
      hasMany:true,
      options:[
        {
          value:'admin',
          label:'Admin',
        },
        {
          value:'member',
          label:'Member',
        },
        {
          value:'manager',
          label:'Manager',

        }

      ],
      access:{
        update:isAdminField,
        create:isAdminField
      }
    },
    {
      name:'country',
      label:'Country',
      type:'relationship',
      relationTo:'countries',
      required: true,
      admin:{
        position:'sidebar'
      },
      access:{
        read:()=>true,
        update:isAdminField,
        create:isAdminField
      }
    },
    {
      name:'organisations',
      label:'Organisations',
      type:'relationship',
      relationTo:'organisations',
      required:true,
      hasMany:true,
      admin:{
        position:'sidebar'
      },
      access:{
      update:isAdminField,
      create:isAdminField
    }
    },

  ],
}
