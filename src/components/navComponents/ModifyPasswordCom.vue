<template>
    <div>
        <el-dialog
            v-model="dialogVisible_Password"
            width="50%"
            @close="changeDialogVisible_Password"
            center
        >
        <el-steps :active="stepActive" finish-status="success">
            <el-step title="验证身份" />
            <el-step title="设置密码" />
        </el-steps>

        <div v-show="step_0">
            <el-form :model="formModifyPassword" label-position="top">
                <el-form-item label="Emali" style="margin: 2% 15%;">
                    <el-input disabled :value="userInfo.email" />
                </el-form-item>
                <el-form-item label="Verification Code" style="margin: 2% 15%;">
                    <div style="width: 100%">
                        <el-input style="width: 65%" v-model="formModifyPassword.verificationCode" placeholder="请输入内容"></el-input>
                        <el-button 
                            style="width: 30%; margin-left: 5%;" 
                            @click="sendEmail" 
                            :disabled="buttonDisabled" 
                            >
                            {{buttonValue}}
                        </el-button>
                    </div>
                </el-form-item>
            </el-form>

            <el-button :disabled="buttonDisabled_next" @click="next" style="width: 70%; margin: 2% 15%" type="primary" >下一步</el-button>
        </div>

        <div v-show="step_1">
            <el-form :model="formModifyPassword" label-position="top">
                <el-form-item label="New Password" style="margin: 2% 15%;">
                    <el-input show-password v-model="formModifyPassword.newPassword" />
                </el-form-item>
                <el-form-item label="Confirm Password" style="margin: 2% 15%;">
                    <el-input show-password v-model="formModifyPassword.confirmPassword" />
                </el-form-item>
            </el-form>

            <el-button @click="next" style="width: 70%; margin: 2% 15%" type="primary" >下一步</el-button>
        </div>

        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    import Qs from 'qs'
    import swal from 'sweetalert'

    import { HostURL } from '@/axios'

    export default {
        props: ['show'],
        data() {
            return {
                dialogVisible_Password: false,
                stepActive: 0,
                step_0: true,
                step_1: false,
                buttonDisabled: false,
                buttonDisabled_next: true,
                buttonTime: 0,
                buttonValue: "获取验证码",
                formModifyPassword: {
                    newPassword: "",
                    confirmPassword: "",
                    verificationCode: ""
                }
            }
        },
        watch: {
            show(newVal) {
                this.dialogVisible_Password = newVal //对父组件传过来的值进行监听，如果改变也对子组件内部的值进行改变
            }
        },

        computed: {
            userInfo() {
                return this.$store.state.userInfo
            },
        },

        methods: {
            changeDialogVisible_Password() {
                this.$emit('changeDialogVisible_Password')
            },

            clock() {
                if (this.buttonTime>1) {
                    this.buttonTime--
                    this.buttonValue = this.buttonTime + '秒后重试'
                    this.circulationTimer = setTimeout(this.clock, 1000)
                }
                else {
                    this.buttonTime = 0
                    this.buttonValue = '获取验证码'
                    this.buttonDisabled = false
                    clearTimeout(this.circulationTimer)
                }
            },

            sendEmail() {
                // 设置用户一段时间后才可再次点击发送验证码
                this.buttonDisabled = true
                // 可以点击下一步按钮
                this.buttonDisabled_next = false
                this.buttonTime = 30
                this.clock()

                // console.log(token)
                axios({
                    method:'post',
                    url: HostURL + 'api/sendVerificationCode/',
                    data: Qs.stringify({
                        // 发送邮件，将 token 作为身份验证
                        token: this.$store.state.token,
                        register: 'false'
                    })
                })
                .then(
                    (res)=>{
                        let state = res.data.state
                        let msg = res.data.msg
                        if (state=='fail') {
                            this.$message.error(msg)
                        }
                        if (state=='success') {
                            this.$message.success(msg)
                        }
                    }
                )
            },

            next() {
                if (this.stepActive==0) {
                    // 将用户输入的验证码发送到服务器，进行验证
                    axios({
                        method:'post',
                        url: HostURL + 'api/checkVerificationCode/',
                        data: Qs.stringify({
                            verificationCode: this.formModifyPassword.verificationCode,
                            token: this.$store.state.token,
                            register: 'false'
                        })
                    })
                    .then(
                        (res)=>{
                            let state = res.data.state
                            let msg = res.data.msg
                            if (state == 'fail') {
                                this.$message.error(msg)
                            }
                            else if (state == 'success') {
                                // 隐蔽第一步骤的窗口
                                this.step_0 = false
                                // 清空验证码
                                this.formModifyPassword.verificationCode = ''
                                // 重新设置下一步按钮不可点击，以正确处理用户的下一次请求
                                this.buttonDisabled_next = true
                                // 通过验证，可以进入下一步
                                this.stepActive++
                                this.step_1 = true
                            }
                        }
                    )
                }

                else if (this.stepActive==1) {
                    // 将用户的新密码发到服务器进行改密码操作
                    if (this.formModifyPassword.newPassword == '') {
                        this.$message.error('密码不能为空')
                    }
                    else if (this.formModifyPassword.newPassword != this.formModifyPassword.confirmPassword) {
                        this.$message.error('两次密码不一致')
                    }
                    else {
                        axios({
                            method:'post',
                            url: HostURL + 'api/modifyPassword/',
                            data: Qs.stringify({
                                newPassword: this.formModifyPassword.newPassword,
                                token: this.$store.state.token
                            })
                        })
                        .then(
                            (res)=> {
                                let state = res.data.state
                                let msg = res.data.msg
                                if (state == 'fail') {
                                    this.$message.error(msg)
                                }
                                else if (state == 'success') {
                                    // 关闭修改密码的对话框，这个函数将调用父组件中的对应函数，$emit 的是自定义事件名
                                    this.changeDialogVisible_Password()
                                    
                                    swal({
                                        title: '改密成功',
                                        icon: 'success',
                                        buttons: {
                                            cancel: {
                                                text: '取消',
                                                value: true,
                                                visible: false
                                            },
                                            confirm: {
                                                text: '确定',
                                                value: true,
                                                visible: true
                                            }
                                        }
                                    })
                                    .then(
                                        // swal 事件的回调，改密成功后，用户注销
                                        (willContinue)=> {
                                            if (willContinue) {
                                                // 用户注销调用 vuex 中函数
                                                this.$store.dispatch('logOut')

                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }

                }
            }
        }
    }
</script>

<style  scoped>

</style>