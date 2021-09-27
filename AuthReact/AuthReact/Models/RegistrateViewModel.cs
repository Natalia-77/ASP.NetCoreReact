
using CarShop.Domain.Entities.Identity;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Models
{
    public class RegistrateViewModel
    {
        
        public string Email { get; set; }
       
        public string Name { get; set; }
       
        public string Password { get; set; }
       
        public string ConfirmPassword { get; set; }
    }

    public class UserValidator : AbstractValidator<RegistrateViewModel>
    {
        


        public UserValidator()    
        {

           
            RuleFor(x => x.Email)
                .NotEmpty().WithMessage(" Поле не може бути пустим!")
                .EmailAddress().WithMessage(" Пароль має містити '@'");  
            
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Поле не може бути пустим ");

            RuleFor(x => x.Password)
                .NotEmpty().WithMessage( "Поле не може бути пустим  ")
                .Length(3, 100).WithMessage(" Пароль не може бути менше 3 символів")
                .Matches(@"\d").WithName("Password").WithMessage(" Пароль повинен містити хоча б одну цифру ");
            
            RuleFor(x => x.ConfirmPassword)
                .NotEmpty().WithMessage(" Поле не може бути пустим   ")
                .Equal(x => x.Password).WithMessage(" Пароль і підтверджений пароль не співпадають");



        }

       





    }
}
