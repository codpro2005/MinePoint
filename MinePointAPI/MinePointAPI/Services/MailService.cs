using MinePointAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinePointAPI.Helpers;
using MinePointAPI.Models.Enums;
using MinePointAPI.Repositories;

namespace MinePointAPI.Services
{
	public interface IMailService
	{
		bool PostMail(Mail mail);
		bool PostContactMail(Mail mail);
		bool PostPasswordForgottenMail(string recipient, Language language);
	}
	public class MailService : IMailService
	{
		private readonly IResetPassword ResetPassword;
		private readonly IUserRepository UserRepository;
		private SmtpClient SmtpClient { get; set; }
		private const string Sender = "danilo.furrer@outlook.com";
		private const string Password = @"Wolverine13-";

		public MailService(IResetPassword resetPassword, IUserRepository userRepository)
		{
			this.ResetPassword = resetPassword;
			this.UserRepository = userRepository;

			this.SmtpClient = new SmtpClient("smtp-mail.outlook.com")
			{
				Port = 587,
				DeliveryMethod = SmtpDeliveryMethod.Network,
				UseDefaultCredentials = false,
				EnableSsl = true,
				Credentials = new NetworkCredential(Sender, Password)
			};
		}

		public bool PostMail(Mail mail)
		{
			try
			{
				var message = new MailMessage(MailService.Sender, mail.Recipient) {Subject = mail.Subject, Body = mail.Body};
				this.SmtpClient.Send(message);
				return true;
			}
			catch (Exception ex)
			{
				return false;
			}
		}

		public bool PostContactMail(Mail mail)
		{
			return this.PostMail(new Mail(
				MailService.Sender,
				mail.Subject,
				$"{mail.Body}\nSender:{mail.Recipient}"
				));
		}

		public bool PostPasswordForgottenMail(string recipient, Language language)
		{
			var routeId = Guid.NewGuid();
			var userId = this.UserRepository.GetUserIdByMail(recipient);
			if (userId == null)
			{
				return false;
			}
			this.ResetPassword.AddRouteId(routeId, (Guid)userId);
			var route = this.ResetPassword.Route;
			var fullRoute = $"{route}{routeId}";
			var mail = language switch
			{
				Language.German => new Mail(recipient, "MinePoint Kennwort vergessen",
					$"Sie haben vor kurzem ein neues Kennwort bei uns angefordert. Um ihr Kennwort zurückzusetzen bitten wir Sie folgenden Link zu benutzen: {fullRoute}"),
				Language.English => new Mail(recipient, "MinePoint password forgotten",
					$"You have recently requested a new password from us. To reset your password please use the following link: {fullRoute}"),
				Language.Chinese => new Mail(recipient, "忘记MinePoint密码", $"您最近向我们请求了一个新密码。要重置密码，请使用以下链接：{fullRoute}"),
				_ => throw new ArgumentOutOfRangeException(nameof(language), language, null)
			};

			return this.PostMail(mail);
		}
	}
}
