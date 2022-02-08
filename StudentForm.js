//import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import './StudentForm.css'


function isvalidname(name) {
	let n = name.length;
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (let i = 0; i < n; i++) {
		let t = name[i];
		if (nums.includes(t)) {
			return false;
		}
	}
	return true;
}

function isemailValid(email) {
	let number_of_times_at = 0;
	let startposition = email[0];
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	if (startposition === '@' || nums.includes(startposition)) {
		return false;
	}
	else {
		for (let i = 0; i < email.length; i++) {
			let g = email[i];
			if (g === '@') {
				number_of_times_at++;
			}
		}
		if (number_of_times_at > 1 || number_of_times_at < 1) {
			return false;
		}

	}
	return true;
}


function isphonevalid(phone) {
	let phone_digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
	console.log("phone", phone)
	for (let i = 0; i < phone.length; i++) {
		let t = phone[i];
		if (phone_digs.includes(t)) {
			continue;
		}
		else {
			return false;
		}
	}
	return true;

}
function isvalidstreet(street) {
	let n = street.length;
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (let i = 0; i < n; i++) {
		let t = street[i];
		if (nums.includes(t)) {
			return false;
		}
	}
	return true;
}
function isvalidcity(city) {
	let n = city.length;
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (let i = 0; i < n; i++) {
		let t = city[i];
		if (nums.includes(t)) {
			return false;
		}
	}
	return true;
} function isvalidstate(state) {
	let n = state.length;
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (let i = 0; i < n; i++) {
		let t = state[i];
		if (nums.includes(t)) {
			return false;
		}
	}
	return true;
}
function isvalidcountry(country) {
	let n = country.length;
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
	for (let i = 0; i < n; i++) {
		let t = country[i];
		if (nums.includes(t)) {
			return false;
		}
	}
	return true;
}
function ispostalcodevalid(postalcode) {
	let postalcode_digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
	console.log("Postalcode", postalcode)
	for (let i = 0; i < postalcode.length; i++) {
		let t = postalcode[i];
		if (postalcode_digs.includes(t)) {
			continue;
		}
		else {
			return false;
		}
	}
	return true;
}

