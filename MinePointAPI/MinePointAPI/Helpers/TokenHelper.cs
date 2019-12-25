using MinePointAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Helpers
{
	public static class TokenHelper
	{
		private static List<Token> Tokens { get; } = new List<Token>();
		private static long ExpirationTimeInTicks => 6048000000000;

		public static Token Update(Guid userID)
		{
			var token = Tokens.Find(token => token.UserID == userID);
			if (token == null)
			{
				token = new Token
				{
					UserID = userID
				};
				Tokens.Add(token);
			}
			token.Value = Guid.NewGuid();
			token.LatestValidDate = DateTime.Now;
			return token;
		}

		public static bool IsValid(Token token)
		{
			var foundToken = Tokens.Find(currentToken => currentToken.UserID == token.UserID && currentToken.Value == token.Value);
			return foundToken != null && (DateTime.Now - foundToken.LatestValidDate).Ticks <= ExpirationTimeInTicks;
		}
	}
}
