#include <stdio.h>
int main()
{
    const int a = 10;
    printf("%d\n", a);
    // a = 12;
    // printf("%d", a);

    const float pi = 3.14;
    int R = 10;
    float circle_area = pi * R * R;
    printf("%.1f\n", circle_area);
    printf("%.2f\n", circle_area);

    printf("%.3f\n", circle_area);

    printf("%.4f\n", circle_area);

    printf("%f\n", circle_area);

    
    return 0;
}