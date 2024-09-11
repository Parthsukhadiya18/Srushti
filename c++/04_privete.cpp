#include <iostream>
using namespace std;
class Emp
{
    // inside 
private:
    int salary;

public:
// encapsutation  data hide 
    void setSalary(int s)
    {
        salary = s;
    }

    int getSalary()
    {
        return salary;
    }
};
int main()
{
    // outside 
    Emp e1;
    // erreo e1.salary=10000;
    e1.setSalary(25000);
    cout << "salary is "<<e1.getSalary();

    return 0;
}