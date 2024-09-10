#include <iostream>
using namespace std;
class Cal
{
public:
    int sum(int a, int b)
    {
        return a + b;
    }
    int sum2(int a, int b, int c)
    {
        return a + b + c;
    }
};
int main()
{
    Cal c1;
    cout << "sum=" << c1.sum(10, 20) << "\n";
    cout << "sum2=" << c1.sum2(10, 20, 50);

    return 0;
}