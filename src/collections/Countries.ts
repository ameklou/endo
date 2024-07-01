import { CollectionConfig } from 'payload'
import { isAdmin } from '@/access/isAdmin'


const Countries:CollectionConfig = {
  slug:'countries',
  admin:{
    useAsTitle:'name'

  },
  access:{
    read:()=>true,
    create:isAdmin,
    update:isAdmin,
    delete:isAdmin,
  },
  fields:[
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'text',
    }
  ]
}

export default Countries