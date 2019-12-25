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
		bool GetTokenValid(Token token);
		User PostUser(User user);
		Token PostUserLogin(User user);
	}
	public class UserService : IUserService
	{
		private readonly IUserRepository UserRepository;

		public UserService(IUserRepository userRepository)
		{
			this.UserRepository = userRepository;
		}

		public bool GetTokenValid(Token token)
		{
			return TokenHelper.IsValid(token);
		}

		public User PostUser(User user)
		{
			return this.UserRepository.PostUser(user);
		}

		public Token PostUserLogin(User user)
		{
			return this.UserRepository.PostUserLogin(user);
		}
	}
}
