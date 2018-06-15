<template>
  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
       <md-button class="md-icon-button" @click="showNavigation = true" v-if="NavState==1">
        <md-icon>menu</md-icon>
      </md-button>
        <span class="md-title" @click='GOhome()'>My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list :md-expand-single="expandSingle">

        <md-list-item md-expand v-for="(item,index) in router" v-if="item.hidden != true">
          <md-icon>{{item.iconCls}}</md-icon>
          <span class="md-list-item-text">{{item.name}}</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset" v-for="(item2,index2) in item.children"><a href="#/main" title="">{{item2.name}}</a></md-list-item>
          </md-list>
        </md-list-item>

     


      </md-list>
        </md-list>
      </md-app-drawer>



      <md-app-content>
          <div id="mian">
            <router-view></router-view>
          </div>
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
    }),
    methods:{
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


  
</style>