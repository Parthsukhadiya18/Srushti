#include <iostream>
using namespace std;
class Parent
{

public:
    void car()
    {
        cout << "this is a car\n ";
    }
};

class Child : public Parent
{
public:
    void bike()
    {
        cout << "this is my bike!\n";
    }
};
int main()
{
    Child c1;
    c1.car();
    c1.bike();
    return 0;
}