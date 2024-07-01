import { CollectionConfig } from 'payload'
import { isAdmin } from '@/access/isAdmin'
import { isAdminOrMember } from '@/access/isAdminOrMember'


const Organisations:CollectionConfig={
  slug:'organisations',
  admin:{
    useAsTitle:'name'

  },
  access:{
    read:isAdminOrMember('id'),
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
      name:'description',
      label:'Description',
      type:'richText',
      required:true,
    },
    {
      name: 'country',
      type: 'relationship',
      relationTo:'countries',
      required: true,
      admin:{
        position:'sidebar'
      }
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo:'media',
      admin:{
        position:'sidebar'
      }

    }
  ]


}

export default Organisations;