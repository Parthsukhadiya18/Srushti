#include <stdio.h>
int main()
{    // 123 
    int num, r, sum = 0;
    printf("enter num\n");
    scanf("%d", &num);
    while (num > 0)
    {
        r = num % 10;
        sum = sum * 10 + r;

        num = num / 10;
    }
    printf("%d revers number", sum);

    return 0;
}