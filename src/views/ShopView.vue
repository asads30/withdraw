<template>
    <div class="shop page">
        <canvas id="canvas" width="100%" height="100%"></canvas>
        <div class="page-box">
            <Topbar />
            <div class="shop_box">
                <div class="shop_wrapper">
                    <div class="shop_list">
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/08.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product8') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span v-html="$t('shop.profitability2')"></span></div>
                                </div>
                                <button class="shop_btn shop_btn2" @click="sendSdt" :disabled="store?.state?.user?.coins < 25000 || loading" v-if="check == 'done'">{{ $t('shop.buy') }} 25K SDT</button>
                                <button class="shop_btn shop_btn2" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 25K SDT</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/01.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product1') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>5 TON + 0.5 TON + 3K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>24 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(5, 1)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done' && store?.state?.user?.ton < 5">{{ $t('shop.buy') }} 5 TON</button>
                                <button class="shop_btn" @click="sendBalance(1)" :disabled="store?.state?.user?.flight == 1" v-else-if="check == 'done' && store?.state?.user?.ton > 5">{{ $t('shop.buy') }} 5 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 5 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/02.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product2') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>10 TON + 1 TON + 7K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>24 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(10, 2)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done' && store?.state?.user?.ton < 10">{{ $t('shop.buy') }} 10 TON</button>
                                <button class="shop_btn" @click="sendBalance(2)" :disabled="store?.state?.user?.flight == 1" v-else-if="check == 'done' && store?.state?.user?.ton > 10">{{ $t('shop.buy') }} 10 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 10 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/03.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product3') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>25 TON + 2.5 TON + 15K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>36 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(25, 3)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done' && store?.state?.user?.ton < 25">{{ $t('shop.buy') }} 25 TON</button>
                                <button class="shop_btn" @click="sendBalance(3)" :disabled="store?.state?.user?.flight == 1" v-else-if="check == 'done' && store?.state?.user?.ton > 25">{{ $t('shop.buy') }} 25 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 25 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/04.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product4') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>70 TON + 7 TON + 25K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>36 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(70, 4)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done'">{{ $t('shop.buy') }} 70 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 70 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/05.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product5') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>150 TON + 15 TON + 50K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>48 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(150, 5)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done'">{{ $t('shop.buy') }} 150 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 150 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/06.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product6') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>300 TON + 30 TON + 75K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>48 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(300, 6)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done'">{{ $t('shop.buy') }} 300 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 300 TON</button>
                            </div>
                        </div>
                        <div class="shop_item">
                            <div class="shop_img">
                                <img src="@/assets/images/products/07.png" alt="">
                            </div>
                            <div class="shop_text">
                                <div class="shop_title">{{ $t('shop.product7') }}</div>
                                <div class="shop_options">
                                    <div class="shop_option"><span>{{ $t('shop.profitability') }}</span> <span>500 TON + 50 TON + 100K SDT</span></div>
                                    <div class="shop_option"><span>{{ $t('shop.time') }}</span> <span>60 {{ $t('boost.hours') }}</span></div>
                                </div>
                                <button class="shop_btn" @click="sendTransaction(500, 7)" :disabled="store?.state?.user?.flight == 1" v-if="check == 'done'">{{ $t('shop.buy') }} 500 TON</button>
                                <button class="shop_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" v-else>{{ $t('shop.buy') }} 500 TON</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
        <div class="modal fade" ref="vuemodal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-box">
                            <h5 class="modal-top">Подпишись на официальный канал Space Dog</h5>
                            <p class="modal-des">Чтобы сделать покупку подпишитесь на официальный канал</p>
                            <a href="https://t.me/SpaceDogToken" class="modal-go">Выполнить</a>
                            <button class="modal-check" @click="checkStatus">Проверить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useTonConnectUI, useTonAddress } from '@townsquarelabs/ui-vue';
import { beginCell } from '@ton/ton'
import Topbar from '@/components/Topbar.vue';
import Menu from '@/components/Menu.vue';
import axios from 'axios'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

