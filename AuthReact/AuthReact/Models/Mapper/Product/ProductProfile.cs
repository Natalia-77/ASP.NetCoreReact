
using AutoMapper;
using CarShop.Domain.Entities;

namespace AuthReact.Models.Mapper.Product
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Products, ProductViewModel>().
              ForMember(dest => dest.Image, opt => opt.MapFrom(dest => "images/" + dest.ImageProduct))
              .ForMember(dest => dest.Name, opt => opt.MapFrom(dest => dest.Name))
              .ForMember(dest => dest.Price, opt => opt.MapFrom(dest => dest.Price));

        }

    }
}
