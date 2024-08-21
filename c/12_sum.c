#include <stdio.h>
int main()
{
    int matrix1[2][3], matrix2[2][3];

    printf("enter matrix1[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &matrix1[i][j]);
        }
    }
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix1[i][j]);
        }
        printf("\n");
    }

    printf("enter matrix2[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &matrix2[i][j]);
        }
    }
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix2[i][j]);
        }
        printf("\n");
    }
    printf("sum od matrix1[2][3] and matrix2[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix1[i][j] + matrix2[i][j]);
        }
        printf("\n");
    }

    printf("sub od matrix1[2][3] and matrix2[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix1[i][j] - matrix2[i][j]);
        }
        printf("\n");
    }
    printf("multy od matrix1[2][3] and matrix2[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix1[i][j] * matrix2[i][j]);
        }
        printf("\n");
    }
    printf("divison od matrix1[2][3] and matrix2[2][3]\n");
    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix1[i][j] / matrix2[i][j]);
        }
        printf("\n");
    }

    return 0;
}