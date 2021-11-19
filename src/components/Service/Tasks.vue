<template>
<section class="tasks">
    <div class="container">
        <h2 class="title tasks-title">Задачи, которые решает система</h2>
        <div class="task" v-for="task,i in tasks" :key="i">
            <div class="task-number">{{i+1}}</div>
            <h5 class="task-header">{{task.name}}</h5>
            <p class="task-description">{{task.description}}</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        tasks: Array
    }
}
</script>

<style>
.tasks{
    padding: 50px 0;
}
.tasks .container{
    background: rgb(250, 250, 250);
}
.task{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}
.task-number{
    background: #E3C64A;
    height: 50px;
    width: 50px;
    font-weight: 800;
    font-size: 25px;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.task-header{
    font-size: 20px;
    color: #333;
    text-align: center;
}
.task-description{
    text-align: center;
    color: #686868;
}
.tasks-title{
    padding: 20px;
    margin-bottom: 0;
}
</style>
