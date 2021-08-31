/**
 * @description 是否在数字前+0
 * @param {number} num 数字
 * @return {string} str 是否+0后的数字字符
 */
export function isAddZero(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return num.toString();
}
/**
 * @description 获取时间戳
 * @param {number} date 时间参数
 * @return {number} timestamp-真正的时间戳
 */
export function getTimestamp(date: Date = new Date()) {
  if (date) {
    return date.getTime();
  }
  return new Date().getTime();
}
/**
 * @description 获取标准格式的时间
 * @param {number} timestamp 时间戳参数
 * @return {string} "YYYY-MM-DD hh:mm:ss"
 */
export function getExactTime(
  timestamp: number = new Date().getTime()
): string {
  const date = new Date(timestamp);
  // 年月日
  const Y = date.getFullYear();
  const M = isAddZero(date.getMonth() + 1);
  const D = isAddZero(date.getDay());
  // 时分秒
  const h = isAddZero(date.getHours());
  const m = isAddZero(date.getMinutes());
  const s = isAddZero(date.getSeconds());

  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

/**
 * @description deepClone 深克隆
 * @param {} target 克隆的值
 * @return {} cTarget 拷贝后的值 
 */
interface IOrigion {
  [key: string | number]: { [key: string]: any } | any[] | any;
}
export function deepClone(origion: IOrigion) {
  const org: IOrigion = origion || {},
    tar: IOrigion = Array.isArray(origion) ? [] : {};
  
  if (org && typeof org === 'object') {
    for (let k in org) {
      if (org[k] && typeof org[k] === 'object') {
        tar[k] = deepClone(org[k]);
      } else tar[k] = org[k];
    }
  }

  return tar;
}

/**
 * @description localSet-本地存储某字段
 * @param {string} prop 对应的属性
 * @param {IOrigion} value 对应的值
 * @return {void} localSet功能函数没有返回值
 */
export function localSet(prop: string, value: IOrigion): void {
  if (!prop.length) {
    return;
  }
  if (!value) {
    localStorage.setItem(prop, '');
    return;
  }
  
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(prop, jsonValue);
  console.log(`存储${prop}成功, 对应的jsonString值: ${jsonValue}`);
}

/**
 * @description localGet-获取本地某字段对应的值
 * @param {string} prop 对应的属性
 * @return {IOrigion} 返回存储进去的原始值
 */
export function localGet(prop: string): IOrigion {
  const value: IOrigion = JSON.parse(localStorage.getItem(prop) || '{}');
  return value;
}
