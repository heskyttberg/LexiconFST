int num1 = 0;
int num2 = 0;
string msg = "";

Console.WriteLine("Enter two consecutive numbers!");
Console.Write("Input first number:");
num1 = Convert.ToInt32(Console.ReadLine());
Console.Write("Input second number:");
num2 = Convert.ToInt32(Console.ReadLine());

if(num1+1==num2)
    Console.WriteLine("Numbers are consecutive");
else
    Console.WriteLine("Numbers are not consecutive");
