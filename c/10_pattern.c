#include <stdio.h>
int main()
{

    // * * * *  *
    // * * * *  *
    // * * * *  *
    // * * * *  *
    // * * * *  *
    // for (int i = 1; i <= 5; i++)
    // {
    //     printf("* ");
    // }
    // printf("\n");
    // for (int i = 1; i <= 5; i++)
    // {
    //     printf("* ");
    // }
    //   printf("\n");
    // for (int i = 1; i <= 5; i++)
    // {
    //     printf("* ");
    // }
    //   printf("\n");
    // for (int i = 1; i <= 5; i++)
    // {
    //     printf("* ");
    // }
    //   printf("\n");
    // for (int i = 1; i <= 5; i++)
    // {
    //     printf("* ");
    // }
    // outter loop row
    for (int i = 1; i <= 5; i++)
    {
        // inner loop column
        for (int j = 1; j <= 5; j++)
        {
            printf("*");
        }

        printf("\n");
    }

    return 0;
}