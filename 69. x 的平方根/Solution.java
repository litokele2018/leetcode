import java.util.ArrayList;

class Solution {
    public int mySqrt(int x) {
        ArrayList<Integer> arr = new ArrayList<>();
        int left = 0;
        int right = x;
        handler(left, right, arr, x);
        return arr.get(0);
    }

    public static void handler(int left, int right, ArrayList<Integer> arr, int x) {
        if (arr.size() > 0)
            return;
        if (left == right) {
            arr.add(left);
            return;
        }
        int mid = left + (right - left) / 2;
        System.out.println(mid);
        long cur = (long) Math.pow(mid, 2);
        if (cur == x) {
            arr.add(mid);
        } else if (cur > x) {
            handler(left, mid, arr, x);
        } else {
            if ((long) Math.pow(mid + 1, 2) > x) {
                arr.add(mid);
                return;
            }
            handler(mid + 1, right, arr, x);
        }
    }
}

class Hello {
    public static void main(String[] args) {
        Solution s = new Solution();
        int result = s.mySqrt(2147483647);
        System.out.println(result);
    }
}