class Solution {
  public double myPow(double x, long n) {
    if (n == 0) {
      return 1;
    }
    if (n > 0) {
      return handler(x, n);
    } else {
      return 1 / handler(x, Math.abs(n));
    }
  }

  public static double handler(double x, long n) {
    if (n == 1) {
      return x;
    }
    if (n % 2 == 0) {
      double temp = handler(x, n / 2);
      return temp * temp;
    } else {
      double temp = handler(x, (n - 1) / 2);
      return temp * temp * x;
    }
  }
}