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
		private readonly IPaymentwallService _paymentwallService;
		public PaymentwallController(IPaymentwallService paymentwallService)
		{
			this._paymentwallService = paymentwallService;
		}

		[HttpGet]
		public string GetOnetimePaymentLink()
		{
			return this._paymentwallService.GetOnetimePaymentLink();
		}

		[HttpGet]
		public string GetSubscriptionLink()
		{
			return this._paymentwallService.GetSubscriptionLink();
		}

		[HttpGet]
		public string GetPingback()
		{
			return this._paymentwallService.GetPingback();
		}
	}
}
