using AuthReact.Models;
using AutoMapper;
using CarShop.Domain;
using CarShop.Domain.Entities;
using CarShop.Domain.Entities.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace AuthReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CartController : ControllerBase
    {
        private readonly AppEFContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public CartController(AppEFContext context,
           IMapper mapper, UserManager<AppUser> userManager)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody] CartAddViewModel model)
        {
            try
            {
                string userName = User.FindFirst("name")?.Value;
                var user = await _userManager.FindByEmailAsync(userName);
                var cart = _context.Cart
                    .SingleOrDefault(x => x.UserId == user.Id && x.ProductId == model.Id);
                if (cart == null)
                {
                    cart = _mapper.Map<Cart>(model);
                    cart.UserId = user.Id;
                    _context.Cart.Add(cart);
                    await _context.SaveChangesAsync();
                }
                else
                {
                    cart.Quantity += model.Quantity;
                      _context.SaveChanges();
                }

                var result = _context.Cart
                    .Include(x => x.Product)
                    .Where(x => x.Id == cart.Id)
                    .Select(x => _mapper.Map<CartItemViewModel>(x))
                    .First();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }


        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> List()
        {
            try
            {
                Thread.Sleep(2000);
                string userName = User.FindFirst("name")?.Value;
                var user = await _userManager.FindByNameAsync(userName);
                var model = await _context.Cart
                    .Where(x => x.UserId == user.Id)
                    .Include(x => x.Product)
                    .Select(x => _mapper.Map<CartItemViewModel>(x)).ToListAsync();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }
    }
}
