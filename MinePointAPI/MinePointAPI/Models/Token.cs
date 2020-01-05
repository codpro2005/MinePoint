using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class Token<T>
	{
		public Session Session { get; set; }
		public T Value { get; set; }

		public Token()
		{

		}

		public Token(Session session)
		{
			this.Session = session;
		}

		public Token(Session session, T value)
		{
			this.Session = session;
			this.Value = value;
		}
	}
}
