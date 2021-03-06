using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarShop.Domain.Entities.Identity
{
    public class AppUser:IdentityUser<long>
    {
        public virtual ICollection<AppUserRole> UserRoles { get; set; }
        public virtual ICollection<Cart> CartEntities { get; set; }
        public string ImageProfile { get; set; }
    }
}
