"use client";
import React from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea, Image, Select, SelectItem, Button } from "@nextui-org/react";
import FileUploadPreview from "@/components/preview";

const genders = [{
		label: "Female",
		value: "Female"
		},
		{
			label: "Male",
			value: "Male"
		},
		{
			label: "Non-binary",
			value: "Non-binary"
		},
		{
			label: "Other",
			value: "Other"
		}
	]

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-2 py-6 bg-zinc-950 rounded-lg">
			<Image
				className="py-2"
				src="/cal_hacks.svg"
				width={300}
				height={300}
				alt="Picture of the author"
			/>
			<div className="flex flex-col text-center justify-center">
				<h1 className="text-5xl font-medium pb-10">Cal Hacks 11.0 Registration</h1>
				<Input type="text" label="Full Name" className="py-1"/>
				<div className="flex justify-center pb-3">
				<Input type="text" label="Country of Residence" className="max-w-xs py-2 pr-3"/>
				<Select 
					label="Gender" 
					className="max-w-xs py-2" 
					>
					{genders.map((g) => (
						<SelectItem key={g.value} value={g.value}>
							{g.label}
						</SelectItem>
					))}
				</Select>
				</div>
				<Input type="text" label="University" className="py-1"/>
				<div className="flex justify-center pb-3">
				<Input type="month" label="Graduation Date" className="max-w-xs py-2 pr-3"/>
				<Input type="text" label="Major" className="max-w-xs py-2"/>
				</div>
				<Textarea
					className="py-2"
					isRequired
					minRows={4}
					label="Why are you interested in attending Cal Hacks 11.0? What are you interested in building? (1000 character maximum)"
					labelPlacement="outside"
					placeholder="Enter your response "
				/>
				<label className="text-left py-2">Attach your resume here:</label><FileUploadPreview></FileUploadPreview>
				<Checkbox className="py-8" color="primary">Are you at least 18 years old?</Checkbox>
				<div className="items-center"><Button className="py-2 hover:bg-purple-600" color="primary">
					Submit
				</Button></div>
			</div>
		</section>
	)
}
