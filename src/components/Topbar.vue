<template>
    <div class="topbar">
        <router-link to="/withdraw" class="topbar-withdraw">{{ $t('withdraw.title') }}</router-link>
        <TonConnectButton/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import { TonConnectButton } from '@townsquarelabs/ui-vue';

export default {
    name: 'Topbar',
    components: {
        TonConnectButton
    },
    computed: {
        ...mapGetters([
            "getUser"
        ])
    }
}
</script>

<style lang="scss" scoped>
    .topbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        &-withdraw{
            background: #fff;
            height: 40px;
            line-height: 40px;
            padding: 0 25px;
            color: #000;
            font-size: 15px;
            font-weight: 500;
            border-radius: 20px;
            text-decoration: none;
        }
    }
</style>