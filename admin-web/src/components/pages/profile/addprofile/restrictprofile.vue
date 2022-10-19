<template>
    <div id="app">
      <div class="page-inner">
        <div class="page-header">
          <h4 class="page-title">
            <i class="fas fa-user-plus"></i> สิทธิการใช้งานแอดมิน
          </h4>
          <ul class="breadcrumbs"></ul>
        </div>
        <!-- yokk - add button add more authority -->
        <form id = 'confirm-add'>
        <div class="row" >
            <input type ='submit' value = 'เพิ่มสิทธิ' 
            class = 'btn btn-success float-right mb-4 me-4' id='btn_x'/>
        </div>
        <!-- Add role popup page -->
        <section>
            <div id="otp-modal">
                <div class="modal-content">
                    <span id="close" class="pretty_left">&#x2715; ยกเลิก</span>
                        <form id="check-code">
                          <div>
                            <h4 class="page-title">
                                <i class="fas fa-user"></i> สิทธิการใช้งานอ่าน&เข้าถึง
                            </h4>
                            <h4>*ชื่อ ROLE</h4>
                            <h6 onload="GetRole()"></h6>
                            <input type="text" id="add_role_name" placeholder="ROLE NAME" required  class ="pretty_w"/>
                          </div>
                            <!-- add checkbox -->
                          <div>
                            <h4>กำหนดสิทธิการเข้าถึง/ใช้งาน</h4>
                            <form id = "newBrand">
                            <table id = "myTable">
                                <thead>
                                    <!-- <tr><th>
                                       <input type="checkbox" v-model="selectAll" @click="select">
                                        <i class="form-icon"></i>
                                    </th></tr> -->
                                    <div data-checkbox-group></div>
                                    
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="main" value="menu_main" v-model="checkedNames" data-master-checkbox>
                                            <label for="menu_main" > หน้าหลัก</label>
                                        </td>
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_member" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_member"> 1. ลูกค้า</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_member_detail" v-model="checkedNames">
                                                <label for="menu_member_detail"> 1.1 ข้อมูลลูกค้า</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_member_add" v-model="checkedNames">
                                                <label for="menu_member_add"> 1.2 สมัครสมาชิกลูกค้า</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>



                                    <tr>
                                        <td>
                                            <input type="checkbox" id="main" value="menu_check_member" v-model="checkedNames" data-master-checkbox>
                                            <label for="menu_check_member"> 2.เช็คข้อมูลลูกค้า</label>
                                            
                                        </td>
                                        
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_report" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_report"> 3. รายงาน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_deposit" v-model="checkedNames">
                                                <label for="menu_report_deposit"> 3.1 สมัครสมาชิกลูกค้า</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_hidden" v-model="checkedNames">
                                                <label for="menu_report_hidden"> 3.2 การฝากที่ถูกซ่อน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_withdraw" v-model="checkedNames">
                                                <label for="menu_report_withdraw"> 3.3 รายงานการถอน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_decimal" v-model="checkedNames">
                                                <label for="menu_report_decimal"> 3.4 รายงานการฝากทศนิยม</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_createdeposit" v-model="checkedNames">
                                                <label for="menu_report_createdeposit"> 3.5 รายงานการสร้างรายการฝาก</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_deposit_withdraw_manual" v-model="checkedNames">
                                                <label for="menu_deposit_withdraw_manual"> 4. ฝาก/ถอนเครดิตเติมมือ</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_manage_witdraw" v-model="checkedNames">
                                                <label for="menu_manage_witdraw"> 5. จัดการข้อมูลการถอน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_withdraw" v-model="checkedNames">
                                                <label for="menu_withdraw"> 6. หน้าถอนเงิน</label>
                                        </td>
                                    </tr>

                                   <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_commission" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_commission"> 7. ค่าคอมมิชชั่น</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_setting_affliate" v-model="checkedNames">
                                                <label for="menu_setting_affliate"> 7.1 ตั้งค่าระบบAffliate</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_withdraw_commission" v-model="checkedNames">
                                                <label for="menu_withdraw_commission"> 7.2 การถอนค่าแนะนำ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_affliate" v-model="checkedNames">
                                                <label for="menu_report_affliate"> 7.3 เช็คข้อมูลแนะนำเพื่อน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_team_org" v-model="checkedNames">
                                                <label for="menu_team_org"> 7.4 แผนผังองค์กร</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_bankaccount" v-model="checkedNames">
                                                <label for="menu_bankaccount"> 8. บัญชีธนาคาร</label>
                                        </td>
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_employee" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_employee"> 9. พนักงาน</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_name" v-model="checkedNames">
                                                <label for="menu_employee_name"> 9.1 รายชื่อ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_add" v-model="checkedNames">
                                                <label for="menu_employee_add"> 9.2 เพิ่มสมาชิกแอดมิน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_restriction" v-model="checkedNames">
                                                <label for="menu_employee_restriction"> 9.3 จัดการสิทธิการเข้าใช้งาน</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_promotion" v-model="checkedNames">
                                                <label for="menu_promotion"> 10. โปรโมชั่น</label>
                                        </td>
                                    </tr>
                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_summary" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_summary"> 11. สรุป</label>
                                        </td>
                                    </tr>

                                    
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_promotion" v-model="checkedNames">
                                                <label for="menu_summary_promotion"> 11.1 รายชื่อ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_deposit_manual" v-model="checkedNames">
                                                <label for="menu_summary_deposit_manual"> 11.2 เพิ่มสมาชิกแอดมิน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_profitloss" v-model="checkedNames">
                                                <label for="menu_summary_profitloss"> 11.3 จัดการสิทธิการเข้าใช้งาน</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_manual" v-model="checkedNames" data-master-checkbox>
                                                <label for="menu_manual"> 12. คู่มือการใช้งาน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_manual_sms" v-model="checkedNames">
                                                <label for="menu_manual_sms"> 12.1 การตั้งค่าSMS</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_manual_ebook" v-model="checkedNames">
                                                <label for="menu_manual_ebook"> 12.2 EBook</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_prefix" v-model="checkedNames">
                                                <label for="menu_prefix"> 13. Prefix</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_profile" v-model="checkedNames">
                                                <label for="menu_profile"> 14. ข้อมูลส่วนตัว</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_former_customer" v-model="checkedNames">
                                                <label for="menu_former_customer"> 15. ลูกค้าเก่า</label>
                                        </td>
                                    </tr>
                                
                                </thead>
                            </table>
                        </form>
                            <div class="form-group">
                                <input type="submit" value="ยืนยัน" id = "submit"
                    class="btn btn-success float-right mb-4 me-4" />
                                
                                </div>

                         
                        </div>
                        <!-- done checkbox -->

                        
                
                          
                    <span id="modal-status" class="status"></span>
                    </form>
                </div>
            </div>
        </section>
