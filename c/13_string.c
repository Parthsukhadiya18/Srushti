#include <stdio.h>
int main()
{

    // string
    char mystring[] = "Hello yesha";
    printf("%s\n", mystring);
    printf("%c\n", mystring[0]);
    printf("%c\n", mystring[5]);
    printf("%c\n", mystring[6]);

    mystring[6] = 'y';
    printf("%s\n", mystring);
    int legnth = sizeof(mystring) / sizeof(mystring[1]);
    printf("my string \n");
    for (int i = 0; i < legnth; i++)
    {
        printf("%c\n", mystring[i]);
    }

    char Name[30];
    printf("enter Name \n");
    // scanf("%s", &Name);
    fgets(Name, sizeof(Name), stdin);
    printf("%s", Name);

    return 0;
}