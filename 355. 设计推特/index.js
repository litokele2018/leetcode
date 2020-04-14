/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.usersTweets = new Map()
  this.usersFollow = new Map()
  this.time = 0
};

/**
 * Compose a new tweet. 
 * 创建一条新的推文
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.usersTweets.get(userId)) {
    this.usersTweets.set(userId, [{
      tweetId,
      time: this.time++
    }])
  } else {
    this.usersTweets.get(userId).push({
      tweetId,
      time: this.time++
    })
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted 
 * by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  // 1. 取出自己发的tweet
  let myTweets = this.usersTweets.get(userId)
  // 2. 取出我关注的人的tweets
  let followSet = this.usersFollow.get(userId)
  let result = []
  if (myTweets) {
    myTweets.forEach(item => {
      result.push(item)
    })
  }
  if (followSet) {
    for (let item of followSet) {
      // 取得 关注的人 然后 获取他们的tweets
      let otherTweets = this.usersTweets.get(item)
      if (otherTweets) {
        otherTweets.forEach(item => {
          result.push(item)
        })
      }
    }
  }
  result.sort((a, b) => a.time - b.time)
  let ans = []
  result.forEach(item => {
    ans.push(item.tweetId)
  })
  ans.reverse()
  while (ans.length > 10) {
    ans.pop()
  }
  return ans
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * 关注一个用户
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (followeeId === followerId) {

  } else if (!this.usersFollow.get(followerId)) {
    let temp = new Set([followeeId])
    this.usersFollow.set(followerId, temp)
  } else {
    this.usersFollow.get(followerId).add(followeeId)
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * 取消关注一个用户
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.usersFollow.get(followerId) || !this.usersFollow.get(followerId).has(followeeId)) {

  } else {
    this.usersFollow.get(followerId).delete(followeeId)
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter = new Twitter();
twitter.postTweet(1, 3);
twitter.postTweet(1, 101);
twitter.postTweet(1, 13);
twitter.postTweet(1, 10);
twitter.postTweet(1, 2);
twitter.postTweet(1, 94);
twitter.postTweet(1, 505);
twitter.postTweet(1, 333);
twitter.postTweet(1, 22);
twitter.postTweet(1, 11);
twitter.getNewsFeed(1);
debugger