<!--  -->


<!-- --------------------------------------- -->
    </form>
        <div>
              <div class="table-responsive">
                <form id="confirm-edit">
                <table
                  id="basic-datatables"
                  class="display table table-striped table-hover table-bordered"
                >
                    <thead style="text-align: center">
                        <tr>
                        <th>#</th>
                        <th>ROLE</th>
                        <th>อัพเดทล่าสุด</th>
                        <th>สร้างขึ้นเมื่อ</th>
                        <th>ทำรายการโดย</th>
                        <th>แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody style="text-align: center">
                        <!-- yokk -- call data from authoritystatus -->
                    <tr
                      v-for="(data, index) in authoritystatus"
                      v-bind:key="data.id"
                    >
                    <!-- # -->
                      <td>{{ index + 1 }}</td>
                    <!-- ROLE -->
                      <td>{{ data.name}}</td>
                      <!-- Last updated -->
                      <td>{{ data.updatedAt}}</td>
                      <!-- create updated -->
                      <td>{{ data.createdAt}}</td>
                      <!-- created by -->
                      <td>{{ data.by}}</td>
                      <!-- delete -->
                      <!-- <td><input type="button" value="Delete" onclick="deleteRow(this)"></td> -->
                      <td>
                        
                        <!-- <button
                          type="button"
                          class="btn btn-warning btn-sm mr-1 text-white"
                          data-target="#editeuser"
                          v-on:click.prevent="editRow_pencil(data)"
                        > </button> -->
                        <form id ='semiform'>
                        <input type ='click' value = 'แก้สิทธิ' @click="editRow_pencil(data)"
            class = 'btn btn-success float-right mb-4 me-4' id='btn_y'/></form>
                        <!-- <input type ="submit" -->
                    </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <!-- <tr v-if="depositreport.length == '0'"> -->
                    <tr v-if="!authoritystatus">
                      <td colspan="13" class="text-center text-danger">
                        <i class="fas fa-times"></i>
                        ไม่มีข้อมูล !
                      </td>
                    </tr>
                  </tbody>
                </table>
            </form>
                    </div>
        </div>

        <!-- -------------------------------------- -->
       
        <section>
            <div id="otp-modal-edit">
                <div class="modal-content">
                    <span id="closeEdit" class="pretty_left">&#x2715; ยกเลิก</span>
                        <form id="check-code">
                          <div>
                            <h4 class="page-title">
                                <i class="fas fa-user"></i> แก้ไขสิทธิการใช้งานอ่าน&เข้าถึง " {{usernameuuid.name}} "
                            </h4>
                            <input
                              disabled
                                class="form-control"
                                type="text"
                                name="tel"
                                id="tel"
                                aria-describedby="helpId"
                                placeholder="tel"
                                v-model="usernameuuid.name"
                                required
                              />
                            <!-- <h4>*Role</h4>  <h2>{{usernameuuid}}</h2> -->
                          </div>
                            <!-- add checkbox -->
                          <div>
                            <form id = "newBrand">
                            <table id = "myTable">
                                <thead>
                                    <!-- <tr><th>
                                       <input type="checkbox" v-model="selectAll" @click="select">
                                        <i class="form-icon"></i>
                                    </th></tr> -->
                                    <div data-checkbox-group></div>
                                    
                                    <tr>
                                        <td>
                                            <input type="checkbox" id="main" value="menu_main" v-model="checkedNames" data-master-checkbox value-is-okay>
                                            <label for="menu_main" > หน้าหลัก</label>
                                        </td>
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_member" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_member"> 1. ลูกค้า</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_member_detail" v-model="checkedNames" value-is-okay>
                                                <label for="menu_member_detail"> 1.1 ข้อมูลลูกค้า</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_member_add" v-model="checkedNames" value-is-okay>
                                                <label for="menu_member_add"> 1.2 สมัครสมาชิกลูกค้า</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>



                                    <tr>
                                        <td>
                                            <input type="checkbox" id="main" value="menu_check_member" v-model="checkedNames" data-master-checkbox value-is-okay>
                                            <label for="menu_check_member"> 2.เช็คข้อมูลลูกค้า</label>
                                            
                                        </td>
                                        
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_report" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_report"> 3. รายงาน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_deposit" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_deposit"> 3.1 สมัครสมาชิกลูกค้า</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_hidden" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_hidden"> 3.2 การฝากที่ถูกซ่อน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_withdraw" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_withdraw"> 3.3 รายงานการถอน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_decimal" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_decimal"> 3.4 รายงานการฝากทศนิยม</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_createdeposit" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_createdeposit"> 3.5 รายงานการสร้างรายการฝาก</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_deposit_withdraw_manual" v-model="checkedNames" value-is-okay>
                                                <label for="menu_deposit_withdraw_manual"> 4. ฝาก/ถอนเครดิตเติมมือ</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_manage_witdraw" v-model="checkedNames" value-is-okay>
                                                <label for="menu_manage_witdraw"> 5. จัดการข้อมูลการถอน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_withdraw" v-model="checkedNames" value-is-okay>
                                                <label for="menu_withdraw"> 6. หน้าถอนเงิน</label>
                                        </td>
                                    </tr>

                                   <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_commission" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_commission"> 7. ค่าคอมมิชชั่น</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_setting_affliate" v-model="checkedNames" value-is-okay>
                                                <label for="menu_setting_affliate"> 7.1 ตั้งค่าระบบAffliate</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_withdraw_commission" v-model="checkedNames" value-is-okay>
                                                <label for="menu_withdraw_commission"> 7.2 การถอนค่าแนะนำ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_report_affliate" v-model="checkedNames" value-is-okay>
                                                <label for="menu_report_affliate"> 7.3 เช็คข้อมูลแนะนำเพื่อน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_team_org" v-model="checkedNames" value-is-okay>
                                                <label for="menu_team_org"> 7.4 แผนผังองค์กร</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_bankaccount" v-model="checkedNames" value-is-okay>
                                                <label for="menu_bankaccount"> 8. บัญชีธนาคาร</label>
                                        </td>
                                    </tr>

                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_employee" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_employee"> 9. พนักงาน</label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_name" v-model="checkedNames" value-is-okay>
                                                <label for="menu_employee_name"> 9.1 รายชื่อ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_add" v-model="checkedNames" value-is-okay>
                                                <label for="menu_employee_add"> 9.2 เพิ่มสมาชิกแอดมิน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_employee_restriction" v-model="checkedNames" value-is-okay>
                                                <label for="menu_employee_restriction"> 9.3 จัดการสิทธิการเข้าใช้งาน</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_promotion" v-model="checkedNames" value-is-okay>
                                                <label for="menu_promotion"> 10. โปรโมชั่น</label>
                                        </td>
                                    </tr>
                                    <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_summary" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_summary"> 11. สรุป</label>
                                        </td>
                                    </tr>

                                    
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_promotion" v-model="checkedNames" value-is-okay>
                                                <label for="menu_summary_promotion"> 11.1 รายชื่อ</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_deposit_manual" v-model="checkedNames" value-is-okay>
                                                <label for="menu_summary_deposit_manual"> 11.2 เพิ่มสมาชิกแอดมิน</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_summary_profitloss" v-model="checkedNames" value-is-okay>
                                                <label for="menu_summary_profitloss"> 11.3 จัดการสิทธิการเข้าใช้งาน</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                <div data-checkbox-group>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_manual" v-model="checkedNames" data-master-checkbox value-is-okay>
                                                <label for="menu_manual"> 12. คู่มือการใช้งาน</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="ul-style-must">
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_manual_sms" v-model="checkedNames" value-is-okay>
                                                <label for="menu_manual_sms"> 12.1 การตั้งค่าSMS</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="sub" value="menu_manual_ebook" v-model="checkedNames" value-is-okay>
                                                <label for="menu_manual_ebook"> 12.2 EBook</label>
                                            </li>
                                        </ul>
                                        </td>
                                    </tr>
                                </div>

                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_prefix" v-model="checkedNames" value-is-okay>
                                                <label for="menu_prefix"> 13. Prefix</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_profile" v-model="checkedNames" value-is-okay>
                                                <label for="menu_profile"> 14. ข้อมูลส่วนตัว</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                                <input type="checkbox" id="main" value="menu_former_customer" v-model="checkedNames" value-is-okay>
                                                <label for="menu_former_customer"> 15. ลูกค้าเก่า</label>
                                        </td>
                                    </tr>
                                
                                </thead>
                            </table>
                        </form>

                            <div class="form-group">
                                <input type="submit" value="ยืนยัน" id = "submit"
                    class="btn btn-success float-right mb-4 me-4" />
                               
                                </div>

                         
                        </div>
                        <!-- done checkbox -->

                        
                
                          
                    <span id="modal-status" class="status"></span>
                    </form>
                </div>
            </div>
        </section>

        <!-- -------edit authority -->
      </div>
    </div>
  </template>
  
  <script>
    import axios from "axios";
    const moment = require("moment");
    import { baseURL } from "../../../../services/api";
    import UserService from "@/services/UserService";
    import accessMenuService from "@/services/accessMenuService"; //for send request
    // import check_component from "./check_component";

    
    export default {

//     components: {
//     check_component,
//   },
        
      data() {
        
        return {
            tel:"",
            usernameuuid:"",
        checkedNames:[],
        role_name: "",
        last_updated: "",
        create_date: "",
        true: true,
        false: false,
        created_by: "",
        delete_btn: "",
        authoritystatus: [],
        
        };
      },
      
      mounted(){
        
        axios({
      method: "get",
      url: baseURL + "/photo/prefix",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("access_token"),
      },
    })
    

    


    // function deleteRow(r) {
    // var i = r.parentNode.parentNode.rowIndex;
    // document.getElementById("myTable").deleteRow(i);
    // }
    

    // yokk : add checkbox func
    // #check-code 
    // const adminDaimai = document.getElementById("tel");
    // const adminDaimai = this.usernameuuid;
    // console.log(adminDaimai)

    var toggleChecks = function() {
    var isMaster = this.hasAttribute('data-master-checkbox') 
    var group = this.closest('[data-checkbox-group]')
    var boxes = group.querySelectorAll('input[type=checkbox]:not([data-master-checkbox])')
    var master = isMaster ? this : group.querySelector('input[type=checkbox][data-master-checkbox]')


    ///////// ----------------------
  
    if (isMaster) {
      // Set all children to the value of the parent

      for(var i = 0; i < boxes.length; i++) {
        boxes[i].checked = this.checked
      }
    } else {
      // Toggle all children to the state of the master
      var checkedCount = 0
      for(var j = 0; j < boxes.length; j++) {
        if(boxes[j].checked) { checkedCount += 1 }
      }

      master.checked = checkedCount == boxes.length
      master.indeterminate = !master.checked && !checkedCount == 0
    }
  }

  var nodes = document.querySelectorAll('[data-checkbox-group] input[type=checkbox]')
  for(var k = 0; k < nodes.length; k++) {
    nodes[k].addEventListener('change', toggleChecks)
  }

  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  var submit = document.getElementById("submit");
  var to;


  function getChecked() {
        var checked = [];
        to = document.querySelector("#add_role_name").value;
        console.log(to)//role nsme
  

        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            if (checkbox.checked) 
            checked.push(checkbox.value);
                }

  return checked;
}

