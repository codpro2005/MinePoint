using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Models;
using MinePointAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MinePointAPI.Models.Enums;

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

		[HttpPost]
		public bool PostContactMail([FromBody]Mail mail)
		{
			return this.MailService.PostContactMail(mail);
		}

		[HttpPost]
		public bool PostPasswordForgottenMail(string recipient, Language language)
		{
			return this.MailService.PostPasswordForgottenMail(recipient, language);
		}
	}
}
