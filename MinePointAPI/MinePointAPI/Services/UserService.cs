using MinePointAPI.Helpers;
using MinePointAPI.Models;
using MinePointAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Services
{
	public interface IUserService
	{
		User GetUser(Guid id);
		bool GetTokenValid(Guid id);
		User PostOrPutUser(User user);
		User PostUser(User user);
		Token<User> PostUserLogin(User user);
		Token<User> PostUserAndLogin(User user);
		User PutUserPassword(Guid id, string newPassword);
		Token<User> PutUserPasswordAndLogin(Guid id, string newPassword);
	}
	public class UserService : IUserService
	{
		private static readonly Exception UserIdNull = new Exception("User id is null");
		private readonly IUserRepository UserRepository;
		private readonly IResetPassword ResetPassword;

		public UserService(IUserRepository userRepository, IResetPassword resetPassword)
		{
			this.UserRepository = userRepository;
			this.ResetPassword = resetPassword;
		}

		public User GetUser(Guid id)
		{
			return this.UserRepository.GetUser(id);
		}

		public bool GetTokenValid(Guid id)
		{
			return Session.IdValid(id);
		}

		public User PostOrPutUser(User user)
		{
			if (user.Id == null)
			{
				throw UserService.UserIdNull;
			}

			return this.UserRepository.GetUser((Guid)user.Id) == null ? this.UserRepository.PostUser(user) : this.UserRepository.PutUser(user);
		}

		public User PostUser(User user)
		{
			user.ThrowOnInvalid();
			var result = this.UserRepository.PostUser(user);
			result.HidePassword();
			return result;
		}

		public Token<User> PostUserLogin(User user)
		{
			user.ThrowOnInvalid();
			var result = this.UserRepository.PostUserLogin(user);
			result?.Value.HidePassword();
			return result;
		}

		public Token<User> PostUserAndLogin(User user)
		{
			user.ThrowOnInvalid();
			var result = this.UserRepository.PostUserLogin(this.UserRepository.PostUser(user));
			result?.Value.HidePassword();
			return result;
		}

		public User PutUserPassword(Guid id, string newPassword)
		{
			var user = this.GetUser(this.ResetPassword.GetUserIdFromRoute(id));
			user.Password = newPassword;
			user.ThrowOnInvalidPassword();
			var result = this.UserRepository.PutUser(user);
			result.HidePassword();
			return result;
		}

		public Token<User> PutUserPasswordAndLogin(Guid id, string newPassword)
		{
			var user = this.GetUser(this.ResetPassword.GetUserIdFromRoute(id));
			user.Password = newPassword;
			user.ThrowOnInvalidPassword();
			var result = this.UserRepository.PostUserLogin(this.UserRepository.PutUser(user));
			result?.Value.HidePassword();
			return result;
		}
	}
}
