#include <stdio.h>

int main()
{
    //   fill create
    //  FILE *fptr;
    //   fptr = fopen("parth.text", "w");
    //   fclose(fptr);

    // fill write
    // FILE *fptr;
    // fptr = fopen("parth.text", "w");
    // fprintf(fptr, "Welcome parth");
    // fclose(fptr);

    // fill append
    // FILE *fptr;
    // fptr = fopen("parth.text", "a");
    // fprintf(fptr, "\nWelcome indid");
    // fclose(fptr);

    // fill read
    FILE *fptr;
    fptr = fopen("parth.text", "r");

    char name[100];
    while (fgets(name, 100, fptr))
    {
        printf("%s", name);
    }

    fclose(fptr);

    return 0;
}