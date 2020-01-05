using MinePointAPI.Helpers;
using MinePointAPI.Models;
using MySql.Data.MySqlClient;
using System;

namespace MinePointAPI.Repositories
{
	public interface IUserRepository
	{
		User GetUser(Guid id);
		Guid? GetUserIdByMail(string mail);
		User PostUser(User user);
		User PutUser(User user);
		Token<User> PostUserLogin(Guid id, string password);
	}
	public class UserRepository : IUserRepository
	{
		private const string ConnectionString = "server=127.0.0.1;uid=root;pwd=MP123;database=minepoint";

		public UserRepository()
		{

		}

		public User GetUser(Guid id)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT Mail, Password, SubscriptionExpiration, Ram, SetUp FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			User user = null;
			if (dataReader.Read())
			{
				var subscriptionExpiration = dataReader["SubscriptionExpiration"];
				user = new User(id, (string)dataReader["Mail"], (string)dataReader["Password"], subscriptionExpiration != DBNull.Value ? (DateTime?)subscriptionExpiration : null, (int)dataReader["Ram"], (ulong)dataReader["SetUp"] == 1);
			}
			dataReader.Close();
			return user;
		}

		public Guid? GetUserIdByMail(string mail)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT ID FROM USER WHERE Mail = @Mail", connection);
			command.Parameters.AddWithValue("@Mail", mail);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			Guid? userId = null;
			if (dataReader.Read())
			{
				userId = new Guid((string) dataReader["ID"]);
			}
			dataReader.Close();
			return userId;
		}

		public User PostUser(User user)
		{
			user.Id = Guid.NewGuid();
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand("INSERT INTO user(ID, Mail, Password, SubscriptionExpiration, Ram, SetUp) VALUES(@ID, @Mail, @Password, @SubscriptionExpiration, @Ram, @SetUp)", connection);
			command.Parameters.AddWithValue("@ID", user.Id);
			command.Parameters.AddWithValue("@Mail", user.Mail);
			command.Parameters.AddWithValue("@Password", SecurePasswordHasher.Hash(user.Password));
			command.Parameters.AddWithValue("@SubscriptionExpiration", user.SubscriptionExpiration);
			command.Parameters.AddWithValue("@Ram", user.Ram);
			command.Parameters.AddWithValue("@SetUp", user.SetUp);
			connection.Open();
			command.ExecuteNonQuery();
			return user;
		}

		public User PutUser(User user)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand("UPDATE USER SET Mail = @Mail, Password = @Password, SubscriptionExpiration = @SubscriptionExpiration, Ram = @Ram, SetUp = @SetUp WHERE ID = @ID;", connection);
			command.Parameters.AddWithValue("@ID", user.Id);
			command.Parameters.AddWithValue("@Mail", user.Mail);
			command.Parameters.AddWithValue("@Password", SecurePasswordHasher.Hash(user.Password));
			command.Parameters.AddWithValue("@SubscriptionExpiration", user.SubscriptionExpiration);
			command.Parameters.AddWithValue("@Ram", user.Ram);
			command.Parameters.AddWithValue("@SetUp", user.SetUp);
			connection.Open();
			command.ExecuteNonQuery();
			return user;
		}

		public Token<User> PostUserLogin(Guid id, string password)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT Mail, Password, SubscriptionExpiration, Ram, SetUp FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			Token<User> token = null;
			if (dataReader.Read() && SecurePasswordHasher.Verify(password, (string)dataReader["Password"]))
			{
				var subscriptionExpiration = dataReader["SubscriptionExpiration"];
				token = new Token<User>(new Session(true), new User(id, (string)dataReader["Mail"], (string)dataReader["Password"], subscriptionExpiration != DBNull.Value ? (DateTime?)subscriptionExpiration : null, (int)dataReader["Ram"], (ulong)dataReader["SetUp"] == 1));
			}
			dataReader.Close();
			return token;
		}
	}
}
