<template>
    <div class="menu">
        <router-link to="/" class="menu-item">
            <i class="fa-solid fa-house"></i>
        </router-link>
        <router-link to="/roadmap" class="menu-item">
            <div class="menu-text">Info</div>
        </router-link>
        <router-link to="/referrals" class="menu-item">
            <div class="menu-text">Ref</div>
        </router-link>
        <router-link to="/tasks" class="menu-item">
            <div class="menu-text">Tasks</div>
        </router-link>
        <router-link to="/shop" class="menu-item">
            <div class="menu-text">Shop</div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    .menu{
        display: flex;
        justify-content: space-between;
        gap: 8px;
        &-item{
            background: rgb(249,242,214);
            background: linear-gradient(180deg, rgba(249,242,214,1) 0%, rgba(249,167,19,1) 100%);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #11103F;
            font-weight: 600;
            text-decoration: none;
            border-radius: 5px;
            font-size: 12px;
            text-transform: uppercase;
            height: 45px;
            line-height: 45px;
        }
        &-item.router-link-active{
            background: #f9a713;
            color: #11103F;
        }
        &-item:first-child{
            width: 180px;
        }
        &-icon{
            font-size: 18px;
        }
    }
</style>