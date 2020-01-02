import Base from '@/behaviors/Base'
import SessionStorage from '@/cache/SessionStorage'

class Brower extends Base {

  constructor() {
    super()
  }

  static close() {
    console.log('window_close');
  }
}

export default Brower;
