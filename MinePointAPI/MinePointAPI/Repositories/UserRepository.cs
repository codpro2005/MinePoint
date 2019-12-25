using MinePointAPI.Helpers;
using MinePointAPI.Models;
using MySql.Data.MySqlClient;
using System;

namespace MinePointAPI.Repositories
{
	public interface IUserRepository
	{
		User PostUser(User user);
		Token PostUserLogin(User user);
	}
	public class UserRepository : IUserRepository
	{
		private string myConnectionString = "server=127.0.0.1;uid=root;pwd=MP123;database=minepoint";
		private MySqlConnection connection;

		public UserRepository()
		{
			this.connection = new MySqlConnection(this.myConnectionString);
		}

		public User PostUser(User user)
		{
			user.ID = Guid.NewGuid();
			this.connection.Open();
			var command = new MySqlCommand("INSERT INTO user(ID,mail,password) VALUES(@ID, @mail, @password)", this.connection);
			command.Parameters.AddWithValue("@ID", user.ID);
			command.Parameters.AddWithValue("@mail", user.Mail);
			command.Parameters.AddWithValue("@password", SecurePasswordHasher.Hash(user.Password));
			command.ExecuteNonQuery();
			this.connection.Close();
			user.Password = null;
			return user;
		}

		public Token PostUserLogin(User user)
		{
			this.connection.Open();
			var command = new MySqlCommand($"SELECT * FROM USER WHERE mail = '{user.Mail}'", this.connection);
			var dataReader = command.ExecuteReader();
			Token token = null;
			if (dataReader.Read() && SecurePasswordHasher.Verify(user.Password, (string)dataReader["Password"]))
			{
				token = TokenHelper.Update(new Guid((string)dataReader["ID"]));
			}
			dataReader.Close();
			this.connection.Close();
			return token;
		}
	}
}
