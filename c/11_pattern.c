#include <stdio.h>
int main()
{

    // int num1= 0;
    //     for (int i = 1; i < 10; i++)
    //     {

    //         if (i == 5 || i==9)
    //         {
    //             continue;
    //         }
    //         printf("Hi i like Html!%d\n", i);
    //     }

    // for (int i = 1; i < 10; i++)
    //     {

    //         if (i == 5)
    //         {
    //             break;
    //         }
    //         printf("Hi i like Html!%d\n", i);
    //     }

    //     *
    //    **
    //   ***
    //  ****
    // *****
    //    outter loop
    for (int i = 1; i <= 5; i++)
    {
        for (int k = 5; k >= i; k--)
        {
            printf(" ");
        }
        for (int j = 1; j <= i; j++)
        {
            printf("*");
        }
        printf("\n");
    }

    // *****
    //  ****
    //   ***
    //    **
    //     *
    // for (int i = 1; i <= 5; i++)
    // {
    //      for (int k = 1; k <= i; k++)
    // {
    //     printf(" ");
    // }
    //     for (int j = 5; j >= i; j--)
    // {
    //     printf("*");
    // }
    // printf("\n");
    // }
    for (int i = 1; i <= 4; i++)
    {
        for (int k = 0; k <= i; k++)
        {
            printf(" ");
        }
        for (int j = 5; j > i; j--)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}