export default {
  setup() {
    const [tonConnectUI, setOptions] = useTonConnectUI();
    const store = useStore()
    const hashText = ref('')
    const loading = ref(false)
    const toast = useToast()
    const check = ref('done')
    const address = useTonAddress()
    const vuemodal = ref(null)
    setOptions({ 
        language: 'ru',
        twaReturnUrl: "https://t.me/asadslavatestbot/myapp"
    });
    const checkChannel = () => {
        const data = {
            t: "tasks",
            a: "get",
            chat_id: store?.state?.user?.chat_id
        }
        axios.post(`https://sendonater.ru/request`, data).then(res => {
            if(res.data.status == 200){
                check.value = res.data.tasks[0].status
            }
        })
    }
    const sendTransaction = (ton, id) => {
        try {
            const data = {
                t: "transactions",
                a: "create",
                admin_address: store?.state?.user?.admin_address,
                chat_id: store?.state?.user?.chat_id,
                wallet: address.value,
                product_id: id
            }
            axios.post(`https://sendonater.ru/request`, data).then(res => {
                if(res.data.status == 200){
                    hashText.value = res.data.hash
                    const myTransaction = {
                        validUntil: Math.floor(Date.now() / 1000) + 60,
                        messages: [
                            {
                                address: store?.state?.user?.admin_address,
                                amount: ton * 1000000000,
                                payload: beginCell().storeUint(0,32).storeStringTail(res.data.hash).endCell().toBoc().toString('base64')
                            }
                        ]
                    }
                    tonConnectUI.sendTransaction(myTransaction).then(res => {
                        const data = {
                            t: "transactions",
                            a: "check",
                            chat_id: store?.state?.user?.chat_id,
                            hash: hashText.value,
                            boc: res.boc
                        }
                        axios.post(`https://sendonater.ru/request`, data)
                    }).catch(error => {
                        console.log(error)
                    });
                }
            })
        } catch (error) {
            console.log(error)
        }
    };
    const sendBalance = (id) => {
        const data = {
            t: "transactions",
            a: "buy_product",
            chat_id: store?.state?.user?.chat_id,
            product_id: id
        }
        axios.post(`https://sendonater.ru/request`, data).then(res => {
            if(res.data.status == 200){
                toast.success('Успешно! Вы приобрели ракету!')
            }
        })
    }
    const sendSdt = () => {
        loading.value = true
        const data = {
            t: "transactions",
            a: "buy_game",
            chat_id: store?.state?.user?.chat_id
        }
        axios.post(`https://sendonater.ru/request`, data).then(res => {
            if(res.data.status == 200){
                loading.value = false
                if(res.data.win == 1){
                    toast.success(res.data.win_text)
                } else{
                    toast.error('Извините, Попробуйте в следующий раз.')
                }
            } else{
                toast.error('Ошибка')
            }
        })
    }
    const checkStatus = () => {
        const data = {
            t: "tasks",
            a: "check",
            chat_id: store?.state?.user?.chat_id,
            id: 1
        }
        axios.post(`https://sendonater.ru/request`, data).then(res => {
            if(res?.data?.status == 200){
                if(res.data.task_status == 'error'){
                    toast.error('Вы не выполнили задание!')
                } 
                if(res.data.task_status == 'success'){
                    vuemodal.value.hide();
                    toast.success('Успешно выполнили задание!')
                    checkChannel()
                }
            }
        })
    }
    checkChannel()
    return { sendTransaction, sendBalance, sendSdt, store, check, checkStatus };
  },
  components: {
    Topbar,
    Menu
  }
};
</script>

<style lang="scss" scoped>
    .shop{
        &_box{
            height: calc(100vh - 165px);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 20px;
        }
        &_wrapper{
            background: rgba(27, 27, 53, 0.78);
            padding: 20px;
            border-radius: 10px;
            height: 100%;
            width: 100%;
        }
        &_list{
            display: flex;
            flex-direction: column;
            gap: 25px;
            overflow-y: auto;
            height: 100%;
        }
        &_item{
            display: flex;
            align-items: center;
            gap: 12px;
        }
        &_img{
            img{
                width: 100px;
                border-radius: 5px;
            }
        }
        &_title{
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 0px;
        }
        &_options{
            display: flex;
            flex-direction: column;
            margin-bottom: 8px;
        }
        &_option{
            display: flex;
            flex-direction: column;
            font-size: 12px;
            span:last-child{
                font-weight: 600;
            }
        }
        &_btn{
            background: #24A1DE;
            color: #fff;
            padding: 0 15px;
            border: 0;
            height: 32px;
            line-height: 32px;
            border-radius: 5px;
            font-size: 14px;
            font-weight: 600;
        }
        &_btn:disabled{
            background: rgb(99, 110, 114);
        }
        &_btn2{
            background: linear-gradient(180deg, rgb(249, 242, 214) 0%, rgb(249, 167, 19) 100%);
            color: #000;
        }
    }
    .modal-content{
        color: #000;
    }
    .modal-box{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .modal-go{
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #24a1de;
        font-size: 14px;
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        border-radius: 5px;
        border: 0;
    }
    .modal-check{
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #2ecc71;
        font-size: 14px;
        color: #000;
        font-weight: 700;
        text-decoration: none;
        border-radius: 5px;
        border: 0;
    }
</style>