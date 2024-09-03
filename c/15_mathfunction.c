#include <stdio.h>
#include <math.h>
int main()
{
    // sqrt() 2*2 =4
    printf("%f\n", sqrt(0));
    printf("%f\n", sqrt(16));
    printf("%f\n", sqrt(15));
    // cbrt() 3*3*3=27
    printf("%f\n", cbrt(1));
    printf("%f\n", cbrt(8));
    printf("%f\n", cbrt(27));

    // pow() 2*3 =2*2*2=8
    printf("%f\n", pow(2, 3));
    printf("%f\n", pow(5, 2));

    // ceil()  1.1= 2 to 1.9= 2
    printf("%f\n", ceil(1.1));
    printf("%f\n", ceil(2.5));

    // floor()  2.1 to 2.9 = 2
    printf("%f\n", floor(2.5));
    printf("%f\n", floor(6.9));

    // abs() -1=1 1=1
    printf("%d\n", abs(-100));
    printf("%d\n", abs(10));
}
