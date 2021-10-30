using AutoMapper;
using CarShop.Domain.Entities.Identity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AuthReact.Models.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {



            CreateMap<AppUser, UserViewModel>().
                ForMember(dest => dest.Photo, opt => opt.MapFrom(dest => "images/" + dest.ImageProfile))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(dest => dest.UserName));
                //.ForMember(dest => dest.Password, opt => opt.MapFrom(dest => Decode(dest.PasswordHash, 
                //Encoding.ASCII.GetBytes(dest.PasswordHash),iv)));
        }

      
          
    }
}

    

