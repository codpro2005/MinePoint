using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Helpers;

namespace MinePointAPI.Services
{
	public interface IRouteService
	{
		bool GetResetPasswordIdValid(Guid id);
	}
	public class RouteService : IRouteService
	{
		private readonly IResetPassword ResetPassword;

		public RouteService(IResetPassword resetPassword)
		{
			this.ResetPassword = resetPassword;
		}

		public bool GetResetPasswordIdValid(Guid id)
		{
			return this.ResetPassword.RouteIdValid(id);
		}
	}
}
