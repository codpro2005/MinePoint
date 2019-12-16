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
		User PostUser(User user);
		User GetUser();
	}
	public class UserService : IUserService
	{
		private readonly IUserRepository _userRepository;
		public UserService(IUserRepository userRepository)
		{
			this._userRepository = userRepository;
		}

		public User PostUser(User user)
		{
			return this._userRepository.PostUser(user);
		}

		public User GetUser()
		{
			return this._userRepository.GetUser();
		}
	}
}
