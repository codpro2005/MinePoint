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
		List<User> GetUsers();
		User GetUser(Guid id);
		bool GetTokenValid(Guid id);
		User PostOrPutUser(User user);
		User PostUser(User user);
		Token<User> PostUserLogin(User user);
		Token<User> PostUserAndLogin(User user);
		User PutUserPassword(Guid id, string newPassword);
		Token<User> PutUserPasswordAndLogin(Guid id, string newPassword);
		User DeleteUser(Guid id);
		User PutUserPayments(Guid id, int ram, bool setUp);
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

		public List<User> GetUsers()
		{
			var users = this.UserRepository.GetUsers();
			users.ForEach(user => user.HidePassword());
			return users;
		}

		public User GetUser(Guid id)
		{
			var user = this.UserRepository.GetUser(id);
			user.HidePassword();
			return user;
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
			var userId = this.UserRepository.GetUserIdByMail(user.Mail);
			if (userId == null)
			{
				return null;
			}
			var foundUser = this.UserRepository.GetUser((Guid)userId);
			foundUser.Password = user.Password;
			var result = this.UserRepository.PostUserLogin((Guid)foundUser.Id, foundUser.Password);
			result?.Value.HidePassword();
			return result;
		}

		public Token<User> PostUserAndLogin(User user)
		{
			user.ThrowOnInvalid();
			var createdUser = this.UserRepository.PostUser(user);
			var result = this.UserRepository.PostUserLogin((Guid)createdUser.Id, createdUser.Password);
			result?.Value.HidePassword();
			return result;
		}

		public User PutUserPassword(Guid id, string newPassword)
		{
			var userId = this.ResetPassword.GetUserIdFromRoute(id);
			if (userId == null)
			{
				return null;
			}
			var user = this.UserRepository.GetUser((Guid)userId);
			user.Password = newPassword;
			user.ThrowOnInvalidPassword();
			var updatedUser = this.UserRepository.PutUser(user);
			updatedUser.HidePassword();
			return updatedUser;
		}

		public Token<User> PutUserPasswordAndLogin(Guid id, string newPassword)
		{
			var userId = this.ResetPassword.GetUserIdFromRoute(id);
			if (userId == null)
			{
				return null;
			}
			var user = this.UserRepository.GetUser((Guid)userId);
			user.Password = newPassword;
			user.ThrowOnInvalidPassword();
			var updatedUser = this.UserRepository.PutUser(user);
			var result = this.UserRepository.PostUserLogin((Guid)updatedUser.Id, updatedUser.Password);
			result?.Value.HidePassword();
			return result;
		}

		public User DeleteUser(Guid id)
		{
			var user = this.UserRepository.DeleteUser(id);
			user.HidePassword();
			return user;
		}

		public User PutUserPayments(Guid id, int ram, bool setUp)
		{
			var currentUser = this.UserRepository.GetUser(id);
			if (currentUser == null)
			{
				return null;
			}
			var latestSubscriptionExpiration = currentUser.Subscriptions.Max(subscription => subscription.Expiration);
			var now = DateTime.Now;
			currentUser.Subscriptions.Add(new Subscription(Guid.NewGuid(), latestSubscriptionExpiration == null || latestSubscriptionExpiration.Value < now ? now.AddMonths(1) : latestSubscriptionExpiration.Value.AddMonths(1), ram));
			currentUser.SetUp = currentUser.SetUp || setUp;
			var updatedUser = this.UserRepository.PutUser(currentUser);
			updatedUser.HidePassword();
			return updatedUser;
		}
	}
}
