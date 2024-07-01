
import {User} from '@/payload-types'
import type { Access, FieldAccess } from 'payload'


export const isAdmin:Access = ({ req: { user } })=>{
  if(user){
    return Boolean(user.roles?.includes('admin'))
  }
  return false
}


export const isAdminField:FieldAccess = ({req:{user}})=>{
  return !!user?.roles?.includes('admin');

}