// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Countries from '@/collections/Countries'
import Organisations from '@/collections/Organisations'
import Projects from '@/collections/Projects'
import { slateEditor } from '@payloadcms/richtext-slate'
import MapComponent from '@/components/MapComponent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components:{
      views:{
        map:{
          Component:MapComponent,
          path:'/map'
        }
      }
    }
  },
  collections: [Users, Media, Countries, Organisations, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
