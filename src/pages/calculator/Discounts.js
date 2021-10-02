import React, { useState, useEffect } from "react";

import Main from "../../components/Main";
import { Card, Title, Label, Input, Coupon, Result } from "../../components/Card";

import Discount from "../../assets/svg/discount.svg";

export default function Discounts() {
	const [price, setPrice] = useState("");
	const [discount, setDiscount] = useState("");
	const [coupon, setCoupon] = useState(0);
	const [totalDiscount, setTotalDiscount] = useState("");
	const [saving, setSaving] = useState("");
	const [result, setResult] = useState("");

	useEffect(() => {
		setTotalDiscount(+discount + +coupon);
		const percentajeDiscount = totalDiscount / 100;
		const saving = price * percentajeDiscount;
		if (Number.isInteger(saving)) {
			setSaving(saving);
			setResult(price - saving);
		} else {
			setSaving(saving.toFixed(2));
			setResult((price - saving).toFixed(2));
		}
	}, [price, discount, coupon, totalDiscount, saving]);

	return (
		<Main>
			<Card>
				<Title>Descuento</Title>
				<img src={Discount} alt="" />
				<Label htmlFor="price">Precio</Label>
				<Input id="price" get={price} set={setPrice} type="number" />
				<Label htmlFor="discount">Porcentaje de descuento</Label>
				<Input id="discount" get={discount} set={setDiscount} type="number" />
				<Coupon id="coupons" get={coupon} set={setCoupon} />
				<Result>
					<b>Descuento total:</b> {`${totalDiscount}%`}
				</Result>
				<Result>
					<b>Precio:</b> <del>{price ? `$${price}` : ""}</del>
				</Result>
				<Result>
					<b>Precio final:</b> <strong>{price && totalDiscount ? `$${result}` : ""}</strong>
				</Result>
				<Result>
					<b>Ahorro:</b> {price && totalDiscount ? `$${saving}` : ""}
				</Result>
			</Card>
		</Main>
	);
}
