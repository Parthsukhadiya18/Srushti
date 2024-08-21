#include <stdio.h>
int main()
{
    int day;
    printf("enter day 0-6\n ");
    printf("1 for Monday\n");
    scanf("%d", &day);
    switch (day)
    {
    case 0:
        printf("Sunday");
        /* code */
        break;
    case 1:
        printf("monday");
        /* code */
        break;
    case 2:
        printf("tuesday");
        /* code */
        break;
    case 3:
        printf("Wednesday");
        /* code */
        break;
    case 4:
        printf("thursday");
        /* code */
        break;
    case 5:
        printf("Friday");
        /* code */
        break;

    case 6:
        printf("Saturday");
        /* code */
        break;

    default:
        printf("select option");
        break;
    }
    return 0;
}