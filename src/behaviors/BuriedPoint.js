import Base from '@/behaviors/Base'

class BuriedPoint extends Base {

  static pvs = [];
  static uvs = [];

  /**
   * @param params
   * param.pageName
   * param.time
   */
  static recordTime(params) {
    BuriedPoint.pvs.push(params)
  }

  /**
   * @param params
   * param.pageName
   * param.operaName
   * param.time
   */
  static recordOpera(params) {
    BuriedPoint.uvs.push(params)
  }

}

export default BuriedPoint;
