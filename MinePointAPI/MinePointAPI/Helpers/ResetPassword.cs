using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Helpers
{
	public interface IResetPassword
	{
		string Route { get; }
		void AddRouteId(Guid routeId, Guid userId);
		bool RouteIdValid(Guid routeId);
		Guid GetUserIdFromRoute(Guid routeId);
	}

	internal class Route
	{
		public Guid Value { get; set; }
		public Guid UserId { get; set; }

		public Route()
		{

		}

		public Route(Guid value, Guid userId)
		{
			this.Value = value;
			this.UserId = userId;
		}
	}

	public class ResetPassword : IResetPassword
	{
		public string Route { get; }
		private static List<Route> RouteIds { get; }

		static ResetPassword()
		{
			ResetPassword.RouteIds = new List<Route>();
		}

		public ResetPassword()
		{
			this.Route = "https://www.minepoint.ch/reset-password/";
		}

		public void AddRouteId(Guid routeId, Guid userId)
		{
			ResetPassword.RouteIds.Add(new Route(routeId, userId));
		}

		public bool RouteIdValid(Guid routeId)
		{
			return ResetPassword.RouteIds.Any(route => route.Value == routeId);
		}

		public Guid GetUserIdFromRoute(Guid routeId)
		{
			return ResetPassword.RouteIds.Find(route => route.Value == routeId).UserId;
		}
	}
}
