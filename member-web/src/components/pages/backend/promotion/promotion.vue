<template>
  <div id="promotion">
    <!-- promotion menu -->
    <div class="row mt-3 justify-content-center">
      <div class="col-md-9">
        <nav aria-label="breadcrumb">
          <ol
            class="breadcrumb"
            style="
              background-image: url(assets/images/custom/bg-menu.png);
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
              background-position: center;
            "
          >
            <li class="breadcrumb-item">
              <router-link to="/home">หนัาหลัก</router-link>
            </li>
            <li class="breadcrumb-item" aria-current="page">โปรโมชั่น</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row mt-2 justify-content-center">
      <div class="col-md-9">
        <div class="card">
          <div
            class="card-body rounded p-0"
            style="
              background-image: url(assets/images/custom/bg-menu.png);
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
              background-position: center;
            "
          >
            <div class="card">
              <div
                class="card-header border border-dark"
                style="
                  background-image: url(assets/images/custom/bg-menu.png);
                  background-size: cover;
                  background-repeat: no-repeat;
                  position: relative;
                  background-position: center;
                "
              >
                <h5>promotion</h5>
              </div>
              <div
                class="card-body text-center border border-dark"
                v-for="data in promotion"
                v-bind:key="data.id"
                style="
                  background-image: url(assets/images/custom/bg-menu.png);
                  background-size: cover;
                  background-repeat: no-repeat;
                  position: relative;
                  background-position: center;
                "
              >
                <h5>{{ data.promotion_name }}</h5>
                <div class="card-body text-center">
                  <expandable-image
                    @click="showImage(data.uuid)"
                    class="promotion_image responsive"
                    v-bind:src="data.promotion_image"
                  >
                  </expandable-image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL } from "./../../../../services/api";
export default {
  name: "home",
  data() {
    return {
      promotion: [],
    };
  },
  mounted() {
    //ดึงโปรโมชัน
    axios({
      method: "get",
      url: baseURL + "/promotion/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        this.promotion = response.data.data.filter(status => status.status === "1");
        console.log(this.promotion);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
* {
  color: #000;
  font-weight: 700 !important;
}

.card-body{
  padding: 0px;
}
</style>
