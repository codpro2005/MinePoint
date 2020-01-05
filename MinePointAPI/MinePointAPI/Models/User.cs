using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class User
	{
		private static readonly Exception InvalidUser = new Exception("Invalid User");
		private static readonly Exception InvalidUserMail = new Exception("Invalid User Mail");
		private static readonly Exception InvalidUserPassword = new Exception("Invalid User Password");
		public Guid? Id { get; set; }
		public string Mail { get; set; }
		public string Password { get; set; }
		public DateTime? SubscriptionExpiration { get; set; }
		public int Ram { get; set; }
		public bool SetUp { get; set; }

		public bool ValidMail =>
			User.Validate(
				new Regex(
					@"^(([^<>()\[\]\\.,;:\s@""]+(\.[^<>()\[\]\\.,;:\s@""]+)*)|("".+""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"),
				this.Mail);

		public bool ValidPassword => User.Validate(new Regex(@"^(?=.*[A-Z])(?=.*[0-9]).{6,}$"), this.Password);
		public bool Valid => ValidMail && ValidPassword;

		public User()
		{

		}

		public User(Guid id)
		{
			this.Id = id;
		}

		public User(Guid id, string mail)
		{
			this.Id = id;
			this.Mail = mail;
		}

		public User(Guid id, string mail, string password)
		{
			this.Id = id;
			this.Mail = mail;
			this.Password = password;
		}

		public User(Guid id, string mail, string password, DateTime? subscriptionExpiration, int ram, bool setUp)
		{
			this.Id = id;
			this.Mail = mail;
			this.Password = password;
			this.SubscriptionExpiration = subscriptionExpiration;
			this.Ram = ram;
			this.SetUp = setUp;
		}

		public void ThrowOnInvalidMail()
		{
			if (!this.ValidMail)
			{
				throw User.InvalidUserMail;
			}
		}

		public void ThrowOnInvalidPassword()
		{
			if (!this.ValidPassword)
			{
				throw User.InvalidUserPassword;
			}
		}

		public void ThrowOnInvalid()
		{
			if (!this.Valid)
			{
				throw User.InvalidUser;
			}
		}

		private static bool Validate(Regex regex, string value)
		{
			return value != null && regex.Match(value).Success;
		}

		public void HidePassword()
		{
			this.Password = null;
		}
	}
}
