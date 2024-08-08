<template>
    <div class="rocket">
        <div class="rocket-time">00:00</div>
        <div class="rocket-username">@tothemoon</div>
        <div class="rocket-balance">113</div>
        <button class="rocket-btn">
            <img src="@/assets/images/claim.png" alt="">
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .rocket{
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &-time{
            font-size: 18px;
            margin-bottom: 5px;
        }
        &-username{
            font-size: 25px;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        &-balance{
            color: #b51c00;
            font-size: 50px;
            margin-bottom: 20px;
            font-weight: 700;
        }
        &-btn{
            background: none;
            border: 0;
            padding: 0;
        }
    }
</style>