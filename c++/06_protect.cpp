#include<iostream>
using namespace std;
class Emp{
    protected:
    int salary;
};
class DetailsEmp:public Emp{

    public:
    void setSalary(int s){
        salary = s;
    }

    int getSalary(){
        return salary;
    }
};
int main(){

    DetailsEmp D1;
    D1.setSalary(40000);
    cout<<"salary"<<D1.getSalary();

    return 0;
}