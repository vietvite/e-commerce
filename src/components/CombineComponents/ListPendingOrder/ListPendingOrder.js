import React, { Component } from "react";
import style from "./ListPendingOrder.module.scss";
import Bill from "../Bill/Bill";
const data = [
  {
    id: "13457468567945456",
    sellerId: "sellerID",
    customerId: "customerID",
    list: [
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title:
          "product 3 product 3 product 3 product 3 product 3product 3product 3 product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title: "product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title: "product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
    ],
    createDate: "26/04/2020",
    listQuantity: [1, 5, 2],
    totalPrice: 123123,
    isAccept: false,
  },
  {
    id: "1456457475467",
    sellerId: "sellerID",
    customerId: "customerID",
    list: [
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title: "product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title: "product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
      {
        id: "5ea3c6ffb8bb2e1d65401811",
        title: "product 3",
        price: 112313,
        description: "abcabc",
        stock: 12,
        imageUrl: "/assets/productImage/product10.jpg",
        category: {
          id: "5e9d7037f7535b6ab8c4475f",
          name: "sach",
          url: "url1",
          children: null,
        },
        seller: null,
        reviewStar: {
          _1star: 0,
          _2star: 0,
          _3star: 0,
          _4star: 0,
          _5star: 0,
        },
        createAt: null,
        updateAt: null,
        avarageStar: 0,
      },
    ],
    createDate: "26/04/2020",
    listQuantity: [1, 1, 5],
    totalPrice: 123123,
    isAccept: false,
  },
];
export default class ListPendingOrder extends Component {
  render() {
    return (
      <div className={style.listBill}>
        {data.map((bill, index) => (
          <Bill key={index} bill={bill} />
        ))}
      </div>
    );
  }
}
