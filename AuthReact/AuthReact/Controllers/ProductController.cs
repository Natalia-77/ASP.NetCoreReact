using AuthReact.Models.Mapper.Product;
using AutoMapper;
using CarShop.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppEFContext _context;
        private readonly IMapper _mapper;

        public ProductController(AppEFContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


        public async Task<IActionResult> GetProductsList()
        {

            var prodlist = await _context.Products.Select(res => _mapper.Map<ProductViewModel>(res)).ToListAsync();

            return Ok(prodlist);
        }
    }
}
