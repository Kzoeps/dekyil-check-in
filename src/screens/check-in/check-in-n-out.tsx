import * as React from 'react';
import CheckInNOutTabs from "./components/check-in-n-out-tabs";
import CheckIn from "./components/check-in";

export const CheckInNOut = (props: Record<string, unknown>) => {
	const [value, setValue] = React.useState<number>(0);
	const onTabChange = (event: Event, value: number) => {
		setValue(value);
	}
	return <>
		<CheckInNOutTabs value={value} handleChange={onTabChange}/>
		{value === 0 && <CheckIn/>}
	</>
}

export default CheckInNOut;
