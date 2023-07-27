"use client";

export default function Chart() {
	return (
		<div>
			<div className="justify-center items-center flex-column">
				<div className="flex gap-4">
					<div className="text-[20px] w-[130px] bg-[#2E68C1] text-white">Company</div>
					<div className="flex gap-4 border-b pl-2">
						<button>Storm</button>
						<button>900Global</button>
						<button>Ebonite</button>
						<button>Rotogrip</button>
						<button>Brunswick</button>
						<button>Hammer</button>
						<button>DV8</button>
					</div>
				</div>
				<div className="flex gap-4">
					<div className="text-[20px] w-[130px] bg-[#2E68C1] text-white">Performance</div>
					<div className="flex gap-4 border-b pl-2">
						<button>High</button>
						<button>Medium</button>
						<button>Low</button>
					</div>
				</div>
			</div>
		</div>
	);
}
