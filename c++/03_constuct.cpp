#include <iostream>
using namespace std;

class Trueline
{
public:
    Trueline()
    {
        cout << "Welcome to trueline!\n";
    }
    ~Trueline()
    {
        cout << "welcome back to trueline!";
    }
};

class Cal
{
public:
    // int x, y;
    int a, b;
    Cal(int a, int b)
    {
        // x = a;
        // y = b;
        this->a = a;
        this->b = b;
    }

    int sum()
    {
        return a + b;
        // return x + y;
    }
    int sub()
    {
        // return x - y;
        return a - b;
    }
};

int main()
{
    Trueline t1;

    Cal c1(10, 20);
    cout << "sub =" << c1.sub() << "\n";
    // cout << "sub =" << c1.sub();
    Cal c2(10, 60);
    cout << "sum =" << c2.sum() << "\n";
    Cal c3(10, 20);
    cout << "sub =" << c3.sub() << "\n";
    Cal c4(10, 10);
    cout << "sum =" << c4.sum() << "\n";
    return 0;
}