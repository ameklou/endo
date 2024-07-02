import { CollectionConfig } from 'payload'
import { isAdminOrMember } from '@/access/isAdminOrMember'
import { hasAccess } from '@/access/hasAccess'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import { isAdminOrStaff, isAdminOrStaffField } from '@/access/isAdminOrStaff'


const projects :CollectionConfig={
  slug:'projects',
  admin:{
    useAsTitle:'name'
  },
  access:{
  read:isAdminOrMember('organisation'),
    update:hasAccess,
    delete:isAdminOrStaff,


  },
  fields:[
    {
      name: 'name',
      type: 'text',
      required: true,

    },{
      name: 'description',
      type: 'richText',
      required:true,
    },
    {
      name: 'organisation',
      type: 'relationship',
      relationTo:'organisations',
      required: true,
    },
    {
      name: 'location',
      type: 'point',
      required: true,
    },
    {
      name:'medias',
      type: 'relationship',
      relationTo:'media',
      hasMany:true,
      required: true,
    },
    {
      name:'createdBy',
      type: 'relationship',
      relationTo:'users',
      required: true,
      access:{
        update:isAdminOrStaffField,
        read:isAdminOrStaffField,
      },

      admin: {
        // readOnly: true,
        position: 'sidebar',
        condition: data => Boolean(data?.createdBy)
      },
    }
  ],
  hooks:{
    beforeChange:[
      ({req, operation, data})=>{
        if(operation === 'create'){
          if(req.user){
            data.createdBy = req.user.id;
            return data;
          }
        }
      }
    ]
  }

}

export default projects;