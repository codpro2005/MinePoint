﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class Mail
	{
		public string Recipient { get; set; }
		public string Subject { get; set; }
		public string Body { get; set; }
	}
}
