#include <stdio.h>

int main()
{
    // int num = 10;
    // int *ptr = &num;

    //  char *a='a';
    //  float* n1='10.89';
    // printf("%d\n", num);
    // printf("%d\n", ptr);
    // printf("%d\n", *ptr);
    // printf("%d\n", &num);

    int num[] = {1, 2, 3, 4};
    // printf("%d\n", num[5]);
    // for (int i = 0; i < 4; i++)
    // {
    //     printf("%d\n", num[i]);
    // }

    // for (int i = 0; i < 4; i++)
    // {
    //     printf("%d  ", &num[i]);
    // }

    int *ptr = num;
    // printf("%d\n", *(ptr + 0));
    for (int i = 0; i < 4; i++)
    {
        printf("%d\n", *(ptr + i));
    }

    return 0;
}