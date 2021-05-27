<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img class="logo" src="https://statics.seatent.com/statics/9225c8aea2e640c39903189fbdfcb0fc/attachment/upload/image/20210519/7c9b367c26854bef8211f00b31f4e966.jpg" alt="" srcset="">
      <h2 class="title">管理系统后台</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input
              v-model:value="loginForm.account"
              size="large"
              placeholder="登录账户"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              v-model:value="loginForm.password"
              size="large"
              placeholder="登录密码"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a href="">忘记密码</a>
          </div>
          <div class="item">
            <a-button
              @click="logins"
              size="large"
              type="primary"
            >
              登录
            </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              v-model:value="regForm.account"
              size="large"
              placeholder="请输入账户"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              v-model:value="regForm.password"
              size="large"
              placeholder="请输入密码"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              placeholder="请输入邀请码"
            >
              <template #prefix>
                <MailOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-button
              @click="registers"
              size="large"
              type="primary"
            >
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
