using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;

namespace UnitConverter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UnitConverterController : Controller
{
    [HttpPost]
    public int Test()
    {
        return 2;
    }
}