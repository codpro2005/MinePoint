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
		public string GetOnetimePaymentLink()
		{
			return this.PaymentwallService.GetOnetimePaymentLink();
		}

		[HttpGet]
		public string GetSubscriptionLink()
		{
			return this.PaymentwallService.GetSubscriptionLink();
		}

		[HttpGet]
		public string GetPingback()
		{
			return this.PaymentwallService.GetPingback();
		}
	}
}
