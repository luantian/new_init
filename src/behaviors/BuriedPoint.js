let pvs = [];
let uvs = [];

import Base from '@/behaviors/Base'

class BuriedPoint extends Base {

  /**
   * @param params
   * param.pageName
   * param.time
   */
  static recordTime(params) {
    pvs.push(params)
    console.log(pvs)
  }

  /**
   * @param params
   * param.pageName
   * param.operaName
   * param.time
   */
  static recordOpera(params) {
    uvs.push(params)
  }

}

export default BuriedPoint;
