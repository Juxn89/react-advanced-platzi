import { ComponentType, Dispatch, SetStateAction, useState } from "react"

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

const stateMachineConfig: StateMachineConfig<WizardState, StepNames> = {
	initialStep: 'step1',
	steps: {
		step1: {
			canAdvance: (state) => !!state.name
		},
		step2: {
			canAdvance: (state) => !!state.age
		},
		confirmation: {
			canAdvance: () => true
		}
	},
	views: {
		step1: ({ state, setState }) => (
			<div>
				<input 
					type="text" 
					value={ state.name } 
					onChange={ (e) => setState( (prev) => ({ ...prev, name: e.target.value }) ) }
					placeholder="Full name"
				/>
			</div>),
		step2: ({ state, setState }) => (
			<div>
				<input 
					type="text" 
					value={ state.age } 
					onChange={ (e) => setState( (prev) => ({ ...prev, age: parseInt(e.target.value) }) ) }
					placeholder="Age"
				/>
			</div>),
		confirmation: ({ state }) => (
			<div>
				<p>{state.name} is { state.age } years old</p>
			</div>
		)
	}
}

type WizardState = {
	name: string,
	age: number
}

type StepNames = 'step1' | 'step2' | 'confirmation'

export const StateMachineWizard = () => {
	const [wizardState, setWizardState] = useState<WizardState>({ name: '', age: 0 })
	const [currentStep, setCurrentStep] = useState<StepNames>(stateMachineConfig.initialStep)

	const getStateView = <T, V extends string>(
		config: StateMachineConfig<T, V>, 
		stepName: V): ComponentType<{ state: T, setState: Dispatch<SetStateAction<T>> }> => config.views[stepName]

	const StepConponent = getStateView(stateMachineConfig, currentStep)

	const handleNextStep = () => {
		console.log(':)')
		const canAdvance = stateMachineConfig.steps[currentStep].canAdvance(wizardState)

		if(canAdvance) {
			if(currentStep === 'step1')
				setCurrentStep('step2')
			else if(currentStep === 'step2')
				setCurrentStep('confirmation')
			else
				alert(`You can't move forward yet`)
		}
	}

	return(
		<section>
			<h1>✨ State Machine Wizard ✨</h1>
			<StepConponent state={ wizardState } setState={ setWizardState }/>
			{
				currentStep !== 'confirmation' && (
					<button onClick={ () => handleNextStep() } >Next</button>
				)
			}
		</section>
	)
}