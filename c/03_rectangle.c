#include <stdio.h>
int main()
{
    // rectangle area  a= l*w;

    int length, width, Area;

    printf("enter Length and Width\n");
    scanf("%d %d", &length, &width);
    printf("length=%d width=%d\n", length, width);
    Area = length * width;
    printf("reactangle area is %d", Area);
    return 0;
}