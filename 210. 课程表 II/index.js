// 210. 课程表 II

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let arr = [];
  let map = new Map();  
  let set = new Set();  // 用于记录是否被处理过
  let circle = new Set(); // 用于判断环
  let flag = false;  // 用于判断是否有环

  const handler = (i) => {
    if (set.has(i)) return;
    if (!circle.has(i)) {
      circle.add(i);
    } else {
      flag = true;
      circle.clear();
      return;
    }
    if (!map.has(i) && !set.has(i)) {
      arr.push(i);
      set.add(i);
      return;
    }
    map.get(i).forEach(item => {
      handler(item);
      if (!set.has(item)) {
        set.add(item);
        arr.push(item);
      }
    });
    if (!set.has(i)) {
      arr.push(i);
      set.add(i);
    }
  }

  prerequisites.forEach(item => {
    if (!map.has(item[0])) {
      map.set(item[0], [item[1]]);
    } else {
      map.get(item[0]).push(item[1]);
    }
  });

  for (let i = 0; i < numCourses; i++) {
    handler(i);
  }
  return flag ? [] : arr;
};