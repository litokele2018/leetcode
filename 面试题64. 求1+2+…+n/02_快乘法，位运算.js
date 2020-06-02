  var sumNums = function(n) {
    let ans = 0,
      A = n,
      B = n + 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    (B & 1) && (ans += A);
    A <<= 1;
    B >>= 1;

    return ans >> 1;
  };