using AuthReact.Models.Mapper.Product;
using AutoMapper;
using CarShop.Domain;
using CarShop.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.IO;
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

        [HttpGet]
        public async Task<IActionResult> GetProductsList()
        {
            var prodlist = await _context.Products.Select(res => _mapper.Map<ProductViewModel>(res)).ToListAsync();
            return Ok(prodlist);
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> AddProduct([FromForm] AddProductViewModel model)
        {
            try
            {
                var photo = string.Empty;
                if (model.Photo != null)
                {
                     photo = Path.GetRandomFileName() +
                        Path.GetExtension(model.Photo.FileName);

                    var dirPath = Path.Combine(Directory.GetCurrentDirectory(), "images");
                    var fileName = Path.Combine(dirPath, photo);
                    using (var file = System.IO.File.Create(fileName))
                    {
                        model.Photo.CopyTo(file);
                    }
                }

                var product = new Products
                {
                    Name = model.Name,
                    ImageProduct = photo,
                    Price = model.Price

                };
                _context.Products.Add(product);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }

        }
    }
}
