using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers.Event
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly ILogger<EventController> _logger;

        public EventController(ILogger<EventController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Models.Event> Get()
        {
            var mock = new List<Models.Event>()
            {
                new Models.Event()
                {
                    Id = "1",
                    Name="Nunta Mada si Cosmin",
                    Date = DateTime.Now,
                    Location ="Iasi",
                    Type = "wedding"

                }
            };
            return mock;
        }
    }
}
