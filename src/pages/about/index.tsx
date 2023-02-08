import useDomTitle from 'hooks/useDomTitle';
export default function About() {
	useDomTitle();

	// gsap 적용
	return (
		<section className=" bg-about2 bg-cover opacity-100">
			<div className="mx-20 flex">
				<div className=" basis-1/2 h-screen" />
				<article className="flex basis-1/2 items-center">
					<dl className="m-10 flex flex-col w-full gap-10 text-white">
						<dt className="font-semibold text-5xl">
							<h2>About Me...</h2>
						</dt>
						<dd className="text-xl mb-3 break-keep">
							꾸준함, 끈질김, 앞으로 나아가며 스스로를 되돌아보는 위해 스스로를
							업데이트하는 프론트엔드 개발자 입니다.
						</dd>
						<dd className="text-2xl">Name: 이수한</dd>
						<dd className="text-2xl">Age: 33</dd>
						{/* 나이 date year로 계산 */}
						<dd className="text-2xl">
							github: https://github.com/Develing1991
						</dd>
						<dd className="text-2xl">Certificate: 정보처리기사 1급</dd>
						<dd className="text-2xl">
							Skills: React, Next, Vue, HTML, css, Javascript{' '}
						</dd>
					</dl>
				</article>
			</div>
		</section>
	);
}
