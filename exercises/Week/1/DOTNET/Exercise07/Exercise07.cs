int num1 = 0;

Console.WriteLine("Enter a positive numbers!");
Console.Write("Input number:");
num1 = Convert.ToInt32(Console.ReadLine());

if (num1 < 0)
    Console.WriteLine("Not positive number!");
else if (num1 % 2 == 0)
    Console.WriteLine("Even number");
else
    Console.WriteLine("Odd number");


