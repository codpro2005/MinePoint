using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Models
{
	public class Session
	{
		private static List<Session> AllUpdated { get; } = new List<Session>();
		private static int ExpirationTimeInDays => 7;
		public Guid Id { get; set; }
		public DateTime ExpirationDate { get; set; }
		public bool NotExpired => DateTime.Now <= this.ExpirationDate;
		public bool InAll => Session.AllUpdated.Contains(this);
		public bool Valid => this.InAll && this.NotExpired;

		public Session()
		{

		}

		public Session(Guid id)
		{
			this.Id = id;
		}

		public Session(Guid id, DateTime expirationDate)
		{
			this.Id = id;
			this.ExpirationDate = expirationDate;
		}

		public Session(bool update)
		{
			if (update)
			{
				this.Update();
			}
		}

		public void Update()
		{
			if (!this.InAll)
			{
				Session.AllUpdated.Add(this);
			}
			this.Id = Guid.NewGuid();
			this.ExpirationDate = DateTime.Now.AddDays(Session.ExpirationTimeInDays);
		}

		public static Session Get(Guid id)
		{
			return Session.AllUpdated.Find(session => session.Id == id);
		}

		public static bool IdInAll(Guid id)
		{
			return Session.AllUpdated.Any(session => session.Id == id);
		}

		public static bool IdValid(Guid id)
		{
			var session = Session.Get(id);
			return session != null && session.NotExpired;
		}
	}
}
