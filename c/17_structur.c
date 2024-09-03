#include <stdio.h>
#include <string.h>

struct student
{
    int id;
    char name[100];
};

int main()
{

    struct student s1;
    s1.id = 10;
    // s1.name="parth";
    strcpy(s1.name, "PArth");

    printf(" s1.name %d", s1.id);
    printf(" s1.name %s\n", s1.name);

    struct student s2 = {1, "parth"};
    printf(" s2.id= %d s2.name=%s\n", s2.id, s2.name);

    return 0;
}