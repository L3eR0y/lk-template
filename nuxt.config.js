import {resolve} from 'path'

export default {
  alias: {
    '~services': resolve(__dirname, './services'),
  },
  //Auto-import components path
  components: [
    '~/components',
    { 
      path: '~/services',
      pathPrefix:false,
      prefix: 'srvs',
      extensions: ['vue']
    }
  ],
  ssr: false
}