function XgetChecked() {
        var Xchecked = [];
        for (var i = 0; i < checkboxes.length; i++) {
            var checkbox = checkboxes[i];
            if (checkbox.checked) 
            Xchecked.push(checkbox.id);
                }

  return Xchecked;
}
//
function getCheckedUpdated() {
        var checkedU = [];
        var elems= document.querySelectorAll('input[type=checkbox][value-is-okay]')
  

        for (var i = 0; i < elems.length; i++) {
            var checkbox = elems[i];
            if (checkbox.checked) 
            checkedU.push(checkbox.value);
                }

  return checkedU;
}
function XgetCheckedUpdated() {
        var XcheckedI = [];
        var elems= document.querySelectorAll('input[type=checkbox][value-is-okay]')

        for (var i = 0; i < elems.length; i++) {
            var checkbox = elems[i];
            if (checkbox.checked) 
            XcheckedI.push(checkbox.id);
                }

  return XcheckedI;
}




async function goregis(event) {
event.preventDefault();
  var checked = getChecked();
  var Xchecked =XgetChecked();
    
//// ----- send as JSON ------ /////
 var op = {
    "role": to,
    "menu":[],
 } 
 for (var i =0; i<checked.length; i++){
    op.menu.push({"name":checked[i],
                "type":Xchecked[i],
                "status":true,
            })
 }
 var json_op = JSON.stringify(op, null, 2)
 console.log(json_op)

// accessMenuService.setAccessMenu(json_op,to);
  const GetResponse = await accessMenuService.setAccessMenu(json_op,to);
  console.log(GetResponse)

  if (GetResponse['message'] ==  "Success") {
    // console.log('okk')
  const modalx = document.getElementById("otp-modal");
  modalx.style.display = "none";
  }
  else {console.log('error at goregis')}

    }


