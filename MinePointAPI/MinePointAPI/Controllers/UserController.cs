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
		private readonly IUserService _userService;
		public UserController(IUserService userService)
		{
			this._userService = userService;
		}

		[HttpPost]
		public User PostUser([FromBody]User user)
		{
			return this._userService.PostUser(user);
		}

		[HttpGet]
		public User GetUser()
		{
			return this._userService.GetUser();
		}
	}
}
