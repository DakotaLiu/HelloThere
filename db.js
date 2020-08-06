import dotenv from 'dotenv'
import mongoose from 'mongoose'
import beautifyUnique from 'mongoose-beautiful-unique-validation'
import idPlugin from 'mongoose-id'
// import validator from 'validator'
dotenv.config()

const Schema = mongoose.Schema
mongoose.connect(process.env.DBURL)
mongoose.plugin(beautifyUnique)
mongoose.plugin(idPlugin)

// ---會員資料庫
const userSchema = new Schema({
  // 帳號
  account: {
    type: String,
    minlength: [4, 'Must be more than 4 characters'],
    maxlength: [20, 'Must be less than 20 characters'],
    unique: 'This account has already be used',
    required: [true, 'Please enter your account']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [4, 'Must be more than 4 characters'],
    maxlength: [20, 'Must be less than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: 'This email has already be used'
  },
  name: {
    // 資料類型是文字
    type: String,
    // 最小長度，自訂錯誤訊息
    minlength: [1, 'Must be more than 1 characters'],
    // 最大長度，自訂錯誤訊息
    maxlength: [20, 'Must be less than 20 characters'],
    // 必填欄位，自訂錯誤訊息
    required: [true, 'Please enter your name'],
    // 避免重複，只能設定 true，無法自訂錯誤訊息，除非使用插件
  },
  sex: {
    type: String,
    required: [true, 'Please select your sex'],
  },
  birthdate: {
    type: String,
    required: [true, 'Please select your Birth Date'],
  },
  // title 職業
  title: {
    type: String,
    required: [true, 'Please enter your title']
  },
  // role 職稱
  role: {
    type: String,
    required: [true, 'Please enter your role at firm']
  },
  // company 公司
  compnay: {
    type: String,
    required: [true, 'Please enter your company name']
  },
  // location 地點
  location: {
    type: String,
    required: [true, 'Please enter your location']
  },
  // hobby 愛好
  hobby: {
    type: Array,
    required: [true, 'Please list your hobby'],
    maxlength: [100, 'Must be less than 100 characters'],
  },
  // intro 自介
  intro: {
    type: String,
    required: [true, 'Please write down your intro'],
    maxlength: [200, 'Must be less than 200 characters'],
  },
  // looking 目前正在找
  looking: {
    type: String,
    required: [true, 'Please describe what you are looking for in this community'],
    maxlength: [200, 'Must be less than 200 characters'],
  },
  // photo 照片
  photo: {
    type: String,
    // required: [true, 'Please upload your photo']
  },
  linkedIn: {
    type: String
  },
  fb: {
    type: String
  },
  ig: {
    type: String
  },
  gitHub: {
    type: String
  },
  gitLab: {
    type: String
  },
  medium: {
    type: String
  },
  yt: {
    type: String
  },
  socialEmail: {
    type: String
  },
  link: {
    type: String
  }
}, {
  // 不要讓mongoose顯示修改紀錄
  versionKey: false
})

// 活動資料庫
const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, '活動標題未填']
  },
  organizer: {
    type: String,
    required: [true, '主辦方未填']
  },
  time: {
    type: Number,
    required: [true, 'Time 未填']
  },
  location: {
    type: String,
    required: [true, 'location 未填']
  },
  photo: {
    type: String,
    required: [true, '活動photo未填']
  },
  description: {
    type: String,
    required: [true, '活動描述未填']
  },
  attendances: {
    type: Array
  }
}, {
  // 不要紀錄資料修改次數
  versionKey: false
})

// 故事資料庫
const StorySchema = new Schema({
  photo: {
    type: String,
    required: [true, 'photo未填']
  },
  title: {
    type: String,
    required: [true, '標題未填']
  },
  content: {
    type: String,
    required: [true, 'content未填']
  },
  tags: {
    type: Array
  },
  author: {
    type: String,
    required: [true, 'author未填']
  },
  authorIntro: {
    type: String,
    required: [true, 'authorIntro未填']
  }
}, {
  // 不要紀錄資料修改次數
  versionKey: false
})

const ShopSchema = new Schema({
  Product: {
    photo: String,
    title: String,
    productIntro: String,
    price: Number
  }
}, {
  // 不要紀錄資料修改次數
  versionKey: false
})

// 一定要複數
const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
// const members = mongoose.model(process.env.COLLECTION_USER, memberSchema)
// const events = mongoose.model(process.env.COLLECTION_FILE, eventSchema)
// const stories = mongoose.model(process.env.COLLECTION_FILE, storySchema)
// const shops = mongoose.model(process.env.COLLECTION_FILE, shopSchema)
const connection = mongoose.connection

export default {
  users,
  // members,
  // events,
  // stories,
  // shops,
  connection
}
