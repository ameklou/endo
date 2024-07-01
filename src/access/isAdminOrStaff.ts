import { Access, FieldAccess } from 'payload'


export const isAdminOrStaff:Access= ({req:{user}}) =>{
  if(user){
    if(user.roles.includes('admin') || user.roles.includes('manager')){
      return true
    }
  }

  return false
}

export const isAdminOrStaffField:FieldAccess = ({req:{user}})=>{

  return !!(user?.roles.includes('admin') || user?.roles.includes('manager'));


}