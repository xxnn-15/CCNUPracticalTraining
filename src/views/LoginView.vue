<template>
    
    <div class="container" ref="container">
        <NavCom_ReturnHome></NavCom_ReturnHome>
        <div class="panels-container">
            <div class="panel  left-panel">
                <div class="panel-content">
                    <h3>去注册</h3>
                    <p></p>
                    <button class="panel-btn" @click="toSignUp">Sign up</button>
                </div>
                <img class="panel-img" src="@/assets/image/Login_1/2.webp" alt="">
            </div>
            <div class="panel right-panel">
                <div class="panel-content">
                    <h3>去登录</h3>
                    <p></p>
                    <button class="panel-btn" @click="toSignIn">Sign in</button>
                </div>
                <img class="panel-img" src="@/assets/image/Login_1/1.webp" alt="">
            </div>
        </div>
        
        <div class="forms-container">
            <div class="signin-signup">
                <div class="sign-in-form">
                    <h2 class="form-title">Sign in</h2>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669048346875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1064" width="25" height="25"><path d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z" p-id="1065" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="text" placeholder="Email" v-model="login_form.email">
                        </div>
                    </div>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669044141822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1377" width="25" height="25"><path d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z" p-id="1378" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="password" placeholder="Password" v-model="login_form.password">
                        </div>
                    </div>
                    <button @click="getToken" class="form-btn">Login</button>
                    <p class="social-text">Or sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-link">
                            <svg t="1669044470605" class="social-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1524" width="38" height="38"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-0.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z" p-id="1525"></path></svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg t="1669044488475" class="social-icon" viewBox="0 0 1257 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1752" width="38" height="38"><path d="M809.092 284.333c10.732 0 24.145 0 34.877 2.682-32.195-147.556-187.798-257.551-370.23-257.551-201.213 0-364.865 136.824-364.865 311.208 0 101.947 53.656 182.432 147.556 246.819l-37.559 109.996 128.776-64.387c45.608 10.732 80.485 18.78 126.093 18.78 13.414 0 24.145 0 34.877 0-5.365-24.145-10.732-50.974-10.732-77.802 0-160.97 136.824-289.746 311.208-289.746zM613.246 185.067c26.828 0 45.608 18.78 45.608 45.608s-18.78 45.608-45.608 45.608c-29.512 0-56.34-18.78-56.34-45.608 0-26.828 26.828-45.608 56.34-45.608zM355.694 276.284c-26.828 0-53.656-18.78-53.656-45.608s26.828-45.608 53.656-45.608c26.828 0 45.608 18.78 45.608 45.608 0 26.828-18.78 45.608-45.608 45.608z" p-id="1753"></path><path d="M1144.446 568.712c0-144.873-147.556-265.6-311.208-265.6-174.383 0-311.208 120.727-311.208 265.6 0 147.556 136.824 265.6 311.208 265.6 34.877 0 72.437-8.049 109.996-16.097l99.265 53.656-26.828-91.217c72.437-56.34 128.776-128.776 128.776-211.943zM731.292 523.105c-18.78 0-37.559-16.097-37.559-34.877s18.78-37.559 37.559-37.559c26.828 0 45.608 18.78 45.608 37.559 0 18.78-18.78 34.877-45.608 34.877zM932.503 523.105c-18.781 0-34.877-16.097-34.877-34.877s16.097-37.559 34.877-37.559c26.828 0 45.608 18.78 45.608 37.559 0 18.78-18.781 34.877-45.608 34.877z" p-id="1754"></path></svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg t="1669044442213" class="social-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1219" width="38" height="38"><path d="M728.864 497.056c-12.48-3.712-29.152-6.752-22.624-22.944 14.144-35.136 15.744-73.792 0.416-95.424-28.736-40.576-99.36-29.472-189.44 7.808 0-0.064-28.288 12.224-21.056-9.952 13.856-44.032 11.776-80.896-9.792-102.208-48.896-48.352-178.88 1.824-290.368 111.936C112.48 468.8 64 556.256 64 631.84c0 144.608 187.68 232.544 371.296 232.544 240.704 0 395.776-139.104 395.776-248.832C831.072 549.28 779.616 512.608 728.864 497.056zM435.808 812.576c-146.528 14.272-272.992-51.168-282.496-146.208-9.504-95.04 101.568-183.68 248.096-197.984 146.528-14.304 273.024 51.136 282.496 146.144C693.376 709.6 582.336 798.24 435.808 812.576z" p-id="1220"></path><path d="M897.632 235.136c-60.096-62.496-148.704-86.304-230.496-69.984l-0.032 0c-18.944 3.808-30.976 21.28-26.944 38.976 4.032 17.728 22.656 29.056 41.568 25.28 58.176-11.584 121.152 5.376 163.872 49.76 42.656 44.384 54.272 104.928 35.968 157.984l0 0c-5.952 17.28 4.128 35.776 22.592 41.376 18.368 5.568 38.144-3.872 44.096-21.12 0-0.032 0-0.096 0-0.096C973.92 382.656 957.728 297.568 897.632 235.136" p-id="1221"></path><path d="M807.904 317.088c-29.024-31.2-71.872-43.04-111.456-34.88-16.16 3.328-26.464 18.752-23.008 34.432 3.456 15.616 19.36 25.632 35.488 22.24l0 0.032c19.328-3.968 40.32 1.824 54.496 17.024 14.208 15.264 18.016 36.032 11.936 54.272l0.032 0c-5.056 15.232 3.52 31.584 19.264 36.512 15.744 4.864 32.608-3.424 37.696-18.688C844.768 390.752 836.992 348.288 807.904 317.088" p-id="1222"></path><path d="M484.928 504.064C413.12 485.76 331.968 520.8 300.8 582.72c-31.744 63.168-1.056 133.28 71.488 156.192 75.136 23.712 163.68-12.64 194.464-80.8C597.12 591.488 559.2 522.848 484.928 504.064zM430.08 662.528c-14.592 22.336-45.824 32.128-69.376 21.824-23.2-10.144-30.048-36.096-15.456-57.856 14.432-21.696 44.608-31.36 67.968-21.952C436.864 614.208 444.416 639.968 430.08 662.528zM478.176 603.328c-5.28 8.64-16.928 12.832-26.08 9.216-8.992-3.552-11.808-13.248-6.688-21.728 5.248-8.448 16.48-12.608 25.44-9.184C479.936 584.8 483.2 594.592 478.176 603.328z" p-id="1223"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="sign-up-form" v-show="register_form.step_0">
                    <h2 class="form-title">Sign up</h2>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669048346875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1064" width="25" height="25"><path d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z" p-id="1065" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="text" placeholder="Email" v-model="register_form.email">
                        </div>
                    </div>
                    <div class="form-input-container">
                        <div class="verification">
                            <div class="form-input-verification">
                                <i>
                                    <svg t="1669107714855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" width="25" height="25"><path d="M943.1 172c-2.4-0.2-245.1-25.3-413.8-147.8-5.1-3.7-11-5.6-17.3-5.6-6.2 0-12.2 1.9-17.3 5.6C326.9 146 83.3 171.8 80.9 172c-15.2 1.4-26.6 14.1-26.6 29.3 0 6.7 0.6 165.8 54.8 344.4 32.1 105.8 76.4 196.4 131.9 269.2 70.3 92.3 158.5 156 262 189.2 2.9 0.9 5.9 1.4 9 1.4s6.1-0.5 8.9-1.4c103.6-33.2 191.7-96.8 262-189.2 55.4-72.7 99.8-163.2 131.9-269.2 54.1-178.6 54.8-337.7 54.8-344.4C969.7 186.1 958.3 173.5 943.1 172zM910.1 227.2l-0.1 1.6c-2.9 58.1-13.4 174.4-51.4 299.9-66.7 220.1-183.1 360.1-346 416.1L512 945l-0.6-0.2C349 888.9 232.7 749.4 165.8 530.1c-39.8-130.5-49.4-254.2-51.8-301.4l-0.1-1.6 1.5-0.2c70.6-10.3 250.5-44.8 395.5-142.4l0.9-0.7 1 0.7C658 182.1 837.9 216.6 908.5 227L910.1 227.2z" p-id="996" fill="#8a8a8a"></path><path d="M641.8 351 467 580.3l-89-76.1c-5.3-4.5-12.1-7-19.1-7-8.6 0-16.8 3.7-22.4 10.3-10.5 12.3-9.1 31 3.3 41.5l112.7 96.4c5.2 4.4 12.4 7 19.6 7 0.9 0 1.8 0 2.7-0.1 8-0.8 15.4-5 20.3-11.4l193.7-254c4.8-6.3 6.8-14 5.7-21.8-1-7.8-5.1-14.7-11.3-19.5C670.1 335.6 651.6 338.1 641.8 351z" p-id="997" fill="#8a8a8a"></path></svg>
                                </i>
                                <input type="text" placeholder="Verification Code" v-model="register_form.verificationCode">
                            </div>
                            <el-button class="verification-btn" @click="sendEmail" :disabled="register_form.buttonDisabled"  >{{register_form.buttonValue}}</el-button>
                        </div>
                    </div>

                    <el-button class="form-btn" :disabled="register_form.buttonDisabled_next" @click="next">NEXT</el-button>
                    <p class="social-text">Or sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-link">
                            <svg t="1669044470605" class="social-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1524" width="38" height="38"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-0.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z" p-id="1525"></path></svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg t="1669044488475" class="social-icon" viewBox="0 0 1257 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1752" width="38" height="38"><path d="M809.092 284.333c10.732 0 24.145 0 34.877 2.682-32.195-147.556-187.798-257.551-370.23-257.551-201.213 0-364.865 136.824-364.865 311.208 0 101.947 53.656 182.432 147.556 246.819l-37.559 109.996 128.776-64.387c45.608 10.732 80.485 18.78 126.093 18.78 13.414 0 24.145 0 34.877 0-5.365-24.145-10.732-50.974-10.732-77.802 0-160.97 136.824-289.746 311.208-289.746zM613.246 185.067c26.828 0 45.608 18.78 45.608 45.608s-18.78 45.608-45.608 45.608c-29.512 0-56.34-18.78-56.34-45.608 0-26.828 26.828-45.608 56.34-45.608zM355.694 276.284c-26.828 0-53.656-18.78-53.656-45.608s26.828-45.608 53.656-45.608c26.828 0 45.608 18.78 45.608 45.608 0 26.828-18.78 45.608-45.608 45.608z" p-id="1753"></path><path d="M1144.446 568.712c0-144.873-147.556-265.6-311.208-265.6-174.383 0-311.208 120.727-311.208 265.6 0 147.556 136.824 265.6 311.208 265.6 34.877 0 72.437-8.049 109.996-16.097l99.265 53.656-26.828-91.217c72.437-56.34 128.776-128.776 128.776-211.943zM731.292 523.105c-18.78 0-37.559-16.097-37.559-34.877s18.78-37.559 37.559-37.559c26.828 0 45.608 18.78 45.608 37.559 0 18.78-18.78 34.877-45.608 34.877zM932.503 523.105c-18.781 0-34.877-16.097-34.877-34.877s16.097-37.559 34.877-37.559c26.828 0 45.608 18.78 45.608 37.559 0 18.78-18.781 34.877-45.608 34.877z" p-id="1754"></path></svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg t="1669044442213" class="social-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1219" width="38" height="38"><path d="M728.864 497.056c-12.48-3.712-29.152-6.752-22.624-22.944 14.144-35.136 15.744-73.792 0.416-95.424-28.736-40.576-99.36-29.472-189.44 7.808 0-0.064-28.288 12.224-21.056-9.952 13.856-44.032 11.776-80.896-9.792-102.208-48.896-48.352-178.88 1.824-290.368 111.936C112.48 468.8 64 556.256 64 631.84c0 144.608 187.68 232.544 371.296 232.544 240.704 0 395.776-139.104 395.776-248.832C831.072 549.28 779.616 512.608 728.864 497.056zM435.808 812.576c-146.528 14.272-272.992-51.168-282.496-146.208-9.504-95.04 101.568-183.68 248.096-197.984 146.528-14.304 273.024 51.136 282.496 146.144C693.376 709.6 582.336 798.24 435.808 812.576z" p-id="1220"></path><path d="M897.632 235.136c-60.096-62.496-148.704-86.304-230.496-69.984l-0.032 0c-18.944 3.808-30.976 21.28-26.944 38.976 4.032 17.728 22.656 29.056 41.568 25.28 58.176-11.584 121.152 5.376 163.872 49.76 42.656 44.384 54.272 104.928 35.968 157.984l0 0c-5.952 17.28 4.128 35.776 22.592 41.376 18.368 5.568 38.144-3.872 44.096-21.12 0-0.032 0-0.096 0-0.096C973.92 382.656 957.728 297.568 897.632 235.136" p-id="1221"></path><path d="M807.904 317.088c-29.024-31.2-71.872-43.04-111.456-34.88-16.16 3.328-26.464 18.752-23.008 34.432 3.456 15.616 19.36 25.632 35.488 22.24l0 0.032c19.328-3.968 40.32 1.824 54.496 17.024 14.208 15.264 18.016 36.032 11.936 54.272l0.032 0c-5.056 15.232 3.52 31.584 19.264 36.512 15.744 4.864 32.608-3.424 37.696-18.688C844.768 390.752 836.992 348.288 807.904 317.088" p-id="1222"></path><path d="M484.928 504.064C413.12 485.76 331.968 520.8 300.8 582.72c-31.744 63.168-1.056 133.28 71.488 156.192 75.136 23.712 163.68-12.64 194.464-80.8C597.12 591.488 559.2 522.848 484.928 504.064zM430.08 662.528c-14.592 22.336-45.824 32.128-69.376 21.824-23.2-10.144-30.048-36.096-15.456-57.856 14.432-21.696 44.608-31.36 67.968-21.952C436.864 614.208 444.416 639.968 430.08 662.528zM478.176 603.328c-5.28 8.64-16.928 12.832-26.08 9.216-8.992-3.552-11.808-13.248-6.688-21.728 5.248-8.448 16.48-12.608 25.44-9.184C479.936 584.8 483.2 594.592 478.176 603.328z" p-id="1223"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="sign-up-form" v-show="register_form.step_1">
                    <h2 class="form-title">Sign up</h2>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669048346875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1064" width="25" height="25"><path d="M874.666667 181.333333H149.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666667v512c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V256c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v25.6L512 516.266667l-373.333333-234.666667V256c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 533.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V356.266667l356.266666 224c4.266667 4.266667 10.666667 4.266667 17.066667 4.266666s12.8-2.133333 17.066667-4.266666l356.266666-224V768c0 6.4-4.266667 10.666667-10.666666 10.666667z" p-id="1065" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="text" placeholder="Email" v-model="register_form.email" disabled>
                        </div>
                    </div>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669044244969" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1750" width="25" height="25"><path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" p-id="1751" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="text" placeholder="Nickname" v-model="register_form.nickname">
                        </div>
                    </div>
                    <div class="form-input-container">
                        <div class="form-input">
                            <i>
                                <svg t="1669044141822" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1377" width="25" height="25"><path d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z" p-id="1378" fill="#8a8a8a"></path></svg>
                            </i>
                            <input type="password" placeholder="Password" v-model="register_form.password">
                        </div>
                    </div>
                    <div class="form-input-container-userimg">
                        <div class="form-input">
                            <i>
                                <svg t="1669147853618" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2003" width="25" height="25"><path d="M814.9 828H283.7c-69 0-125.1-56.1-125.1-125.1V254.2c0-69 56.1-125.1 125.1-125.1h531.2c69 0 125.1 56.1 125.1 125.1v448.7c0 69-56.1 125.1-125.1 125.1zM283.7 179.2c-41.4 0-75 33.7-75 75v448.7c0 41.4 33.7 75 75 75h531.2c41.4 0 75-33.7 75-75V254.2c0-41.4-33.7-75-75-75H283.7z" fill="#8a8a8a" p-id="2004"></path><path d="M386 378.9m-74.2 0a74.2 74.2 0 1 0 148.4 0 74.2 74.2 0 1 0-148.4 0Z" fill="#8a8a8a" p-id="2005"></path><path d="M280.5 711.6c-5.5 0-10.9-1.8-15.5-5.4-10.8-8.6-12.7-24.3-4.1-35.1 26.2-33.1 61.2-58.9 98.5-72.4 40.2-14.6 80.8-3.9 116.6 5.6 32.2 8.5 60.1 15.7 79.5 4.2 15.9-9.5 28.2-27.2 38.5-43.1 34.8-53.8 84.6-88.2 133-92.1 27.2-2.1 66.2 3.9 103.4 45.1 9.3 10.3 8.5 26-1.7 35.3-10.2 9.3-26 8.5-35.3-1.7-19-20.9-39.6-30.6-62.3-28.9-32.6 2.6-69 29.3-95.1 69.5-13.3 20.6-29.7 43.9-54.9 58.9-37.4 22.4-80.2 11.1-117.8 1.2-31.6-8.3-61.3-16.1-86.9-6.9-28.7 10.5-55.8 30.5-76.4 56.5-4.8 6-12.1 9.3-19.5 9.3z" fill="#8a8a8a" p-id="2006"></path></svg>
                            </i>
                            <input type="text" disabled placeholder="User image" v-model="register_form.userImgName">
                        </div>
                        <el-upload
                            class="register-userimg"
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
                    </div>
                    <el-button class="form-btn" @click="next">register</el-button>
                </div>
            </div>
        </div>
        <el-image-viewer
            v-if="register_form.showViewer"
            @close="()=>{register_form.showViewer=false}"
            :url-list="register_form.img_preview"
            :hide-on-click-modal=true
            :initial-index="0"
        />
    </div>
