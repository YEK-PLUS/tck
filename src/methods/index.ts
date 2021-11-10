import Check from './check'
import Connector from '../connector'

class Methods {
  constructor(public connector: Connector = new Connector()) {}

  Check = Check
}
export default Methods
