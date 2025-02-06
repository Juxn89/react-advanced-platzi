import { ComponentType, Dispatch, SetStateAction } from "react"

interface StateMachineConfig<StateType, StepNames extends string> {
	initialStep: StepNames,
	steps: {
		[key in StepNames]: {
			canAdvance: (state: StateType) => boolean
		}
	}
	views: {
		[key in StepNames]: ComponentType<{
			state: StateType,
			setState: Dispatch<SetStateAction<StateType>>
		}>
	}
}

type WizardState = {
	name: string,
	age: number
}

type StepNames = 'step1' | 'step2' | 'confirmation'

export const App = () => {
	return(
		<>
		</>
	)
}