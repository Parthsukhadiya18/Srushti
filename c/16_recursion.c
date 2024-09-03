#include <stdio.h>
int sum(int k)
{
    if (k > 5)
    {
        return k + sum(k - 1);
        // 5 +sum(4) 5+10=15
        // 4+ sum(3) 4+6=10
        // 3+sum(2);  3+3=6
        // 2+sum(1); 2+1=3
        // 1+sum(0); 1+0=1
    }
    else
    {
        return 0;
    }
}

int main()
{

    int add = sum(0);
    printf(" sum(0) %d\n", add);
    add = sum(1);
    printf(" sum(1) %d\n", add);
    add = sum(5);
    printf(" sum(5) %d\n", add);
    add = sum(10);
    printf(" sum(10) %d\n", add);
    return 0;
}