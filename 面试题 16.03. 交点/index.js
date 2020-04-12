/* 
给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。
要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。
 
示例 1：

输入：
line1 = {0, 0}, {1, 0}
line2 = {1, 1}, {0, -1}
输出： {0.5, 0}
示例 2：

输入：
line1 = {0, 0}, {3, 3}
line2 = {1, 1}, {2, 2}
输出： {1, 1}
示例 3：

输入：
line1 = {0, 0}, {1, 1}
line2 = {1, 0}, {2, 1}
输出： {}，两条线段没有交点

提示：
坐标绝对值不会超过 2^7
输入的坐标均是有效的二维坐标
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-lcci
。 */

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2, k = 0) {
  // 特殊k值前置，保证特殊都在前边，好处理
  if (k === 0) {
      if (start2[0] - end2[0] === 0 || start2[1] - end2[1] === 0)
          return intersection(start2, end2, start1, end1, k = 1)
  }
  // 这个是可能的交点
  let x = null, y = null
  // 第一条平行于Y轴
  if (start1[0] - end1[0] === 0) {
      if (start2[0] - end2[0] === 0) {
          // 两条线都平行Y轴
          if (start1[0] === start2[0] && Math.max(start1[1], end1[1]) >= Math.min(start2[1], end2[1]) && Math.min(start1[1], end1[1]) <= Math.max(start2[1], end2[1]))
              return [start1[0], Math.max(Math.min(start2[1], end2[1]), Math.min(start1[1], end1[1]))]
      } else {
          // 第二条线不平行Y(未判断线段可交)
          let k = (end2[1] - start2[1]) / (end2[0] - start2[0])
          x = start1[0]
          y = (x - end2[0]) * k + end2[1]
      }
  } else if (start1[1] - end1[1] === 0) {
      // 第一条平行于X轴
      if (start2[1] - end2[1] === 0) {
          // 两条线都平行X轴
          if (start1[1] === start2[1] && Math.max(start1[0], end1[0]) >= Math.min(start2[0], end2[0]) && Math.min(start1[0], end1[0]) >= Math.max(start2[0], end2[0]))
              return [Math.max(Math.min(start2[0], end2[0]), Math.min(start1[0], end1[0]), start1[1])]
      } else if (start2[0] - end2[0] === 0) {
          // 第二条线平行Y(未判断线段可交)
          x = start2[0]
          y = start1[1]
      } else {
          // 第二条线存在K
          let k = (end2[1] - start2[1]) / (end2[0] - start2[0])
          y = start1[1]
          x = (y - (start2[1] - (k * start2[0]))) / k
      }
  } else if ((end2[1] - start2[1]) / (end2[0] - start2[0]) === (end1[1] - start1[1]) / (end1[0] - start1[0])) {
      // 斜率不为0存在且相等
      let k = (end2[1] - start2[1]) / (end2[0] - start2[0])
      if ((end2[1] - k * end2[0]) === (end1[1] - k * end1[0])) {
          // b相等
          x = Math.max(Math.min(start1[0], end1[0]), Math.min(start2[0], end2[0]))
          y = Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))
      } else {
          // b不相等 没有交点
          return []
      }
  } else {
      // 两个都是正常的K
      let k2 = (end2[1] - start2[1]) / (end2[0] - start2[0])
      let k1 = (end1[1] - start1[1]) / (end1[0] - start1[0])
      let b2 = (start2[1] - k2 * start2[0])
      let b1 = (start1[1] - k1 * start1[0])
      x = (b2 - b1) / (k1 - k2)
      y = (x * k1) + b1
  }
  // 上下左右边界，确定所求出来的x,y是不是在线段上面
  let l = Math.max(Math.min(start1[0], end1[0]), Math.min(start2[0], end2[0]))
  let r = Math.min(Math.max(start1[0], end1[0]), Math.max(start2[0], end2[0]))
  let b = Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))
  let t = Math.min(Math.max(start1[1], end1[1]), Math.max(start2[1], end2[1]))
  // console.log(l, r, b, t)
  // console.log(x, y)
  if (x !== null && x >= l && x <= r && y <= t && y >= b) {
      return [x, y]
  } else {
      return []
  }
};

let start1 = [0, 3]

let end1 = [0, 6]


let start2 = [0, 1]

let end2 = [0, 5]

intersection(start1, end1, start2, end2)
debugger;