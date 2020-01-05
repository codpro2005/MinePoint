using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Services;
using Paymentwall;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Controllers
{
	//[ApiController]
	public class PaymentwallController : ControllerBase
	{
		private readonly IPaymentwallService PaymentwallService;
		public PaymentwallController(IPaymentwallService paymentwallService)
		{
			this.PaymentwallService = paymentwallService;
		}

		[HttpGet]
		public string GetOnetimePaymentLink(Guid userId, string productId, float amount, string currencyCode, string name)
		{
			return this.PaymentwallService.GetOnetimePaymentLink(userId, productId, amount, currencyCode, name);
		}

		[HttpGet]
		public string GetSubscriptionLink()
		{
			return this.PaymentwallService.GetSubscriptionLink();
		}

		[HttpGet]
		public string GetPingback(string uid, int type, string reference, int sign_version, string sig, int is_test, string goodsid, int? slength, string? speriod)
		{
			return this.PaymentwallService.GetPingback();
		}
	}
}
