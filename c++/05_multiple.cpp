#include <iostream>
using namespace std;
class Father
{

public:
    void car()
    {
        cout << "this is a car\n ";
    }
};

class Mother 
{
public:
    void house()
    {
        cout << "this is my house!\n";
    }
};
class Child : public Father,public Mother
{
public:
    void hobbies()
    {
        cout << "my hobbies is watching movies!\n";
    }
};
int main()
{
     Child c1;
     c1.car();
     c1.house();
     c1.hobbies();
    return 0;
}