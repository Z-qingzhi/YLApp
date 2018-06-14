<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
       <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>



      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
      </md-app-content>
    </md-app>
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style lang="scss" scoped>
  .page-container{
    height:100%;
  }
  .md-drawer[data-v-5e693dc2]{
    width:400px;
  }
  .md-app {
    min-height: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  @media (min-width: 1200px){

    .md-drawer.md-permanent {
        position: relative !important;
        -webkit-transform: translate3D(0,0,0) !important;
        transform: translate3D(0,0,0) !important;
    }
    .md-drawer {
        position: absolute !important;
        top: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        z-index: 8 !important;
        transform: translate3D(-100%,0,0) !important;
        transition: transform .4s cubic-bezier(.25,.8,.25,1) !important;
        will-change: transform,box-shadow !important;
        overflow-x: hidden !important;
        overflow-y: auto !important;
    }
  }
  
</style>