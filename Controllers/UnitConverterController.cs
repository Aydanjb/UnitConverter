using Microsoft.AspNetCore.Mvc;
using UnitConverter.Models;

namespace UnitConverter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UnitConverterController : Controller
{
    [HttpPost]
    public int Test([FromForm] FormData data)
    {
        if (data is { From: Unit.Millimeter, To: Unit.Centimeter })
        {
            return data.Value / 10;
        }
        return data.Value;
    }
}