import Base from '@/behaviors/Base'

class Brower extends Base{

  constructor() {
    super()
  }

  static open() {

  }

  static close() {
    console.log('window_close');
  }
}

export default Brower;
