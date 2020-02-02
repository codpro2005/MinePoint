using MinePointAPI.Helpers;
using MinePointAPI.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace MinePointAPI.Repositories
{
	public interface IUserRepository
	{
		List<User> GetUsers();
		User GetUser(Guid id);
		Guid? GetUserIdByMail(string mail);
		User PostUser(User user);
		User PutUser(User user);
		Token<User> PostUserLogin(Guid id, string password);
		User DeleteUser(Guid id);
	}
	public class UserRepository : IUserRepository
	{
		private const string ConnectionString = "server=127.0.0.1;uid=root;pwd=MP123;database=minepoint";
		private readonly ISubscriptionRepository SubscriptionRepository;

		public UserRepository(ISubscriptionRepository subscriptionRepository)
		{
			this.SubscriptionRepository = subscriptionRepository;
		}

		public List<User> GetUsers()
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT * FROM USER", connection);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			var users = new List<User>();
			while (dataReader.Read())
			{
				var id = Guid.Parse((string) dataReader["ID"]);
				users.Add(new User(id, (string)dataReader["Mail"], (string)dataReader["Password"], (ulong)dataReader["SetUp"] == 1, this.SubscriptionRepository.GetSubscriptions(id)));
			}
			dataReader.Close();
			return users;
		}

		public User GetUser(Guid id)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT Mail, Password, SetUp FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			User user = null;
			if (dataReader.Read())
			{
				user = new User(id, (string)dataReader["Mail"], (string)dataReader["Password"], (ulong)dataReader["SetUp"] == 1, this.SubscriptionRepository.GetSubscriptions(id));
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
				userId = new Guid((string)dataReader["ID"]);
			}
			dataReader.Close();
			return userId;
		}

		public User PostUser(User user)
		{
			user.Id = Guid.NewGuid();
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using (var command =
				new MySqlCommand("INSERT INTO user(ID, Mail, Password, SetUp) VALUES(@ID, @Mail, @Password, @SetUp)",
					connection))
			{
				command.Parameters.AddWithValue("@ID", user.Id);
				command.Parameters.AddWithValue("@Mail", user.Mail);
				command.Parameters.AddWithValue("@Password", SecurePasswordHasher.Hash(user.Password));
				command.Parameters.AddWithValue("@SetUp", user.SetUp);
				connection.Open();
				command.ExecuteNonQuery();
			}
			user.Subscriptions.ForEach(subscription => this.SubscriptionRepository.PostSubscription((Guid)user.Id, subscription));
			return user;
		}

		public User PutUser(User user)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using (var command =
				new MySqlCommand("UPDATE user SET Mail = @Mail, Password = @Password, SetUp = @SetUp WHERE ID = @ID;",
					connection))
			{
				command.Parameters.AddWithValue("@ID", user.Id);
				command.Parameters.AddWithValue("@Mail", user.Mail);
				command.Parameters.AddWithValue("@Password", SecurePasswordHasher.Hash(user.Password));
				command.Parameters.AddWithValue("@SetUp", user.SetUp);
				connection.Open();
				command.ExecuteNonQuery();
			}
			user.Subscriptions.ForEach(subscription => this.SubscriptionRepository.PostOrPutSubscription((Guid)user.Id, subscription));
			return user;
		}

		public Token<User> PostUserLogin(Guid id, string password)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT Mail, Password, SetUp FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			Token<User> token = null;
			if (dataReader.Read() && SecurePasswordHasher.Verify(password, (string)dataReader["Password"]))
			{
				token = new Token<User>(new Session(true), new User(id, (string)dataReader["Mail"], (string)dataReader["Password"], (ulong)dataReader["SetUp"] == 1, this.SubscriptionRepository.GetSubscriptions(id)));
			}
			dataReader.Close();
			return token;
		}

		public User DeleteUser(Guid id)
		{
			var user = this.GetUser(id);
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"DELETE FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			command.ExecuteNonQuery();
			return user;
		}
	}
}