submit.addEventListener("click", (event) => goregis(event));
//   --------- stop here

// edit role

//end edit role


    
    const modal = document.getElementById("otp-modal");
    modal.style.display = "none";

    //   yokk add function eventlistener when click
        async function addRoleFunc(event) {
            console.log('here')
            event.preventDefault();
            modal.style.display = "block";

        }
        let confirmToAdd = document.getElementById("confirm-add");
        confirmToAdd.addEventListener("submit", (event) => addRoleFunc(event));

        // close add role
        let closeButton = document.getElementById("close");
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // yokk add note as of 22 Sep 2022 : waiting to get response from database then close this
        this.getAllEmployee(); // call function in mounted 
        // window.$("#editeuser").modal("hide");
        // this.getRoleName();


//edit_x
var res_arr=[]
var roleNameEdit =''
// ---------------- edit --------------------------
const modaledit = document.getElementById("otp-modal-edit");
modaledit.style.display = "none";

async function editRow_X(event){

    console.log('in editRow_X')
    // otp-modal-edit
    event.preventDefault();
    modaledit.style.display = "block";
   roleNameEdit = document.querySelector("#tel").value;
//    console.log(roleNameEdit)
//    const res = await accessMenuService.updateAccessMenu(roleNameEdit);
    const res = await accessMenuService.getAccessMenu(roleNameEdit);
    // const xy = new Set(res)
    console.log(res)
    const res_json = res.data
    console.log('res_json',res_json)
    // const res_uniq = new Set(res_json)
    for (var j = 0; j < res_json.length; j++) {
        res_arr.push(res.data[j].name)
        // res_arr = new Set(res_arr)
        // console.log(new Set(res_arr))
}

//show all ticks
// for (var ii = 0; ii < checkboxes.length; ii++) {
//     var checkbox = checkboxes[ii];
var page_chk =[];
    for (var jj = 0; jj < res_json.length; jj++) {
        if(res_json[jj].status ===true){
            console.log(res_json[jj].name)
            page_chk.push(res_json[jj].name)}
            else{console.log('null')}}


// }
// }
// console.log(res_arr)
for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
//     // if(checkbox.value.isInList(res_arr)){
        if(page_chk.includes(checkbox.value)){   
        checkbox.checked= true;
    }else{ checkbox.checked= false;}
}
// end show all ticks
//list all page that has changed

