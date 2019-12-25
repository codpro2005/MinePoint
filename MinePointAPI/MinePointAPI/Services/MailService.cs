using MinePointAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace MinePointAPI.Services
{
	public interface IMailService
	{
		bool PostMail(Mail mail);
	}
	public class MailService : IMailService
	{
		private SmtpClient SmtpClient { get; set; }
		private string _sender = "danilo.furrer@outlook.com";
		private string _password = "Deadpoolisthebest13-";
		public MailService()
		{
			this.SmtpClient = new SmtpClient("smtp-mail.outlook.com");
			this.SmtpClient.Port = 587;
			this.SmtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
			this.SmtpClient.UseDefaultCredentials = false;
			this.SmtpClient.EnableSsl = true;
			this.SmtpClient.Credentials = new NetworkCredential(this._sender, this._password);
		}

		public bool PostMail(Mail mail)
		{
			try
			{
				var message = new MailMessage(this._sender, mail.Recipient);
				message.Subject = mail.Subject;
				message.Body = mail.Body;

				this.SmtpClient.Send(message);
				return true;
			}
			catch (Exception ex)
			{
				return false;
			}
		}
	}
}