function StudentForm(props) {
	console.log("inside student form", props)
	const [id, setId] = useState(props.info.id);
	React.useEffect(() => {
		setId(props.info.id);
	}, [props.info.id])


	const [Name, setName] = useState(props.info.Name);
	React.useEffect(() => {
		setName(props.info.Name);
	}, [props.info.Name])
	const [isnameValid, setIsNameValid] = useState(true);


	const [EmailId, setEmailId] = useState(props.info.EmailId);
	React.useEffect(() => {
		setEmailId(props.info.EmailId)
	}, [props.info.EmailId])
	const [isEmailValid, setIsEMailValid] = useState(true);


	const [Phone, setPhone] = useState('');
	React.useEffect(() => {
		setPhone(props.info.Phone)
	}, [props.info.Phone])
	const [isphoneValid, setIsPhoneValid] = useState(true);


	const [Street, setStreet] = useState('');
	React.useEffect(() => {
		setStreet(props.info.Street)
	}, [props.info.Street])
	const [isvalidStreet, setIsStreetValid] = useState(true);


	const [City, setCity] = useState('');
	React.useEffect(() => {
		setCity(props.info.City)
	}, [props.info.City])
	const [isvalidCity, setIsCityValid] = useState(true);

	const [State, setState] = useState('');
	React.useEffect(() => {
		setState(props.info.State)
	}, [props.info.State])
	const [isvalidState, setIsStateValid] = useState(true);

	const [Country, setCountry] = useState('');
	React.useEffect(() => {
		setCountry(props.info.Country)
	}, [props.info.Country])
	const [isvalidCountry, setIsCountryValid] = useState(true);


	const [Postalcode, setPostalcode] = useState('');
	React.useEffect(() => {
		setPostalcode(props.info.Postalcode)
	}, [props.info.Postalcode])
	const [isPostalcodeValid, setIsPostalcodeValid] = useState(true);


	//const [buttonName,setButtonName] = useState('Add');


	const changeName = (event) => {
		setName(event.target.value);
	};
	const changeEmailId = (event) => {
		setEmailId(event.target.value);
	};
	const changePhone = (event) => {
		setPhone(event.target.value);
	};
	const changeStreet = (event) => {
		setStreet(event.target.value);
	};
	const changeCity = (event) => {
		setCity(event.target.value);
	};
	const changeState = (event) => {
		setState(event.target.value);
	};
	const changeCountry = (event) => {
		setCountry(event.target.value);
	};
	const changePostalcode = (event) => {
		setPostalcode(event.target.value);
	};


	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			id,
			Name,
			EmailId,
			Phone,
			Street,
			City,
			State,
			Country,
			Postalcode,
		};

		if (isvalidname(Name)) {
			console.log("Valid Name")
			setIsNameValid(true)
		}
		else {
			setIsNameValid(false)
			console.log("Invalid Name")
			return;
		}

		if (isemailValid(EmailId)) {
			setIsEMailValid(true)
			console.log("Valid EMail")
		}
		else {
			setIsEMailValid(false)
			console.log("Invalid EMail")
			return;
		}

		if (isphonevalid(Phone)) {
			console.log("Phone number valid")
			setIsPhoneValid(true)
		}

		else {
			setIsPhoneValid(false)
			console.log("Invalid Phone Number")
			return;
		}

		if (isvalidstreet(Street)) {
			console.log("Valid Street Name")
			setIsStreetValid(true)
		}
		else {
			setIsStreetValid(false)
			console.log("Invalid Street Name")
			return;
		}

		if (isvalidcity(City)) {
			console.log("Valid City Name")
			setIsCityValid(true)
		}
		else {
			setIsCityValid(false)
			console.log("Invalid City Name")
			return;
		}

		if (isvalidstate(State)) {
			console.log("Valid State Name")
			setIsStateValid(true)
		}
		else {
			setIsStateValid(false)
			console.log("Invalid State Name")
			return;
		}
		if (isvalidcountry(Country)) {
			console.log("Valid Country Name")
			setIsCountryValid(true)
		}
		else {
			setIsCountryValid(false)
			console.log("Invalid Country Name")
			return;
		}

		if (ispostalcodevalid(Postalcode)) {
			console.log("Postal code is valid")
			setIsPhoneValid(true)
		}

		else {
			setIsPostalcodeValid(false)
			console.log("Postalcode is Invalid")
			return;
		}

		props.func(val);
		clearState();
	};

	const clearState = () => {
		setName('');
		setEmailId('');
		setPhone('');
		setStreet('');
		setCity('');
		setState('');
		setCountry('');
		setPostalcode('');
	};

	console.log("Printing props", props)

	return (
		<div className="container">
			<div className="head">Form Validation</div>
			<div class="d-flex">
				<label>Name       </label>
				<input type="text" value={Name} placeholder="Your name.." onChange={changeName} />
				{isnameValid ? null : <p>Invalid Username</p>}
				<label>EmailId     </label>
				<input type="text" value={EmailId} placeholder="Your EmailId." onChange={changeEmailId} />
				{isEmailValid ? null : <p>Invalid Email</p>}
				<label>Phone       </label>
				<input type="text" value={Phone} placeholder="Your Phone number." onChange={changePhone} />
				{isphoneValid ? null : <p>Invalid Phone</p>}
				<label>Street                 </label>
				<input type="text" value={Street} placeholder="Your Street name." onChange={changeStreet} />
				{isvalidStreet ? null : <p>Invalid Streetname</p>}
				<label>City                   </label>
				<input type="text" value={City} placeholder="Your City." onChange={changeCity} />
				{isvalidCity ? null : <p>Invalid Cityname</p>}
				<label>State                 </label>
				<input type="text" value={State} placeholder="Your State." onChange={changeState} />
				{isvalidState ? null : <p>Invalid Statename</p>}
				<label>Country               </label>
				<input type="text" value={Country} placeholder="Your Country." onChange={changeCountry} />
				{isvalidCountry ? null : <p>Invalid Countryname</p>}
				<label>Postalcode            </label>
				<input type="text" value={Postalcode} placeholder="Your Postalcode." onChange={changePostalcode} />
				{isPostalcodeValid ? null : <p>Postal code is Invalid</p>}
			</div>
			<br></br><button type="Add" onClick={transferValue}>{props.isUpdate ? 'Update' : 'Add'} </button>
		</div>
	);
}

export default StudentForm;


/*.head {
	font-size: 4rem;
	font-weight: bold;
	font-style: italic;
	color: skyblue;
	justify-content: center;
	margin-left: 70px;
  }*/
