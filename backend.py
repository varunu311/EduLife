import os
import psycopg2

DATABASE_URL = "postgresql://varun:EKoZ-DySh65JeT4ND_Qa-A@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/EduLife?sslmode=verify-full&options=--cluster%3Dwood-bee-6064"
conn = psycopg2.connect(DATABASE_URL)
cur = conn.cursor()

def create_user_table():
    try:
        query = "CREATE TABLE IF NOT EXISTS user_data (user_name STRING, name STRING, password STRING, balance INT, loan INT, credit_score INT, health INT, job STRING);"
        cur.execute(query)
        conn.commit()
    except (Exception) as error:
       print("Could Not Create Table", error)
def drop_table():
    query = "DROP TABLE All"
    cur.execute(query)
    conn.commit()

def create_user(username,name,password):
    query =  "INSERT INTO user_data (user_name,name,password, balance, loan, credit_score, health, job) VALUES (%s, %s, %s, 10000, 0, 690, 100, null)"
    val = (username,name,password)
    cur.execute(query,val)
    conn.commit()

def login_validation(username, password):
    query = "SELECT password FROM user_data where user_name=%s"
    cur.execute(query, (username,))
    c_pass = cur.fetchone()
    c_pass = ''.join(c_pass)

    if c_pass == password:
        print("Login Succesful:")
        print("Username:",username, "Password:",password)
        return True
    else:
        print("Username and Password did not match")
        return False

    return None
def set_bal(username, amount):
    query = "UPDATE user_data SET balance = %s WHERE user_name = %s"
    val = (amount, username)
    cur.execute(query,val)
    conn.commit()

def get_bal(username):
    query = "SELECT balance FROM user_data where user_name=%s"
    cur.execute(query, (username,))
    bal = cur.fetchone()
    bal = int(''.join(str(bal)).replace("(","").replace(")","").replace(",",""))
    return bal

def add_bal(username,amount_increase):
    set_bal(username, (get_bal(username)+amount_increase))

def subtract_bal(username,amount_decrease):
    set_bal(username, (get_bal(username)-amount_decrease))

def get_loan(username):
    query = "SELECT loan FROM user_data where user_name=%s"
    cur.execute(query, (username,))
    loan = cur.fetchone()
    loan = int(''.join(str(loan)).replace("(", "").replace(")", "").replace(",", ""))
    return loan

def set_loan(username, amount):
    query = "UPDATE user_data SET loan = %s WHERE user_name = %s"
    val = (amount, username)
    cur.execute(query, val)
    conn.commit()

def add_loan(username, amount_increase):
    set_bal(username, (get_bal(username) + amount_increase))

def subtract_loan(username, amount_decrease):
    set_bal(username, (get_bal(username) - amount_decrease))




#create_user_table()
#create_user("Varunu311", "Varun Upadhyay", "password101")
#create_user("Sal007", "Salvatore", "password202")
#create_user("Forty-Irvine", "Irvine", "password303")
#create_user("Smirki", "Manav", "password404")
#login_validation("Varunu311","password101")
#print("Current Bal:",get_bal("Varunu311"))
#add_bal("Varunu311", 25000)
#print("Updated Bal:",get_bal("Varunu311"))
#subtract_bal("Varunu311", 24000)
#print("Updated Bal:",get_bal("Varunu311"))
