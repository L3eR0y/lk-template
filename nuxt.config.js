import {resolve, join } from 'path'
import fs from 'fs'

export default {
  alias: {
    '~services': resolve(__dirname, './services'),
  },
  // router: {
  //   extendRoutes(router, resolve) {
  //     try {
  //       const rootPath = process.cwd()
  //       const servicesPath = join(rootPath, 'services')
  //       const servicesDir = fs.readdirSync(servicesPath)
  //       console.log('SERVICES: ', servicesDir)
  //     } catch(e) {
  //       console.error(e)
  //     }
  //   }
  // },
  //Auto-import components path
  components: [
    '~/components',
    {
      path: '~/services',
      pattern: '*/src/*.vue',
      prefix: 'srvs',
      pathPrefix: false,
      extensions: ['vue']
    },
    {
      path: '~/services',
      pattern: '*/src/components/*/*.vue',
      pathPrefix: false,
      prefix: 'cmp',
      extensions: ['vue']
    }
  ],
  ssr: false
}