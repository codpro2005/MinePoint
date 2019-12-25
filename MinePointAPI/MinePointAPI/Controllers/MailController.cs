using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Models;
using MinePointAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Controllers
{
	public class MailController : ControllerBase
	{
		private readonly IMailService MailService;

		public MailController(IMailService mailService)
		{
			this.MailService = mailService;
		}

		[HttpPost]
		public bool PostMail([FromBody]Mail mail)
		{
			return this.MailService.PostMail(mail);
		}
	}
}
