using Microsoft.AspNetCore.Mvc;

namespace UnitConverter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UnitConverterController : Controller
{
    [HttpPost]
    public int Test([FromForm] FormData data)
    {
        return data.Length;
    }
}

public class FormData
{
    public int Length { get; set; }
    public string From { get; set; }
    public string To { get; set; }
}