//list all page that has not changed


}

async function editRole_y(event){
    event.preventDefault();
    console.log('in editRole_y to edit Role :',roleNameEdit)
    var CheckedUpdated = getCheckedUpdated();
    // console.log(CheckedUpdated)
    var typeUpdated = XgetCheckedUpdated();
    // console.log(typeUpdated)
    var res_arr_uniq = new Set(res_arr)
    res_arr_uniq = Array.from(res_arr_uniq);
    // console.log(res_arr_uniq)

    var inOriNotNew = res_arr_uniq.filter(x => CheckedUpdated.includes(x));
    var chgOri = res_arr_uniq.filter(x => !inOriNotNew.includes(x));
    // console.log('chgOri',chgOri)

    var inNewiNotOri = CheckedUpdated.filter(x => !res_arr_uniq.includes(x));
    // console.log('inNewiNotOri',inNewiNotOri)

    var concat_all_chg = chgOri.concat(inNewiNotOri)
    // console.log('All changes',concat_all_chg)
    
    var output1 = {
            "role": roleNameEdit,
            "menu":[],
        }

    if(concat_all_chg.length === 0){
        console.log('no change')
    }else{
        for (var i = 0; i < concat_all_chg.length; i++) {
            //from visible to invisible --> change to false
            if(chgOri.includes(concat_all_chg[i])){
                output1.menu.push(
                {"name":concat_all_chg[i],
                "type":typeUpdated[i],
                "status":false,
            })
            }else{
                //from invisible to visible --> change to true
                output1.menu.push(
                {"name":concat_all_chg[i],
                "type":typeUpdated[i],
                "status":true,
            })
            }

    }
}
    var json_op1 = JSON.stringify(output1, null, 2)
    console.log(json_op1)

    const GetResponse1 = await accessMenuService.updateAccessMenu(json_op1,roleNameEdit);
    console.log(GetResponse1)
    if (GetResponse1['message'] ==  "Success") {
        console.log('okk')
        const modalx = document.getElementById("otp-modal-edit");
        modalx.style.display = "none";
    }else {console.log('error at XX')}



}



