<template>
    <div id="nav">
        <div id="nav-info">
            <el-image
                id="nav-image" 
                :src="userInfo.userImg"
                :preview-src-list="userImg_List"
                :initial-index="0"
                :hide-on-click-modal=true
                fit="cover"
            />
            <!-- <img class="nav-image" :src="userInfo.userImg" alt=""> -->
            <el-dropdown @command="handleCommand">
                <div style="font-size: 20px">
                    <span>{{ userInfo.nickname }}</span>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <div v-if="this.$store.state.userLogin">
                            <el-dropdown-item command="userinfo" style="font-size: 15px">修改个人信息</el-dropdown-item>
                            <el-dropdown-item command="password" style="font-size: 15px">修改密码</el-dropdown-item>
                        </div>
                        <div v-else>
                            <el-dropdown-item command="forget_password" style="font-size: 15px">忘记密码</el-dropdown-item>
                        </div>
                        <el-dropdown-item divided command="home" style="font-size: 15px">主页</el-dropdown-item>
                        <el-dropdown-item command="login" style="font-size: 15px">登录/注册</el-dropdown-item>
                        <el-dropdown-item command="logout" :disabled="!userLogin">注销</el-dropdown-item>
                    </el-dropdown-menu>
                </template>                       
            </el-dropdown>
        </div>

        <ModifyPasswordCom 
            :show="dialogVisible_Password" 
            @changeDialogVisible_Password="changeDialogVisible_Password"
        >
        </ModifyPasswordCom>

        <ModifyUserInfoCom
            :show="dialogVisible_UI"
            @changeDialogVisible_UI= "changeDialogVisible_UI"
        >               
        </ModifyUserInfoCom>

        <ForgetPasswordCom
            :show="dialogVisible_ForgetPassword"
            @changeDialogVisible_ForgetPassword= "changeDialogVisible_ForgetPassword"
        >
        
        </ForgetPasswordCom>
        
    </div>
</template>

<script>
import ModifyPasswordCom from '@/components/navComponents/ModifyPasswordCom.vue'
import ModifyUserInfoCom from '@/components/navComponents/ModifyUserInfoCom.vue'
import FogetPasswordCom from '@/components/navComponents/ForgetPasswordCom.vue'

export default {
    name: "NavCom",
    components: {
        "ModifyPasswordCom": ModifyPasswordCom,
        "ModifyUserInfoCom": ModifyUserInfoCom,
        "ForgetPasswordCom": FogetPasswordCom
    },
    
    data() {
        return {
            dialogVisible_UI: false,
            dialogVisible_Password: false,
            dialogVisible_ForgetPassword: false
        }
    },

    computed: {
        userInfo() {
            return this.$store.state.userInfo
        },
        userLogin() {
            return this.$store.state.userLogin
        },
        userImg_List() {
            let list = [
                this.userInfo.userImg
            ]
            return list
        }
    },
    methods: {
        handleCommand(command) {
            if(command=="userinfo") {
                this.dialogVisible_UI = true
            }

            if(command=="password") {
                this.dialogVisible_Password = true
            }

            if(command=="forget_password") {
                this.dialogVisible_ForgetPassword= true
            }

            if(command=="home") {
                this.$router.push('/')
            }

            if(command=="login") {
                this.$router.push('/login')
            }

            if(command=="logout") {
                // 用户注销，调用 vuex 中的函数
                this.$store.dispatch('logOut')
            }
        },

        changeDialogVisible_Password() {
            this.dialogVisible_Password = false
        },

        changeDialogVisible_UI() {
            this.dialogVisible_UI = false
        },

        changeDialogVisible_ForgetPassword() {
            this.dialogVisible_ForgetPassword = false
        }

    }
}
</script>

<style scoped>
#nav {
    position: absolute;
    width: 100vw;
    height: 5vh;
    z-index: 10;
}

#nav-info {
    position: absolute;
    top: 5px;
    left: 5px;
    display: flex;
    align-items: center;
}
:deep #nav-image {
    width: 30px;
    border-radius: 15px;
    margin-right: 5px;
}

</style>