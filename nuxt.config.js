import {resolve} from 'path'

export default {
  alias: {
    // '~assets': resolve(__dirname, './assets'),
  },
  //Auto-import components path
  components: [
    '~/components',
    { path: '~/services', extensions: ['vue'] }
  ]
}