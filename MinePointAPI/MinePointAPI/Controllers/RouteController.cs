using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Services;

namespace MinePointAPI.Controllers
{
	public class RouteController : ControllerBase
	{
		private readonly IRouteService RouteService;

		public RouteController(IRouteService routeService)
		{
			this.RouteService = routeService;
		}

		[HttpGet]
		public bool GetResetPasswordIdValid(Guid id)
		{
			return this.RouteService.GetResetPasswordIdValid(id);
		}
	}
}
