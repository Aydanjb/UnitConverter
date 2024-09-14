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
        return Length.Convert(data.Value, data.From, data.To);
    }
}