<template>
  <div id="adDeposite">
    <!-- ฝากทศนิยม -->
    <br />

    <div class="row justify-content-center">
      <div class="col-md-9">
        <nav aria-label="breadcrumb">
          <ol
            class="breadcrumb shadow"
            style="
              background-image: url(assets/images/custom/bg-menu.png);
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
              background-position: center;
            "
          >
            <li class="breadcrumb-item font-weight-bold">
              <router-link to="/home">หนัาหลัก</router-link>
            </li>
            <li class="breadcrumb-item font-weight-bold">
              <router-link to="/depositlist">เลือกการฝาก</router-link>
            </li>
            <!-- <li class="breadcrumb-item" aria-current="page">
              <router-link to="/deposit">ฝากเงิน</router-link>
            </li>-->
            <li class="breadcrumb-item font-weight-bold" aria-current="page">
              ฝากทศนิยม
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row mt-2 justify-content-center">
      <div class="col-md-9">
        <div class="card shadow border-0">
          <div
            class="card-body border-0 rounded"
            style="
              background-image: url(assets/images/custom/bg-menu.png);
              background-size: cover;
              background-repeat: no-repeat;
              position: relative;
              background-position: center;
            "
          >
            <div class="card border-0">
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
                <h5 class="font-weight-bold">ฝากเงิน</h5>
              </div>
              <div
                class="card-body border border-dark"
                style="
                  background-image: url(assets/images/custom/bg-menu.png);
                  background-size: cover;
                  background-repeat: no-repeat;
                  position: relative;
                  background-position: center;
                "
              >
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label class="font-weight-bold">จำนวนเงิน </label><br />
                      <!-- <label >บัญชีที่รับเงิน : 0884092629</label> -->
                      <input
                        v-model="amount"
                        type="number"
                        class="form-control"
                        placeholder="กรุณากรอกจำนวนเงิน"
                        required
                      />
                      <h6 class="text-danger mt-2 pl-2 font-weight-bold">ฝากขั้นต่ำ 1 บาท</h6>
                      <!-- <br>
                        <div class="btnamount">
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(50)">50</button>
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(100)">100</button>
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(300)">300</button>
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(500)">500</button>
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(1000)">1,000</button>
                          <button type="button" class="btn btnselect" v-on:click="sentvalue(5000)">5,000</button>
                        </div> -->
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12 text-center">
                      <button
                        @click.prevent="depositDecimal"
                        class="
                          btn btn-blue btn-lg
                          rounded-pill
                          text-center text-white
                        "
                      >
                        <i class="fas fa-check-circle"></i> ทำรายการต่อไป
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bankService from "./../../../../../services/bankService";
export default {
  data() {
    return {
      amount: "",
      balancet: "",
    };
  },
  props: ["balance"],
  methods: {
    sentvalue(value) {
      this.amount = value;
    },
    async depositDecimal() {
      try {
        let checkamount = parseInt(this.amount);

        if (checkamount > 0) {
          const depositForm = {
            amount: checkamount,
          };
          const resp = await bankService.decimalDeposit(depositForm);
          this.$router.push("/depositInfo");

          sessionStorage.setItem("balance", resp.amount);
          this.balance = resp.amount;
          this.$store.state.money = this.balance = resp.amount;
        } else {
          this.$toast.error("กรุณา กรอกจำนวน", {
            position: "top-center",
            timeout: 1500,
          });
        }
      } catch (error) {
        this.$toast.error("bad", {
          position: "top-right",
          timeout: 1500,
        });
      }
    },
  },
};
</script>

<style  scoped>
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgb(255 255 255);
  border-bottom: 1px solid rgb(197 197 197 / 13%);
}
* {
  color: #000;
  font-weight: 700 !important;
}
</style>