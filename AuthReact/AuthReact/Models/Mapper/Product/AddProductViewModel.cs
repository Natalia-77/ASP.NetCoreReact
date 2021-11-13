using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Models.Mapper.Product
{
    public class AddProductViewModel
    {       
            public string Name { get; set; }
            public IFormFile Photo { get; set; }
            public int Price { get; set; }
        
    }
}
