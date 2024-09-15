namespace UnitConverter.Models;

public static class Temperature
{
    public static double Convert(double value, Unit from, Unit to)
    {
        switch (from, to)
        {
            default:
                return value;
            case (Unit.Celsius, Unit.Fahrenheit):
                return (value * 9.0 / 5.0) + 32;
            case (Unit.Fahrenheit, Unit.Celsius):
                return (value - 32) * 5.0 / 9.0;
            
        }
    } 
}