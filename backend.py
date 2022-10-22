import os
import psycopg2

DATABASE_URL = "postgresql://varun:lS3lQmEZO0-wZm23sBmqZA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dwood-bee-6064"
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

def create_user_table():
    try:
        query = "CREATE TABLE IF NOT EXISTS user_data (user_name STRING, name STRING, password STRING, credit_score INT, health INT, inventory STRING, job STRING);"
        cur.execute(query)
        conn.commit()
    except (Exception) as error:
       print("Could Not Create Table", error)
def drop_table(table_name):
    query = "DROP TABLE %s"
    cur.execute(query, table_name)
    conn.commit()

def create_user(username,name,password):
    query =  "INSERT INTO user_data (user_name,name,password, credit_score, health, inventory, job) VALUES (%s, %s, %s, 690, 100, null, null)"
    val = (username,name,password)
    cur.execute(query,val)
    conn.commit()

def login_validation(username, password):
    query = "SELECT password FROM user_data where user_name=%s"
    cur.execute(query, (username,))
    c_pass = cur.fetchone()
    c_pass = ''.join(c_pass)

    if c_pass == password:
        print(username, password)
        return True
    else:
        print("Username and Password did not match")
        return False

drop_table('user_data')
create_user_table()
create_user("Varunu311", "Varun Upadhyay", "password101")
login_validation()
