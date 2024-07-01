import { Access } from 'payload'

// @ts-ignore
export const hasAccess:Access = ({req:{user}})=>{
  if (user){
    if(user.roles.includes('admin')){
      return true
    }
    if(user.roles.includes('manager') && user.organisations.length > 0){

      return {

        or:[{
          organisation:{
            in:user.organisations
          }
        },{
          organisation:{
            exists:false
          }
        }]
      }

    }

    return {
      createdBy:{
        equals:user?.id
      }
    }
  }

  return false


}