<template>
    <div>
        <el-dialog
                v-model="dialogVisible_UI"
                title="修改个人信息"
                width="50%"
                @close="changeDialogVisible_UI"
            >
                <el-form :model="formModifyUI" label-position="top">
                    <el-form-item label="Nickname">
                            <el-input style="width: 75%" v-model="formModifyUI.nickname" :placeholder="userInfo.nickname" />
                    </el-form-item>

                    <el-form-item label="UserImg">
                        <el-upload
                            action=""
                            ref="userImgUpload"
                            list-type="picture-card"
                            :limit="1"
                            :auto-upload="false"
                            :on-preview="userImgPreview"
                            :on-change="userImgChange"
                            :on-exceed="userImgExceed"
                            :on-remove="userImgRemove"
                        >
                            <el-icon><Plus /></el-icon>
                            
                            <template #tip>
                                <div class="el-upload__tip">
                                    jpg files with a size less than 500KB.
                                </div>
                            </template>
                        </el-upload>
                    </el-form-item>
                </el-form>

                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="modifyUserInfo">
                        确认
                        </el-button>
                    </span>
                </template>
            </el-dialog>

            <el-image-viewer
                v-if="showViewer"
                @close="()=>{showViewer=false}"
                :url-list="img_preview"
                :hide-on-click-modal=true
                :initial-index="1"
            />
    </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    import { HostURL } from '@/axios'
    import { ElMessage } from 'element-plus'

    export default {
        props: ['show'],
        data() {
            return {
                dialogVisible_UI: false,
                showViewer: false,
                formModifyUI: {
                    nickname: "",
                    userImg: ""
                }
            }
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo
            },
            img_preview() {
                let list = [
                    this.userInfo.userImg
                ]
                return list
            }
        },
        watch: {
            show(newVal) {
                this.dialogVisible_UI = newVal
            }
        },
        methods: {
            changeDialogVisible_UI() {
                this.$emit('changeDialogVisible_UI')
            },
            userImgPreview() {
                // 点击预览图进行预览
                this.showViewer=true
            },
            userImgChange(file) {
            //将每次图片变化的时候，实时的进行监听，更改this.userImg图片数据
                this.formModifyUI.userImg = file.raw

                let type = file.raw.type
                let size = file.raw.size
                if(type !== "image/jpeg"){
                    ElMessage.error('用户头像必须是 JPG 格式')
                    this.$refs.userImgUpload.handleRemove(file)
                }
                if(size / 1024 > 500) {
                    ElMessage.error('用户头像大小必须小于 500KB')
                    this.$refs.userImgUpload.handleRemove(file)
                }
                // 预览图列表中添加要预览的图像
                if (this.img_preview.length == 1) { 
                    this.img_preview.push(file.url)
                }
                else {
                    while (this.img_preview.length > 1) {
                        this.img_preview.pop()
                    }
                    this.img_preview.push(file.url)
                }
                
            },

            userImgExceed(files) {
                // console.log(files)
                let newFile = files[0]
                // 先清空已经上传的文件
                this.$refs.userImgUpload.clearFiles()
                // 再手动添加新上传的文件，达到一个覆盖的效果
                this.$refs.userImgUpload.handleStart(newFile)
            },

            userImgRemove(){
                // 在修改个人信息中移除照片后，在数组中同时删除这一照片
                this.img_preview.pop()
                this.formModifyUI.userImg = ''
            },

            modifyUserInfo() {
                // 用户必须作出最少一项修改
                // 如果修改名字和原来的名字一样，则视为没有修改
                if (this.formModifyUI.nickname == this.$store.state.userInfo.nickname) {
                    this.formModifyUI.nickname = ''
                }

                if (this.formModifyUI.nickname == ''
                    && this.formModifyUI.userImg== '') {
                    this.$message.error('请作出最少一项修改')
                }
                else {
                    // 使用 formdata 传数据
                    let modifyForm = new FormData
                    // token 用于确定用户以及身份验证
                    modifyForm.append("token", this.$store.state.token)
                    modifyForm.append("nickname", this.formModifyUI.nickname)
                    modifyForm.append("userImg", this.formModifyUI.userImg)
                    
                    axios({
                        method: 'post',
                        url: HostURL + 'api/modifyUserInfo/',
                        headers: {'Content-Type':  "multipart/form-data"},
                        data: modifyForm
                    })
                    .then(
                        (res)=>{
                            let state = res.data.state
                            let msg = res.data.msg
                            if (state == 'success') {
                                // 关闭修改用户信息对话框
                                this.formModifyUI.nickname = ""
                                this.formModifyUI.userImg = ""
                                this.$refs.userImgUpload.clearFiles()
                                this.changeDialogVisible_UI()
                                swal({
                                        title: '修改用户信息成功',
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
                                        // swal 事件的回调，改用户信息成功后，刷新页面
                                        (willContinue)=> {
                                            if (willContinue) {
                                                location.reload()
                                            }
                                        }
                                    )
                            }
                            else if (state == 'fail'){
                                // 在服务器端出现错误，用户信息修改失败
                                this.$message.error(msg)
                            }
                        }
                    )
                }

            }
        }
    }
</script>