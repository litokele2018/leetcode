/* 
设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。
get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。
进阶：
你是否可以在 O(1) 时间复杂度内执行两项操作？
示例：
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2)
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4
*/
/**
 * @param {number} capacity
 */
let LFUCache = class {
  constructor(capacity) {
      this.limit = capacity
      this.cache = new Map()
      this.freqMap = new Map()
  }

  get(key) {
      let cache = this.cache
      let r = -1
      if (typeof cache[key] != "undefined") {
          let o = cache[key]
          r = o.value
          //更新频率记录
          this.updateL(key, o)
      }
      return r
  };

  updateL(key, obj) {
      let freq = obj.freq;
      let arr = this.freqMap[freq]
      // 删除原频率记录
      this.freqMap[freq].splice(arr.indexOf(key), 1)
      // 清理
      if (this.freqMap[freq].length == 0) delete this.freqMap[freq]
      // 更新频率
      freq = obj.freq = obj.freq + 1
      if (!this.freqMap[freq]) this.freqMap[freq] = []
      this.freqMap[freq].push(key)
  }

  put(key, value) {
      let cache = this.cache
      let limit = this.limit
      let fmap = this.freqMap
      if (limit <= 0) return
      if (typeof key == "undefined" || typeof value == "undefined") throw new Error('key or value is undefined')
      // 存在则直接更新
      if (typeof cache[key] == "undefined") {
          // 获取频率 key
          // 判断容量是否满
          if (Object.keys(cache).length == limit) {
              let fkeys = Object.keys(fmap)
              let freq = fkeys[0]
              // 获取key集合
              let keys = fmap[freq]
              // 淘汰首位
              delete cache[keys.shift()]
              // delete cache[keys[0]];
              // keys.splice(0, 1);
              // 清理
              if (fmap[freq].length == 0) delete fmap[freq]
          }
          // 频率记录是否存在
          if (!fmap[1]) fmap[1] = []
          // 插入新值
          fmap[1].push(key)
          cache[key] = {
              value: value,
              freq: 1 // 默认的频率
          }
      } else {
          cache[key].value = value
          //更新频率记录
          this.updateL(key, cache[key])
      }
  }
};