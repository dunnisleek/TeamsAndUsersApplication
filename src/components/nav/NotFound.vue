<template>
       <div>
           <h2>This Page is not Found Kindly Click the Button below</h2>
           <router-link to="/teams">Homepage</router-link>
       </div>
</template>

<script>
       export default {
              
       }
</script>

<style scoped>
    div{
       background: peachpuff;
       width:500px;
       height: 50vh;
       padding: 100px 50px;
       margin:20px auto;
    }

    a{
       background: black;
       color:white;
       text-align: center;
       padding:15px ;
       text-decoration: none;
       border-radius: 8px;
       margin: auto;
       width:200px;
       text-align: center;
       margin: auto;
       position: absolute;
       left: 0;
      right: 0;
      transition: all 0.3s linear;
    }
    a:hover{
       background: rgba(0, 0, 0, 0.769);
       transition: all 0.3s linear;
       transform: scale(1.2);
    }
    h2{
       text-align: center;
       color:#282828;
    }
</style>