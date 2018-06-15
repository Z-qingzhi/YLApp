<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  export default {
    name: 'PersistentFull',
    data: () => ({
      menuVisible: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 350px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>






<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
       <md-button class="md-icon-button" @click="showNavigation = true" v-if="NavState==1">
        <md-icon>menu</md-icon>
      </md-button>
        <span class="md-title" @click='GOhome()'>My Title</span>
         <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full" v-if="NavState!=1">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list :md-expand-single="expandSingle">

        <md-list-item md-expand v-for="(item,index) in router" v-if="item.hidden != true">
          <md-icon>{{item.iconCls}}</md-icon>
          <span class="md-list-item-text">{{item.name}}</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset" v-for="(item2,index2) in item.children"><a :href="'#'+item2.path" title="">{{item2.name}}</a></md-list-item>
          </md-list>
        </md-list-item>

     


      </md-list>
        </md-list>
      </md-app-drawer>



      <md-app-content class="main" :style="mainH">
          <router-view></router-view>
      </md-app-content>
    </md-app>


    <md-drawer :md-active.sync="showNavigation" v-if="NavState==1">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>

      <md-list>
        <md-list :md-expand-single="expandSingle">


           <md-list-item md-expand v-for="(item,index) in router" v-if="item.hidden != true">
            <md-icon>{{item.iconCls}}</md-icon>
            <span class="md-list-item-text">{{item.name}}</span>

            <md-list slot="md-expand">
              <md-list-item class="md-inset" v-for="(item2,index2) in item.children">{{item2.name}}</md-list-item>
            </md-list>
          </md-list-item>

      </md-list>
      </md-list>
    </md-drawer>


  </div>
</template>

<script>
// import '../assets/js/jquery-2.2.0.js'
import router from '../router.js'

  
  var vum = {
    name: 'Temporary',
    created:function(){
      this.router = router;
      // this.$router.push('/login');
      var b = $(window).height();
      this.mainH.height =(b-66)+'px';
      var This = this;
      function checkScreen(){
        var a = $(window).width();
        if(a<600){
          This.NavState=1;
        }else{
          This.NavState=0;
        }
      }
      checkScreen();
      $(window).resize(function(){
        checkScreen();
      })
    },
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      NavState:0,
      expandNews: false,
      expandSingle: true,
      router:'',
      menuVisible: true,
      mainH:{
      	height:'0px',
      }
    }),
    methods:{
	 toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      GOhome:function(){
        
      }
    }
  }
  export default vum;


</script>

<style lang="scss" scoped>
  .page-container{
    height:100%;
  }
  .md-drawer[data-v-5e693dc2]{
    width:300px;
  }
  .md-app {
    min-height: 100%;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .main{
  	overflow: hidden;
  	overflow-y:auto;
  }
  .md-overlay {
		background: rgba(0, 0, 0, 0) !important;
	}



  
</style>