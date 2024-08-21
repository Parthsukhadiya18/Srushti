#include<stdio.h>
int main(){
    int num1,num2;

    printf("enter number value\n");
    scanf("%d %d",&num1,&num2);
    printf("num1=%d num2=%d\n",num1,num2);
    int sum =num1+num2;
    printf("sumof two variable is %d",sum);
    return 0;
}