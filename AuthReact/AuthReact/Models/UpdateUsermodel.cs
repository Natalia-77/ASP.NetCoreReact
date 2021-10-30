using CarShop.Domain;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthReact.Models
{
    public class UpdateUsermodel
    {
        public string Email { get; set; }
        public IFormFile Photo { get; set; }
        public string Name { get; set; }
    }

    public class UserUpdateValidator : AbstractValidator<UpdateUsermodel>
    {
        private readonly AppEFContext _appEFContext;

        public UserUpdateValidator(AppEFContext appEFContext)
        {
            _appEFContext = appEFContext;

            RuleFor(x => x.Email)
               .NotEmpty().WithMessage(" Поле не може бути пустим!")
               .EmailAddress().WithMessage(" Пароль має містити '@'")
               .DependentRules(() =>
               {
                   RuleFor(x => x.Email)
                   .Must(ValidEmail).WithName("Email").WithMessage("Ви не можете вказати таку пошту!");
               });

        }

        private bool ValidEmail(string email)
        {
            var user = _appEFContext.Users.FirstOrDefault(x => x.Email == email);
            if (user == null)
            {
                return true;
            }
            if(user.Email==email)
            {
                return true;
            }
            return false;
        }
    }
}
