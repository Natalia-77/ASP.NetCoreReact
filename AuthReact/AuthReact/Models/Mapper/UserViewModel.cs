﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Models
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Photo { get; set; }

       // public IFormFile Photo { get; set; }
        public string Name { get; set; }
      


    }
}
