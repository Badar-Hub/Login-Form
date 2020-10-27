<template>
  <div>
    <div class="main">
      <button @click="displays" class="btn btn-primary">Show Users</button>
      <button @click="displays1" class="btn btn-secondary">Register New User</button>
      <div :style="`display:${display}`" class="title">
        <div class="name">
          <h3>Email Address</h3>
        </div>
        <div class="name">
          <h3>Username</h3>
        </div>
        <div class="name">
          <h3>Password</h3>
        </div>
        <div class="password">
          <h3>Delete/Edit User</h3>
        </div>
      </div>
      <hr />
      <div :style="`display:${display}`" v-for="user in users" :key="user._id" class="content">
        <div class="name">
          <p>{{ user.userName }}</p>
        </div>
        <div class="name">
          <p>{{ user.emailAddress }}</p>
        </div>
        <div class="name">
          <p>{{ user.password }}</p>
        </div>
        <div class="password">
          <button class="btn btn-primary" @click="update(user._id)">Update User</button>
          <button class="btn btn-danger" @click="deleteUser(user._id)">Delete User</button>
        </div>
      </div>
      <hr style="margin:0" />
      <div :style="`display:${display1}`" class="register">
        <p>Name</p>
        <input type="text" v-model="newUser" />
        <br />
        <p>Email Address</p>
        <input type="text" v-model="newUserEmail" />
        <br />
        <p>Password</p>
        <input type="text" v-model="newUserPassword" />
        <br />
        <input @click="addNewUser" type="submit" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      display: "none",
      display1: "none",
      newUser: "",
      newUserEmail: "",
      newUserPassword: "",
    };
  },
  methods: {
    getAllUsers() {
      axios
        .get("http://localhost:3000/user", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json",
          },
        })
        .then((res) => {
          this.users = res.data;
          console.log(this.users);
        });
    },
    addNewUser() {
      if (!this.users_id) {
        axios
          .post("http://localhost:3000/user", {
            userName: this.newUser,
            emailAddress: this.newUserEmail,
            password: this.newUserPassword,
          })
          .then((req, res) => {
            console.log(res);
            this.getAllUsers();
            (this.newUser = ""),
              (this.newUserEmail = ""),
              (this.newUserPassword = "");
          });
      }
    },
    deleteUser(id) {
      axios.delete("http://localhost:3000/user/" + id).then((res) => {
        console.log(res);
        this.getAllUsers();
      });
    },
    updateUser(id, updatedUser) {
      axios.patch("http://localhost:3000/user/" + id, {
        data: {
          userName: updatedUser.userName,
          password: updatedUser.password,
        },
      });
    },
    displays() {
      if (this.display == "none") {
        this.display = "flex";
      } else {
        this.display = "none";
      }
    },
    displays1() {
      if (this.display1 == "none") {
        this.display1 = "flex";
      } else {
        this.display1 = "none";
      }
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped>
.main {
  max-width: 1200px;
  margin: auto;
}
.title {
  display: flex;
  text-align: left;
}
.content {
  display: flex;
  text-align: left;
  padding-bottom: 20px;
}
.name {
  flex: 3;
  text-align: left;
}
.password {
  flex: 3;
  text-align: left;
}

.none {
  display: none;
}
.btn {
  margin: 15px;
}

.register {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: auto;
  border: black 2px solid;
  padding: 20px;
  text-align: left;
}
</style>