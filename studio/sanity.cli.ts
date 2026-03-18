import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'myproject',
    dataset: 'production'
  }
})
