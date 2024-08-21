#include <stdio.h>
int main()
{
    int matrix[2][3] = {{1, 2, 3},
                        {4, 5, 6}};
    //  printf("%d\n",matrix[0][0]);
    //  printf("%d\n",matrix[0][1]);
    //  printf("%d\n",matrix[0][2]);
    //  printf("%d\n",matrix[1][2]);
    //  printf("%d\n",matrix[1][1]);

    // matrix[1][2] = 10;

    // printf("%d\n", matrix[1][2]);

    for (int i = 0; i < 2; i++)
    {

        for (int j = 0; j < 3; j++)
        {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    return 0;
}