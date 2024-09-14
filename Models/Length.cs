namespace UnitConverter.Models;

public static class Length
{
    public static double Convert(double value, Unit from, Unit to)
    {
        switch (from, to)
        {
            default:
                return value;
            // Millimeter Conversions
            case (Unit.Millimeter, Unit.Centimeter):
                return value / 10;
            case (Unit.Millimeter, Unit.Meter):
                return value / 1_000;
            case (Unit.Millimeter, Unit.Kilometer):
                return value / 1_000_000;
            // Centimeter Conversions
            case (Unit.Centimeter, Unit.Millimeter):
                return value * 10;
            case (Unit.Centimeter, Unit.Meter):
                return value / 100;
            case (Unit.Centimeter, Unit.Kilometer):
                return value / 100_000;
            // Meter Conversions
            case (Unit.Meter, Unit.Millimeter):
                return value * 1_000;
            case (Unit.Meter, Unit.Centimeter):
                return value * 100;
            case (Unit.Meter, Unit.Kilometer):
                return value / 1_000;
            // Kilometer Conversions
            case (Unit.Kilometer, Unit.Millimeter):
                return value * 1_000_000;
            case (Unit.Kilometer, Unit.Centimeter):
                return value * 100_000;
            case (Unit.Kilometer, Unit.Meter):
                return value * 1_000;
        }
    }
}