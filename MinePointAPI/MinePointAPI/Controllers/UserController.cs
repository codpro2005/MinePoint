using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Models;
using MinePointAPI.Services;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Controllers
{
	public class UserController : ControllerBase
	{
		private readonly IUserService UserService;

		public UserController(IUserService userService)
		{
			this.UserService = userService;
		}

		[HttpGet]
		public List<User> GetUsers()
		{
			return this.UserService.GetUsers();
		}

		[HttpGet]
		public User GetUser(Guid id)
		{
			return this.UserService.GetUser(id);
		}

		[HttpGet]
		public bool GetTokenValid(Guid id)
		{
			return this.UserService.GetTokenValid(id);
		}

		[HttpPost]
		public User PostUser([FromBody]User user)
		{
			return this.UserService.PostUser(user);
		}

		[HttpPost]
		public Token<User> PostUserLogin([FromBody]User user)
		{
			return this.UserService.PostUserLogin(user);
		}

		[HttpPost]
		public Token<User> PostUserAndLogin([FromBody]User user)
		{
			return this.UserService.PostUserAndLogin(user);
		}

		[HttpPut]
		public User PutUserPassword(Guid id, string newPassword)
		{
			return this.UserService.PutUserPassword(id, newPassword);
		}

		[HttpPut]
		public Token<User> PutUserPasswordAndLogin(Guid id, string newPassword)
		{
			return this.UserService.PutUserPasswordAndLogin(id, newPassword);
		}

		[HttpDelete]
		public User DeleteUser(Guid id)
		{
			return this.UserService.DeleteUser(id);
		}
	}
}
