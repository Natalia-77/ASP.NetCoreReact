using AutoMapper;
using CarShop.Domain.Entities.Identity;

namespace AuthReact.Models.Mapper
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<AppUser, UserViewModel>().
                ForMember(dest => dest.Photo, opt => opt.MapFrom(dest => "images/" + dest.ImageProfile))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(dest => dest.UserName));
        }     
          
    }
}

    

