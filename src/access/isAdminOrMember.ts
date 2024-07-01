import { Access } from 'payload'



export const isAdminOrMember=(organisationId:string='organisation'):Access=>({req:{user}}) => {

    if(user){
        if (user.roles.includes('admin')){
            return true
        }

        if(user.organisations.length > 0){

            console.log(organisationId)


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
    }

    return false


}