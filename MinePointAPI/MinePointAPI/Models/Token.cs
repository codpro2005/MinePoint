using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class Token
	{
		public Guid UserID { get; set; }
		public Guid Value { get; set; }
		public DateTime LatestValidDate { get; set; }
	}
}
