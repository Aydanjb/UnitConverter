namespace UnitConverter.Models;

public static class Weight
{
    public static double Convert(double value, Unit from, Unit to)
    {
        switch (from, to)
        {
            default:
                return value;
            case (Unit.Grams, Unit.Kilograms):
                return value / 1_000;
            case (Unit.Kilograms, Unit.Grams):
                return value * 1_000;
            
        }
    } 
}