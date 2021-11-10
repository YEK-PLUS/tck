import Fetch from 'node-fetch'
import Connector from './connector'
import Methods from './methods'

class Tck {
  constructor(options: { fetch?: typeof Fetch } = {}) {
    this.update(options || {})
  }

  setup = () => {
    this.connector = new Connector(this.options.fetch || Fetch)
    this.methods = new Methods(this.connector)
  }

  update = (options: { fetch?: typeof Fetch }) => {
    this.options = options
    this.setup()
  }

  options!: { fetch?: typeof Fetch }

  connector!: Connector

  methods!: Methods
}

export default Tck
