using Microsoft.AspNetCore.Mvc;
using UnitConverter.Models;

namespace UnitConverter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UnitConverterController : Controller
{
    [HttpPost]
    public double Test([FromForm] FormData data)
    {
        switch (data.Property)
        {
            default:
                return Length.Convert(data.Value, data.From, data.To);
            case Property.Weight:
                return Weight.Convert(data.Value, data.From, data.To);
            case Property.Temperature:
                return Temperature.Convert(data.Value, data.From, data.To);
        }

    }
}