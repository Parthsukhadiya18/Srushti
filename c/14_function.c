#include <stdio.h>
// function defined

// with datatype and without parametr
int hello()
{
    printf("Hi\n");
}
// without datatype and with parametr
void sum(int a, int b)
{
    printf("sum of and b%d", a + b);
}
// without datatype and without parametr
void parth()
{
    printf("hello user!\n");
}
// with datatype and with parametr

int cal(int a, int b)
{
    int c = a + b;_
    return c;
}
int main()
{
    // function call
    hello();
    sum(1, 2);
    parth();
    int add = cal(100, 3);
    printf("%d\n", add);
    printf("%d\n", cal(100, 300));
}