let closeButtonEdit = document.getElementById("closeEdit");
closeButtonEdit.addEventListener("click", () => {
            modaledit.style.display = "none";
        });
// basic-datatables
var clickedit = document.getElementById("confirm-edit");
clickedit.addEventListener("click", (event) => editRow_X(event));

var submitedit = document.getElementById("otp-modal-edit");
submitedit.addEventListener("submit", (event) => editRole_y(event));



        
      },

// FUNC METHODS
      methods: {
        async checkAuth() {
          const res = await UserService.getProfile().catch(function (error) {
            if (error.response.status === 401 || error.response.status === 500) {
              const removeToken = localStorage.removeItem("access_token");
              if (removeToken == null) {
                this.$router.push("/login");
              }
            }
          });
          res.logout;
        },
        // delete row function


        //show table
        async getAllEmployee() {
            console.log('read611')
            this.authoritystatus="";
            const res = await accessMenuService.getRole();
            this.authoritystatus = res.data;
            console.log(this.authoritystatus)
            //accessMenuService.getRole() does not gets role details
             
        },
        
        
        async editRow_pencil(role_name) {
            this.usernameuuid = role_name
            // console.log('in editRow_pencil',role_name)

        },


        
        
        
        moment() {
          this.checkAuth();    
          return moment();},
      },//close method


  
      
      
    };
    

    

    
    </script>
    
    <style>
.ul-style-must{
    list-style-type:none;
}
.pretty_w{
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  width: 80%;
}
    </style>
  