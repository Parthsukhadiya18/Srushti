#include <stdio.h>
int main()
{

    int age ;
    printf("enter you age ");
    scanf("%d",&age);
    printf("age=%d",age);
  if (age>18)
  {
    printf(" you can voter");
  }
  else
  {
        printf(" you can't voter");

  }
  
    // ternaryy operter
    // ()?true:false;

    // int age;

    // printf("enter you age for food!");
    // scanf("%d", &age);
    // printf("age = %d\n", age);
    // (age > 18) ? printf("you can food!") : printf("you can't food");

    // int number;
    // printf("enter you number!");
    // scanf("%d", &number);
    // printf("number = %d\n", number);
    // (number < 0) ? printf("nagetive!") : printf("positive");

    int num;
    printf("enter you number");
    scanf("%d", &num);
    printf("num = %d", num);
    (num % 2 == 0) ? printf("even number") : printf("odd number");

    // word letter  (ch>='A'&& ch<='z')
    // number/special chareter

    return 0;
}