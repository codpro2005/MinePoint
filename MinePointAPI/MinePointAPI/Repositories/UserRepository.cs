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
		Token<User> PostUserLogin(User user);
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
			using var command = new MySqlCommand($"SELECT ID, Mail, Password FROM USER WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			User user = null;
			if (dataReader.Read())
			{
				user = new User(new Guid((string)dataReader["ID"]), (string)dataReader["Mail"], (string)dataReader["Password"]);
			}
			dataReader.Close();
			return user;
		}

		public Guid? GetUserIdByMail(string mail)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT ID FROM USER WHERE Mail = @mail", connection);
			command.Parameters.AddWithValue("@mail", mail);
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
			using var command = new MySqlCommand("INSERT INTO user(ID,Mail,Password) VALUES(@ID, @mail, @password)", connection);
			command.Parameters.AddWithValue("@ID", user.Id);
			command.Parameters.AddWithValue("@mail", user.Mail);
			command.Parameters.AddWithValue("@password", SecurePasswordHasher.Hash(user.Password));
			connection.Open();
			command.ExecuteNonQuery();
			return user;
		}

		public User PutUser(User user)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand("UPDATE USER SET Mail = @mail, Password = @password WHERE ID = @ID;", connection);
			command.Parameters.AddWithValue("@ID", user.Id);
			command.Parameters.AddWithValue("@mail", user.Mail);
			command.Parameters.AddWithValue("@password", SecurePasswordHasher.Hash(user.Password));
			connection.Open();
			command.ExecuteNonQuery();
			return user;
		}

		public Token<User> PostUserLogin(User user)
		{
			using var connection = new MySqlConnection(UserRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT ID, Password FROM USER WHERE Mail = @mail", connection);
			command.Parameters.AddWithValue("@mail", user.Mail);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			Token<User> token = null;
			if (dataReader.Read() && SecurePasswordHasher.Verify(user.Password, (string)dataReader["Password"]))
			{
				token = new Token<User>(new Session(true), new User(new Guid((string)dataReader["ID"]), user.Mail));
			}
			dataReader.Close();
			return token;
		}
	}
}
