#include <stdio.h>
int main()
{
    // array defind
    // int rushi[5] = {1, 2, 3, 45, 56};
    // printf("%d\n", rushi[0]);
    // printf("%d\n", rushi[1]);
    // printf("%d\n", rushi[2]);
    // printf("%d\n", rushi[3]);
    // printf("%d\n", rushi[4]);
    // printf("%d\n", rushi[5]);
    // chang e value
    // rushi[0] = 25;

    // printf("%d\n", rushi[0]);

    // int length = sizeof(rushi) / sizeof(rushi[0]);
    // for (int i = 0; i < length; i++)
    // {
    //     printf("%d\n", rushi[i]);
    // }
    // char mahi[3] = {'A', 'B', 'C'};
    // int lenthh = sizeof(mahi) / sizeof(mahi[0]);
    // for (int i = 0; i < lenthh; i++)
    // {
    //     printf("%c\n", mahi[i]);
    // }
    // int sinal[5];
    // printf("enter sinal array value\n");
    // for (int i = 0; i < 5; i++)
    // {
    //     scanf("%d", &sinal[i]);
    // }
    // for (int i = 0; i < 5; i++)
    // {
    //     printf("%d", sinal[i]);
    // }

    int parth[5];
    printf("enter parth array value\n");
    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &parth[i]);
    }
    for (int i = 0; i < 5; i++)
    {
        printf("%d", parth[i]);
    }

    float avg, sum = 0;
    int length = sizeof(parth) / sizeof(parth[0]);
    for (int i = 0; i < length; i++)
    {
        sum = sum + parth[i];
    }
    printf("\n");
    printf("%f\n", sum);

    avg = sum / length;
    printf("avg is %f\n", avg);

    return 0;
}