</template>

<script>
    import NavCom_ReturnHome from '@/components/navComponents/NavCom_ReturnHome.vue';
    import axios from 'axios'
    import Qs from 'qs'
    import swal from 'sweetalert'
    import { HostURL } from '@/axios'
    export default {
        components: {
            "NavCom_ReturnHome": NavCom_ReturnHome,
        },
        data() {
            return {
                login_form: {
                    email: "",
                    password: "",
                },
                register_form: {
                    email: "",
                    verificationCode: "",
                    password: "",
                    nickname: "",
                    userImg: "",
                    userImgName: "",
                    showViewer: false,
                    img_preview: [],
                    stepActive: 0,
                    step_0: true,
                    step_1: false,
                    // 对获取验证码按钮的控制
                    buttonDisabled: false,
                    buttonDisabled_next: true,
                    buttonTime: 0,
                    buttonValue: "get",
                    register_success: false
                }
            }
        },
        computed: {
            userLogin() {
                return this.$store.state.userLogin
            }
        },
        methods: {
            toSignUp() {
                this.$refs.container.classList.add('sign-up-mode')
            },
            toSignIn() {
                this.$refs.container.classList.remove('sign-up-mode')
            },
            getToken() {
                if (this.userLogin) {
                    // 用户已经登录
                        this.$message.error('已经登录，请先注销')
                        return
                }
                axios({
                    method:'post',
                    url: HostURL + 'api/getToken/',
                    data: Qs.stringify({
                        email: this.login_form.email,
                        password: this.login_form.password
                    })
                })
                .then((res)=>{
                    if(res.data == 'user none'){
                        this.$message.error('用户不存在')
                        return
                    }
                    else if(res.data == 'password error'){
                        this.$message.error('密码错误')
                        return
                    }
                    else {
                        // 登录成功
                        // 将 token 放到浏览器缓存
                        localStorage.setItem('token',res.data)
                        swal({
                            title: "登录成功",
                            content: "欢迎进入系统",
                            icon: "success",
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
                        .then((willContinue)=>{
                            if (willContinue) {
                                // 这个返回值是 buttons 中的 value 值
                                
                                // 将 token 存放到 vuex 中
                                this.$store.commit('setToken', localStorage.getItem('token'))
                                // token 的值改变后会自动在 app.vue 中，调用 tryAutoLogin 函数

                                // 清空输入栏
                                this.login_form.email = ""
                                this.login_form.password = ""
                            }
                        })
                    }
                })
            },

            userImgPreview() {
                this.register_form.showViewer=true
            },

            userImgChange(file) {
            //将每次图片变化的时候，实时的进行监听，更改this.userImg图片数据
                this.register_form.userImg = file.raw
                this.register_form.userImgName = file.raw.name
                let type = file.raw.type
                let size = file.raw.size
                if(type !== "image/jpeg"){
                    this.$message.error('用户头像必须是 JPG 格式')
                    this.$refs.userImgUpload.handleRemove(file)
                }
                if(size / 1024 > 500) {
                    this.$message.error('用户头像大小必须小于 500KB')
                    this.$refs.userImgUpload.handleRemove(file)
                }

                // 预览图列表中添加要预览的图像
                if (this.register_form.img_preview.length == 0) { 
                    this.register_form.img_preview.push(file.url)
                }
                else {
                    while (this.register_form.img_preview.length > 0) {
                        this.register_form.img_preview.pop()
                    }
                    this.register_form.img_preview.push(file.url)
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

            userImgRemove() {
                // 向预览数组中删除添加的文件
                this.register_form.img_preview.pop()
                this.register_form.userImgName = ""
            },

            clock() {
                if (this.register_form.buttonTime>1) {
                    this.register_form.buttonTime--
                    this.register_form.buttonValue = this.register_form.buttonTime + 's'
                    this.circulationTimer = setTimeout(this.clock, 1000)
                }
                else {
                    this.register_form.buttonTime = 0
                    this.register_form.buttonValue = 'get'
                    this.register_form.buttonDisabled = false
                    clearTimeout(this.circulationTimer)
                }
            },

            sendEmail() {
                // 请求服务器发送验证码
                if(this.register_form.email == '') {
                    this.$message.error('邮箱不能为空')
                    return
                }
                // 设置用户一段时间后才可再次点击发送验证码
                this.register_form.buttonDisabled = true
                // 30s 后才可再次点击
                this.register_form.buttonTime = 30
                this.clock()

                axios({
                    method:'post',
                    url: HostURL + 'api/sendVerificationCode/',
                    data: Qs.stringify({
                        // 发送邮件，注册的时候还没有 token 直接发送邮箱即可
                        email: this.register_form.email,
                        register: 'true'
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
                            // 可以点击下一步按钮
                            this.register_form.buttonDisabled_next = false
                        }
                    }
                )
            },

            next() {
                if (this.register_form.stepActive==0) {
                    // 将用户输入的验证码发送到服务器，进行验证
                    axios({
                        method:'post',
                        url: HostURL + 'api/checkVerificationCode/',
                        // 注册用户时没有 token, 将用户邮箱作为唯一标识，替代 token
                        data: Qs.stringify({
                            verificationCode: this.register_form.verificationCode,
                            email: this.register_form.email,
                            register: 'true'
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
                                this.register_form.step_0 = false
                                // 重新设置下一步按钮不可点击，以正确处理用户的下一次请求
                                this.register_form.buttonDisabled_next = true
                                // 通过验证，可以进入下一步
                                this.register_form.stepActive++
                                this.register_form.step_1 = true
                            }
                        }
                    )
                }
                if (this.register_form.stepActive==1) {
                    // 将用户输入的密码、昵称、图片等发送给服务器，创建用户
                    if(this.register_form.nickname == "") {
                        this.$message.error('昵称不能为空');
                        return 
                    }
                    if(this.register_form.password == "") {
                        this.$message.error('密码不能为空');
                        return 
                    }
                    if(this.register_form.userImg == "") {
                        this.$message.error('头像不能为空');
                        return 
                    }
                    const registerForm = new FormData();
                    registerForm.append("email", this.register_form.email)
                    registerForm.append("password", this.register_form.password)
                    registerForm.append("nickname", this.register_form.nickname)
                    registerForm.append("userImg", this.register_form.userImg)

                    axios({
                        method:'post',
                        url: HostURL + 'api/register/',
                        headers: {'Content-Type':  "multipart/form-data"},
                        data: registerForm
                    })
                    .then((res)=>{
                        if(res.data == "ok") {
                            // 隐蔽第二步骤的窗口
                            this.register_form.step_1 = false
                            // 清空输入栏
                            this.register_form.email = ''
                            this.register_form.verificationCode = ''
                            this.register_form.password = ''
                            this.register_form.nickname = ''
                            this.$refs.userImgUpload.clearFiles()
                            // 注册成功，回到第一步
                            this.register_form.stepActive = 0
                            this.register_form.step_0 = true
                            // 通知用户注册成功
                            swal({
                                title: '注册成功',
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
                        }
                        else {
                            this.$message.error('注册失败')
                            return 
                        }
                    })
                    
                }
            }

        }
    }
</script>

<style lang="less" scoped>

.container {
    width: 100%;
    min-height: 100vh;
    font-size: 14px;
    /* sans-serif 是浏览器定义的字体，这样是为了确保字体可用 */
    font-family: sans-serif;
    background-color: #fff;
    overflow: hidden;
}

.container::before {
    content: '';
    position: absolute;
    top: -10%;
    right: 45%;
    transform: translateY(-50%);
    transition: 1.8s ease-in-out;
    width: 2300px;
    height: 2300px;
    background-image: linear-gradient(-45deg, #8a6eff 0%, #ad99fe 100%);
    border-radius: 50%;
    z-index: 3;
}

.panels-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.panel {
    text-align: center;
    z-index: 9;
    .panel-content {
        color: #fff;
        transition: transform 0.9s ease-in-out;
        transition-delay: 0.6s;
    }

    h3 {
        font-size: 22px;
        font-weight: 600;
        line-height: 1;
    }
    p {
        padding: 10px 0;
    }
    .panel-btn {
        width: 130px;
        height: 41px;
        outline: none;
        border: 2px solid #fff;
        border-radius: 49px;
        background: none;
        color: #fff;
        font-weight: 600;
        // text-transform:uppercase 定义无小写字母，仅有大写字母
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s;
    }
    
}


.left-panel {
    padding: 42px 17% 28px 12%;
    pointer-events: all;
    .panel-img {
        width: 90%;
        transition: transform 1.1s ease-in-out;
        transition-delay: 0.4s;
    }
}

.right-panel {
    padding: 42px 12% 28px 17%;
    pointer-events: none;
    .panel-img {
        width: 60%;
        transition: transform 1.1s ease-in-out;
        transition-delay: 0.4s;
    }
    .panel-content,
    .panel-img {
        transform: translateX(800px);
    }
}

.container.sign-up-mode::before {
    right: 52%;
    transform: translate(100%, -50%);
}

.container.sign-up-mode {
    .left-panel {
        pointer-events: none;
        .panel-content,
        .panel-img {
            transform: translateX(-800px);
        }
    }

    .right-panel {
        pointer-events: all;
        .panel-content,
        .panel-img {
            transform: translateX(0);
        }
    }

    .signin-signup {
        left: 25%;
    }

    .sign-up-form {
        z-index: 2;
        opacity: 1;
    }
    .sign-in-form {
        z-index: 1;
        opacity: 0;
    }
}

.forms-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.signin-signup {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    transition: 1s 0.7s ease-in-out;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;

}

.sign-in-form,
.sign-up-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1 / span 1;  // span 表示占几列 这里是为了居中
    grid-row: 1 / span 1;
    transition: all 0.2s 0.7s;
}

.sign-up-form {
    z-index: 1;
    opacity: 0;
}

.sign-in-form {
    z-index: 2;
}

.form-title {
    font-size: 30px;
    color: #444;
    margin-bottom: 10px;
}

.form-input-container {
    width: 100%;
    max-width: 380px;
    height: 55px;
    margin: 10px 0;
}

.form-input-container-userimg {
    width: 100%;
    max-width: 380px;
    height: 230px;
    margin: 10px 0;
}

:deep .register-userimg {
    margin-top: 15px;
}

.form-input {
    width: 100%;
    max-width: 380px;
    height: 55px;
    line-height: 55px;
    background-color: #f0f0f0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 6px;
    background-color: #f0f0f0;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }

    input {
        outline: none;
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 600;
        color: #333;
        line-height: 1;
    }

    input::placeholder {
        color: #aaa;
        font-weight: 500;
    }

}
.verification {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-input-verification {
    width: 228px;
    height: 55px;
    line-height: 55px;
    background-color: #f0f0f0;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 0 6px;
    i {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }

    input {
        outline: none;
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 600;
        color: #333;
        line-height: 1;
    }
    input::placeholder {
        color: #aaa;
        font-weight: 500;
    }
}

:deep .verification-btn {
    width: 100px;
    height: 55px;
    outline: none;
    border: none;
    border-radius: 55px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #d1c2d3;
    cursor: pointer;
    transform: translateX(9px);
}

:deep .verification-btn:hover {
    background-color: #8076a3;
}

.form-btn {
    width: 150px;
    height: 49px;
    margin: 10px 0;
    outline: none;
    border: none;
    border-radius: 49px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    background-color: #8a6eff;
    cursor: pointer;
}

.form-btn:hover {
    background-color: #6c48ff;
}

.social-text {
    padding: 10px 0;
}

.social-media {
    display: flex;
    justify-content: center;
}

.social-link {
    margin: 0 4px;
    color: #333;
    text-decoration: none;
    transition: 0.3s;
}

.social-link:hover {
    color: #6c48ff;
}

.social-icon {
    fill: currentColor;
}

</style>