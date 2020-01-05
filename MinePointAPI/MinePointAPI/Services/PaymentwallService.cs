using Paymentwall;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Services
{
	public interface IPaymentwallService
	{
		string GetOnetimePaymentLink(Guid userId, string productId, float amount, string currencyCode, string name);
		string GetSubscriptionLink();
		string GetPingback();
	}
	public class PaymentwallService : IPaymentwallService
	{
		public PaymentwallService()
		{
			Paymentwall_Base.setApiType(Paymentwall_Base.API_GOODS);
			Paymentwall_Base.setAppKey("2c134bfd8bc5ffec9abb9f0632adf8ea");
			Paymentwall_Base.setSecretKey("4762232d04b9b1c336e5d95c232f31e0");
		}

		public string GetOnetimePaymentLink(Guid userId, string productId, float amount, string currencyCode, string name)
		{
			if (productId == string.Empty)
			{
				throw new Exception("No product specified");
			}
			var productList = new List<Paymentwall_Product>();
			var product = new Paymentwall_Product(
				productId, // ag_external_id
				amount, // amount
				currencyCode, // currencyCode
				name // ag_name
			);
			productList.Add(product);
			var widget = new Paymentwall_Widget(
				userId.ToString(), // uid
				"p1_1", // widget
				productList,
				new Dictionary<string, string>() {
					{ "ps", "all" },
					{ "success_url", "https://www.minepoint.ch" }
				}
			);
			return widget.getUrl();
		}

		public string GetSubscriptionLink()
		{
			var productList = new List<Paymentwall_Product>();
			var product = new Paymentwall_Product(
				"product301", // ag_external_id
				(float)9.99, // amount
				"USD", // currencyCode
				"Gold Membership", // ag_name
				Paymentwall_Product.TYPE_SUBSCRIPTION, // ag_type
				1, // ag_period_length
				Paymentwall_Product.PERIOD_TYPE_YEAR, // ag_period_type
				true // ag_recurring
			);
			productList.Add(product);
			var widget = new Paymentwall_Widget(
				"user40012",
				"p1_1",
				productList,
				new Dictionary<string, string>() {
					{ "email", "user@hostname.com" },
					{ "history[registration_date]", "registered_date_of_user" },
					{ "ps", "all" },
					//{ "additional_param_name", "additional_param_value" }
					{ "success_url", "https://www.minepoint.ch" }
				}
			);
			return widget.getUrl();
		}

		public string GetPingback()
		{
			//NameValueCollection parameters = Request.QueryString;
			//Paymentwall_Pingback pingback = new Paymentwall_Pingback(parameters, HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"]);
			//if (pingback.validate())
			//{
			//	string productId = pingback.getProduct().getId();
			//	if (pingback.isDeliverable())
			//	{
			//		//deliver the product
			//	}
			//	else if (pingback.isCancelable())
			//	{
			//		//withdraw the product
			//	}
			//	return "OK"; // Paymentwall expects response to be OK, otherwise the pingback will be resent
			//}
			//else
			//{
			//	return pingback.getErrorSummary();
			//}
			return "OK";
		}

		private string GetProductFinal(object value, string name)
		{
			return value != null ? $"{name}:{value}" : string.Empty;
		}
	}
}
