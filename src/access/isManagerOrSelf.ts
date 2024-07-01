import { Access } from 'payload'



// @ts-ignore
export const isManagerOrSelf=(organisationId:string='organisation'):Access=>({req:{user}}) => {

  if(user){
    if (user.roles.includes('admin')){
      return true
    }

    if(user.roles.includes('manager') && user.organisations.length > 0){



      return {

        or:[{
          [organisationId]:{
            in:user.organisations
          }
        },{
          [organisationId]:{
            exists:false
          }
        }]
      }
    }

    return {
      id:{
        equals:user?.id
      }
    }
  }

 return false


}

// export const isManagerOrSelf:Access = ({req: { user }})=>{
//   if(user?.roles.includes('admin') ){
//     return true
//   }
//
//   if(user?.roles.includes('manager') && user?.organisations.length > 0){
//
//
//     return {
//
//       or:[{
//         organisation:{
//           in:user.organisations
//         }
//       },{
//         organisation:{
//           exists:false
//         }
//       }]
//     }
//   }
//
//
//   return {
//     id:{
//       equals:user?.id
//     }
//   }
//
//
//
//
//
// }