using AuthReact.Models;
using AutoMapper;
using CarShop.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppEFContext _context;
        private readonly IMapper _mapper;

        public UserController(AppEFContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]

        public async Task<IActionResult>GetUsersList()
        {

            var userlist = await _context.Users.Select(res => _mapper.Map<UserViewModel>(res)).ToListAsync();

            return Ok (userlist);
        }
    }
}
