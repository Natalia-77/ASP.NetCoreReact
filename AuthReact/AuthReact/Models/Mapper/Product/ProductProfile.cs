
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

            CreateMap<CartAddViewModel, Cart>();

            CreateMap<Cart, CartItemViewModel>()
               .ForMember(x => x.ProductName, opt => opt.MapFrom(x => x.Product.Name))
               .ForMember(x => x.ProductImage, opt => opt.MapFrom(x => @"\images\" + x.Product.ImageProduct))
               .ForMember(x => x.ProductPrice, opt => opt.MapFrom(x => x.Product.Price));
        }

    }
}
