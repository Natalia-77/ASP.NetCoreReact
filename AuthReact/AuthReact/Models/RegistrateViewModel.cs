
using FluentValidation;
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
            RuleFor(x => x.Email).NotNull().NotEmpty().WithMessage("Поле не може бути пустим");
            RuleFor(x => x.Name).NotNull().NotEmpty().WithMessage("Поле не може бути пустим");
            RuleFor(x => x.Password).NotNull().NotEmpty().WithMessage("Поле не може бути пустим");
            RuleFor(x => x.Password).Length(5, 100).WithMessage("Пароль не може бути менше 5 символів");
            RuleFor(x => x.ConfirmPassword).NotNull().NotEmpty().WithMessage("Поле не може бути пустим");
            RuleFor(x => x.ConfirmPassword).Equal(x => x.Password).WithMessage("Пароль і підтверджений пароль не співпадають");



        }

       


    }
}
