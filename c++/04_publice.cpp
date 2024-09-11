#include <iostream>
using namespace std;

class Emp
{
public:
    int id;
    private:
    int salary;
};
int main()
{
    Emp e1;
    e1.id = 10;
    cout << e1.id;
    e1.salary=1000000;
    return 0;
}