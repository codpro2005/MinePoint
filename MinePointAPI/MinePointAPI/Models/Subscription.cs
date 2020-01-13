using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class Subscription
	{
		public Guid? Id { get; set; }
		public DateTime? Expiration { get; set; }
		public int Ram { get; set; }

		public Subscription()
		{

		}

		public Subscription(Guid? id)
		{
			this.Id = id;
		}

		public Subscription(Guid? id, DateTime? expiraiton, int ram)
		{
			this.Id = id;
			this.Expiration = expiraiton;
			this.Ram = ram;
		}
	}
}
