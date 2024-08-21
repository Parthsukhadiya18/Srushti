#include <stdio.h>
int main()
{
   
     int a, b;
    printf("enter value of a  and b\n");
    scanf("%d %d", &a, &b);
    printf("select 1-4\n");
    printf("1. Add\n");
    printf("2. sub\n");
    printf("3. multi\n");
    printf("4. division\n");
    int chioce;
    scanf("%d", &chioce);
   
    switch (chioce)
    {
    case 1:
        printf("add a nd b%d", a + b);
        break;
    case 2:
        printf("sub a nd b%d", a - b);
        break;
    case 3:
        printf("multi a nd b%d", a * b);
        break;
    case 4:
        if (b != 0)
        {
            printf("div a nd b%f", (float)a / b);
        }
        else
        {
            printf("error b is zero");
        }

        break;

    default:
        printf("select right option");
        break;
    }
    return 0;
}