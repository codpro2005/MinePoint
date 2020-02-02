using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MinePointAPI.Models;
using MySql.Data.MySqlClient;

namespace MinePointAPI.Repositories
{
	public interface ISubscriptionRepository
	{
		List<Subscription> GetSubscriptions(Guid userId);
		Subscription PostOrPutSubscription(Guid userId, Subscription subscriptions);
		Subscription PostSubscription(Guid userId, Subscription subscriptions);
		Subscription PutSubscription(Guid userId, Subscription subscriptions);
	}
	public class SubscriptionRepository : ISubscriptionRepository
	{
		private const string ConnectionString = "server=127.0.0.1;uid=root;pwd=MP123;database=minepoint";

		public SubscriptionRepository()
		{

		}

		public List<Subscription> GetSubscriptions(Guid userId)
		{
			using var connection = new MySqlConnection(SubscriptionRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT ID, Expiration, Ram, fk_user FROM subscription WHERE fk_user = @fk_user", connection);
			command.Parameters.AddWithValue("@fk_user", userId);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			var subscriptions = new List<Subscription>();
			while (dataReader.Read())
			{
				var expiration = dataReader["Expiration"];
				subscriptions.Add(new Subscription(Guid.Parse((string)dataReader["ID"]), expiration != DBNull.Value ? (DateTime?)expiration : null, (int)dataReader["Ram"]));
			}
			dataReader.Close();
			return subscriptions;
		}

		public Subscription GetSubscription(Guid id)
		{
			using var connection = new MySqlConnection(SubscriptionRepository.ConnectionString);
			using var command = new MySqlCommand($"SELECT ID, Expiration, Ram, fk_user FROM subscription WHERE ID = @ID", connection);
			command.Parameters.AddWithValue("@ID", id);
			connection.Open();
			using var dataReader = command.ExecuteReader();
			Subscription subscription = null;
			if (dataReader.Read())
			{
				var expiration = dataReader["Expiration"];
				subscription = new Subscription(Guid.Parse((string) dataReader["ID"]),
					expiration != DBNull.Value ? (DateTime?) expiration : null, (int) dataReader["Ram"]);
			}
			dataReader.Close();
			return subscription;
		}

		public Subscription PostOrPutSubscription(Guid userId, Subscription subscription)
		{
			using var connection = new MySqlConnection(SubscriptionRepository.ConnectionString);
			bool subscriptionExists;
			using (var command = new MySqlCommand("SELECT ID FROM subscription WHERE ID = @ID;", connection))
			{
				command.Parameters.AddWithValue("@ID", subscription.Id);
				connection.Open();
				subscriptionExists = command.ExecuteReader().Read();
			}

			return !subscriptionExists
				? this.PostSubscription(userId, subscription)
				: this.PutSubscription(userId, subscription);
		}

		public Subscription PostSubscription(Guid userId, Subscription subscription)
		{
			using var connection = new MySqlConnection(SubscriptionRepository.ConnectionString);
			using var command = new MySqlCommand("INSERT INTO subscription(ID, Expiration, Ram, fk_user) VALUES(@ID, @Expiration, @Ram, @fk_user)", connection);
			SubscriptionRepository.AddParameters(command, userId, subscription);
			connection.Open();
			command.ExecuteNonQuery();
			return subscription;
		}

		public Subscription PutSubscription(Guid userId, Subscription subscription)
		{
			using var connection = new MySqlConnection(SubscriptionRepository.ConnectionString);
			using var command = new MySqlCommand("UPDATE subscription SET Expiration = @Expiration, Ram = @Ram, fk_user = @fk_user WHERE ID = @ID", connection);
			SubscriptionRepository.AddParameters(command, userId, subscription);
			connection.Open();
			command.ExecuteNonQuery();
			return subscription;
		}

		private static void AddParameters(MySqlCommand command, Guid userId, Subscription subscription)
		{
			command.Parameters.AddWithValue("@ID", subscription.Id);
			command.Parameters.AddWithValue("@Expiration", subscription.Expiration);
			command.Parameters.AddWithValue("@Ram", subscription.Ram);
			command.Parameters.AddWithValue("@fk_user", userId);
		}
	}
}
