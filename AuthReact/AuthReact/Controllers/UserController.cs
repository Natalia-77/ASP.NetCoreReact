using AuthReact.Models;
using AutoMapper;
using CarShop.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
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
        private IHostEnvironment _host;

        public UserController(AppEFContext context, IMapper mapper, IHostEnvironment host)
        {
            _context = context;
            _mapper = mapper;
            _host = host;
        }

        [HttpGet]

        public async Task<IActionResult>GetUsersList()
        {

            var userlist = await _context.Users.Select(res => _mapper.Map<UserViewModel>(res)).ToListAsync();

            return Ok (userlist);
        }

        [HttpPut]
        [Route ("{id}")]
        public async Task<IActionResult> UpdateUser([FromForm] UpdateUsermodel usermodel, int id)
        {
            var res = _context.Users.FirstOrDefault(x => x.Id == id);

            if (usermodel == null)
            {
                return BadRequest(new { message = "No model data" });
            }

            res.Email = usermodel.Email;
            res.UserName = usermodel.Name;

            string fileName = string.Empty;

            if (usermodel.Photo != null)
            {
                var ext = Path.GetExtension(usermodel.Photo.FileName);
                fileName = Path.GetRandomFileName() + ext;
                var dir = Path.Combine(Directory.GetCurrentDirectory(), "images");

                var filePath = Path.Combine(dir, fileName);

                using (var stream = System.IO.File.Create(filePath))
                {
                    await usermodel.Photo.CopyToAsync(stream);
                }
                var oldImage = res.ImageProfile;
                string fol = "\\images\\";
                string contentRootPath = _host.ContentRootPath + fol + oldImage;

                if (System.IO.File.Exists(contentRootPath))
                {
                    System.IO.File.Delete(contentRootPath);
                }
                res.ImageProfile = fileName;
            }
            _context.SaveChanges();

            return Ok(new { message = "User updated" });

        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var res = _context.Users.FirstOrDefault(x => x.Id == id);
            if (res == null)
            {
                return BadRequest(new { message = "Check id!" });
            }

           _context.Users.Remove(res);
            _context.SaveChanges();
            return  Ok(new { message = "User deleted" });
        }
    }


}
