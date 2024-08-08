<template>
  <div class="home">
    <div class="top">
      <TonConnectButton/>
    </div>
    <div class="center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Chat ID</th>
            <th scope="col">Username</th>
            <th scope="col">Адрес</th>
            <th scope="col">Сумма</th>
            <th scope="col">Действие</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payout in payouts" :key="payout.id">
            <th scope="row">{{ formatDate(payout.date) }}</th>
            <td>{{ payout.chat_id }}</td>
            <td>{{ payout.username }}</td>
            <td>{{ payout.address }}</td>
            <td>{{ payout.ton }} TON</td>
            <td><button class="btn btn-primary" @click="sendTransaction(payout.ton, payout.raw_address)">Вывести</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { TonConnectButton, useTonConnectUI } from '@townsquarelabs/ui-vue';
import axios from 'axios'
import { beginCell } from '@ton/ton'

export default {
  name: 'HomeView',
  data() {
    return {
      payouts: null
    }
  },
  components: {
    TonConnectButton
  },
  mounted() {
    axios.get('https://admin.sendonater.ru/request.php?t=payouts&a=list').then(res => {
      this.payouts = res.data.list
    })
  },
  methods: {
    formatDate(timestamp) {
      // Создаем объект Date из timestamp
      const date = new Date(timestamp * 1000); // timestamp в секундах, поэтому умножаем на 1000

      // Определяем вспомогательную функцию для добавления ведущего нуля
      const pad = (number) => number.toString().padStart(2, '0');

      // Форматируем дату
      const day = pad(date.getDate());
      const month = pad(date.getMonth() + 1); // Месяцы в JavaScript начинаются с 0
      const year = date.getFullYear();
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());

      // Собираем строку в нужном формате
      return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    }
  },
  setup(){
    const [tonConnectUI, setOptions] = useTonConnectUI();
    setOptions({ 
        language: 'ru',
        twaReturnUrl: "https://t.me/asadslavatestbot/myapp"
    });
    const sendTransaction = (ton, wallet) => {
      const myTransaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60,
        messages: [
            {
                address: wallet,
                amount: ton * 1000000000,
                payload: beginCell().storeUint(0,32).storeStringTail('From SpaceDog with love ♥️').endCell().toBoc().toString('base64')
            }
        ]
      }
      tonConnectUI.sendTransaction(myTransaction).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
    return {sendTransaction}
  }
}
</script>

<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    .top{
      display: flex;
      justify-content: flex-end;
    }
  }
</style>