using MinePointAPI.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MinePointAPI.Repositories
{
	public interface IUserRepository
	{
		User PostUser(User user);
		User GetUser();
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
			this.connection.Open();
			var command = connection.CreateCommand();
			command.CommandText = "INSERT INTO user(ID,name,password) VALUES(@ID, @name, @password)";
			command.Parameters.AddWithValue("@ID", Guid.NewGuid());
			command.Parameters.AddWithValue("@name", user.Username);
			command.Parameters.AddWithValue("@password", user.Password);
			command.ExecuteNonQuery();
			this.connection.Close();
			return user;
		}

		public User GetUser()
		{
			return new User();
		}
	}
}
