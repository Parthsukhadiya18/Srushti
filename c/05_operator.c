#include <stdio.h>
int main()
{
    // oprerator arithetic operator + = * % ? ++ --

    int num1 = 100, num2 = 3, ans;
    int sum = num1 + num2;

    printf("sum= %d\n", sum);
    int sub = num1 - num2;

    printf("sub= %d\n", sub);
    int mul = num1 * num2;

    printf("mul= %d\n", mul);
    float div = num1 / num2;

    printf("div= %f\n", div);
    float mod = num1 % num2;

    printf("mod= %f\n", mod);

    // assisn oprator += -= *= /=

    int num3 = 10;
    // printf("%d", num3);
    // printf("%d", ++num3);

    // printf("%d", num3++);
    num3 = 10;
    int num4 = 20;
    // num3=num3 +num4;

    num3 += num4;
    printf("num3+=num4=%d\n", num3);
    num3 -= num4;
    printf("num3-=num4=%d\n", num3);

    num3 *= num4;
    printf("num3*=num4=%d\n", num3);
    num3/=num4;
    printf("num3/=num4 %d\n", num3);
    return 0;
}