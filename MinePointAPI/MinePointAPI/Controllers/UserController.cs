using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Models;
using MinePointAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Controllers
{
	//[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IUserService UserService;
		public UserController(IUserService userService)
		{
			this.UserService = userService;
		}

		[HttpGet]
		public bool GetTokenValid(Guid id, Guid userID)
		{
			var token = new Token
			{
				UserID = userID,
				Value = id
			};
			return this.UserService.GetTokenValid(token);
		}

		[HttpPost]
		public User PostUser([FromBody]User user)
		{
			return this.UserService.PostUser(user);
		}

		[HttpPost]
		public Token PostUserLogin([FromBody]User user)
		{
			return this.UserService.PostUserLogin(user);
		}
	}
}
