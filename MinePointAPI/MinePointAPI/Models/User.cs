﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class User
	{
		public Guid ID { get; set; }
		public string Mail { get; set; }
		public string Password { get; set; }
	}
}
